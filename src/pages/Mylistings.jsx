import ProduceVisual from "../components/ProduceVisual";

function Mylistings() {
    return (
        <div className="my-listings-section">

            <div className="my-listings-header">
                <div>
                    <h1>My Listings</h1>
                    <p>Manage your agricultural products.</p>
                </div>

                <button className="add-listing-btn">
                    + Add Listing
                </button>
            </div>


            <div className="my-listings-container">

                <div className="my-listing-card">
                    <ProduceVisual name="Bell Pepper" className="my-listing-visual" />

                    <div className="listing-details">
                        <span className="listing-category">Vegetables</span>
                        <h3>Bell Pepper</h3>

                        <p>500 kg available · Ratnapura</p>
                        <strong className="my-listing-price">Rs. 450 <small>/ kg</small></strong>
                    </div>

                    <div className="listing-actions">
                        <button className="view-btn">
                            View
                        </button>

                        <button className="edit-btn">
                            Edit
                        </button>
                    </div>

                </div>


                <div className="my-listing-card">
                    <ProduceVisual name="Tomato" className="my-listing-visual" />

                    <div className="listing-details">
                        <span className="listing-category">Vegetables</span>
                        <h3>Tomato</h3>
                        <p>300 kg available · Colombo</p>
                        <strong className="my-listing-price">Rs. 180 <small>/ kg</small></strong>
                    </div>

                    <div className="listing-actions">
                        <button className="view-btn">
                            View
                        </button>

                        <button className="edit-btn">
                            Edit
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Mylistings;