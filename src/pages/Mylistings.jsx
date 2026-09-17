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

                    <div className="listing-details">
                        <h3>Bell Pepper</h3>

                        <p>
                            <strong>Quantity:</strong> 500 kg
                        </p>

                        <p>
                            <strong>Price:</strong> Rs. 450 / kg
                        </p>

                        <p>
                            <strong>Location:</strong> Ratnapura
                        </p>
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

                    <div className="listing-details">
                        <h3>Tomato</h3>

                        <p>
                            <strong>Quantity:</strong> 300 kg
                        </p>

                        <p>
                            <strong>Price:</strong> Rs. 180 / kg
                        </p>

                        <p>
                            <strong>Location:</strong> Colombo
                        </p>
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