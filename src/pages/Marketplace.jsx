
import { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import Listingcard from "../components/Listingcard";
import Filterbar from "../components/Filterbar";
import { useAuth } from "../context/AuthContext";
import { API_URL } from "../utils/api";

function Marketplace() {
    const [listings, setListings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const { token } = useAuth();

    useEffect(() => {
        const loadListings = async () => {
            try {
                const response = await fetch(`${API_URL}/listings`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                if (!response.ok) {
                    throw new Error("Unable to load listings");
                }

                const data = await response.json();
                setListings(data);
            } catch (requestError) {
                console.error("Failed to load listings:", requestError);
                setError("Unable to load listings. Please try again.");
            } finally {
                setIsLoading(false);
            }
        };

        loadListings();
    }, [token]);

    return (
        <div className="marketplace-section">

            <h1>Marketplace</h1>

            <p>
                Find fresh agricultural products from local farmers.
            </p>

            <Searchbar />

            <Filterbar />

            <div className="listings-grid">
                {isLoading && <p>Loading listings...</p>}
                {!isLoading && error && <p>{error}</p>}
                {!isLoading && !error && listings.length === 0 && (
                    <p>No listings are available yet.</p>
                )}
                {!isLoading && !error && listings.map((listing) => (
                    <Listingcard key={listing._id} listing={listing} />
                ))}
            </div>
        </div>
    );
}

export default Marketplace;
