import { useState } from "react";
import ProduceVisual from "./ProduceVisual";
import { useAuth } from "../context/AuthContext";
import { useRole } from "../context/RoleContext";
import { apiRequest } from "../utils/api";

function Listingcard({ listing }) {
    const { token } = useAuth();
    const { role } = useRole();
    const [isBidOpen, setIsBidOpen] = useState(false);
    const [bid, setBid] = useState({ offeredPrice: listing.price, quantity: listing.quantity, message: "" });
    const [status, setStatus] = useState({ type: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitBid = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: "", message: "" });
        try {
            await apiRequest("/bids", {
                method: "POST",
                body: JSON.stringify({
                    listingId: listing._id,
                    offeredPrice: Number(bid.offeredPrice),
                    quantity: Number(bid.quantity),
                    message: bid.message
                })
            }, token);
            setStatus({ type: "success", message: "Bid submitted successfully." });
            setIsBidOpen(false);
        } catch (error) {
            setStatus({ type: "error", message: error.message });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="listing-card">
            <ProduceVisual name={listing.crop} className="marketplace-produce-visual" />
            <div className="listing-card-content">
                <div className="listing-card-heading">
                    <div>
                        <span className="listing-category">{listing.category || "Fresh produce"}</span>
                        <h3>{listing.crop}</h3>
                    </div>
                    <span className="listing-availability">Available</span>
                </div>
                <p className="listing-location">{listing.location || "Local farm"}</p>
                <div className="listing-card-footer">
                    <strong>Rs. {listing.price} <small>/ kg</small></strong>
                    <span>{listing.quantity} kg</span>
                </div>
                {role === "buyer" && (
                    <button type="button" onClick={() => setIsBidOpen((open) => !open)}>
                        {isBidOpen ? "Close Bid Form" : "Place a Bid"} <span>→</span>
                    </button>
                )}
                {status.message && (
                    <p className={`bid-status ${status.type}`} role={status.type === "error" ? "alert" : "status"}>
                        {status.message}
                    </p>
                )}
                {isBidOpen && (
                    <form className="bid-form" onSubmit={submitBid}>
                        <label>
                            Offer price per kg
                            <input type="number" min="0.01" step="0.01" value={bid.offeredPrice}
                                onChange={(event) => setBid({ ...bid, offeredPrice: event.target.value })} required />
                        </label>
                        <label>
                            Quantity (kg)
                            <input type="number" min="0.01" max={listing.quantity} step="0.01" value={bid.quantity}
                                onChange={(event) => setBid({ ...bid, quantity: event.target.value })} required />
                        </label>
                        <label>
                            Message
                            <textarea rows="3" value={bid.message}
                                onChange={(event) => setBid({ ...bid, message: event.target.value })} />
                        </label>
                        <p className="bid-total">
                            Total offer: <strong>Rs. {(Number(bid.offeredPrice || 0) * Number(bid.quantity || 0)).toFixed(2)}</strong>
                        </p>
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Submit Bid"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Listingcard;
