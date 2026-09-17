
function CreateListing() {
    return (
        <div className="create-listing-section">

            <h1>Create Listing</h1>

            <p className="page-description">
                Add your agricultural product to the marketplace.
            </p>

            <div className="listing-form">

                <div className="form-group">
                    <label>Crop Name</label>
                    <input
                        type="text"
                        placeholder="Enter crop name"
                    />
                </div>

                <div className="form-row">

                    <div className="form-group">
                        <label>Category</label>

                        <select>
                            <option value="">Select category</option>
                            <option value="vegetables">Vegetables</option>
                            <option value="fruits">Fruits</option>
                            <option value="grains">Grains</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Location</label>

                        <select>
                            <option value="">Select location</option>
                            <option value="ratnapura">Ratnapura</option>
                            <option value="colombo">Colombo</option>
                            <option value="kandy">Kandy</option>
                        </select>
                    </div>

                </div>

                <div className="form-row">

                    <div className="form-group">
                        <label>Quantity (kg)</label>

                        <input
                            type="number"
                            placeholder="Enter quantity"
                        />
                    </div>

                    <div className="form-group">
                        <label>Price per kg (Rs.)</label>

                        <input
                            type="number"
                            placeholder="Enter price"
                        />
                    </div>

                </div>

                <div className="form-group">
                    <label>Description</label>

                    <textarea
                        placeholder="Describe your product..."
                        rows="5"
                    ></textarea>
                </div>

                <button className="create-listing-btn">
                    Create Listing
                </button>

            </div>

        </div>
    );
}

export default CreateListing;

