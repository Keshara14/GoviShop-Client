import { useCallback, useEffect, useState } from "react";
import { useRole } from "../context/RoleContext";
import { useAuth } from "../context/AuthContext";
import { apiRequest } from "../utils/api";

function Bids() {
    const { role } = useRole();
    const { token } = useAuth();
    const [bids, setBids] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [updatingBidId, setUpdatingBidId] = useState("");

    const loadBids = useCallback(async () => {
        try {
            setBids(await apiRequest(role === "farmer" ? "/bids/received" : "/bids/mine", {}, token));
        } catch (requestError) {
            setError(requestError.message);
        } finally {
            setIsLoading(false);
        }
    }, [role, token]);

    useEffect(() => {
        const timer = window.setTimeout(loadBids, 0);
        return () => window.clearTimeout(timer);
    }, [loadBids]);

    const decideBid = async (id, status) => {
        setUpdatingBidId(id);
        setError("");
        try {
            await apiRequest(`/bids/${id}/status`, {
                method: "PATCH",
                body: JSON.stringify({ status })
            }, token);
            await loadBids();
        } catch (requestError) {
            setError(requestError.message);
        } finally {
            setUpdatingBidId("");
        }
    };

    return (
        <div className="bids-page">
            <div className="bids-page-heading">
                <span>{role === "farmer" ? "FARMER WORKSPACE" : "BUYER WORKSPACE"}</span>
                <h1>{role === "farmer" ? "Received Bids" : "My Bids"}</h1>
                <p>{role === "farmer" ? "Review offers from buyers and decide which bids to accept." : "Track the offers you have placed on farmer listings."}</p>
            </div>
            {error && <p className="form-message error" role="alert">{error}</p>}
            <div className="bids-list">
                {isLoading && <p className="empty-state">Loading bids...</p>}
                {!isLoading && !error && bids.length === 0 && <p className="empty-state">No bids to show yet.</p>}
                {bids.map((bid) => (
                    <article className="bid-card" key={bid._id}>
                        <div>
                            <span className="listing-category">{bid.listing?.category || "Fresh produce"}</span>
                            <h2>{bid.listing?.crop || "Listing"}</h2>
                            <p>{bid.quantity} kg at Rs. {Number(bid.offeredPrice).toFixed(2)} / kg · Total Rs. {(bid.quantity * bid.offeredPrice).toFixed(2)}</p>
                            {role === "farmer" && <small>Buyer: {bid.buyer?.fullName || "Buyer"} · {bid.buyer?.email}</small>}
                            <small>Placed {new Date(bid.createdAt).toLocaleDateString()}</small>
                            {bid.message && <blockquote>{bid.message}</blockquote>}
                        </div>
                        <div className="bid-card-side">
                            <span className={`bid-status-pill ${bid.status}`}>{bid.status}</span>
                            {role === "farmer" && bid.status === "pending" && (
                                <div className="bid-decision-actions">
                                    <button type="button" className="accept-bid" disabled={updatingBidId === bid._id} onClick={() => decideBid(bid._id, "accepted")}>Accept</button>
                                    <button type="button" className="reject-bid" disabled={updatingBidId === bid._id} onClick={() => decideBid(bid._id, "rejected")}>Reject</button>
                                </div>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default Bids;
