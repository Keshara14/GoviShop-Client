import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProduceVisual from "../components/ProduceVisual";
import { useAuth } from "../context/AuthContext";
import { apiRequest } from "../utils/api";

function Mylistings() {
    const navigate = useNavigate();
    const { token } = useAuth();
    const [listings, setListings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let isCurrent = true;

        const loadListings = async () => {
            try {
                const data = await apiRequest("/listings/mine", {}, token);
                if (isCurrent) {
                    setListings(data);
                }
            } catch (requestError) {
                if (isCurrent) {
                    setError(requestError.message);
                }
            } finally {
                if (isCurrent) {
                    setIsLoading(false);
                }
            }
        };

        loadListings();
        return () => {
            isCurrent = false;
        };
    }, [token]);

    return (
        <div className="my-listings-section">
            <div className="my-listings-header">
                <div>
                    <h1>My Listings</h1>
                    <p>Manage your agricultural products.</p>
                </div>

                <button className="add-listing-btn" type="button" onClick={() => navigate("/create-listing")}>
                    + Add Listing
                </button>
            </div>

            <div className="my-listings-container">
                {isLoading && <p className="empty-state">Loading your listings...</p>}
                {!isLoading && error && <p className="form-message error" role="alert">{error}</p>}
                {!isLoading && !error && listings.length === 0 && (
                    <p className="empty-state">You haven't created any listings yet.</p>
                )}
                {!isLoading && !error && listings.map((listing) => (
                    <article className="my-listing-card" key={listing._id}>
                        <ProduceVisual name={listing.crop} className="my-listing-visual" />
                        <div className="listing-details">
                            <span className="listing-category">{listing.category}</span>
                            <h3>{listing.crop}</h3>
                            <p>{listing.quantity} kg available · {listing.location}</p>
                            <strong className="my-listing-price">
                                Rs. {listing.price} <small>/ kg</small>
                            </strong>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default Mylistings;