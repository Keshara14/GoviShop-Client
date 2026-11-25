
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function CreateListing() {
    const navigate = useNavigate();
    const { token } = useAuth();
    const [formData, setFormData] = useState({
        crop: "",
        category: "",
        location: "",
        quantity: "",
        price: "",
        description: ""
    });
    const [status, setStatus] = useState({ type: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((currentData) => ({ ...currentData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus({ type: "", message: "" });

        const quantity = Number(formData.quantity);
        const price = Number(formData.price);

        if (
            !formData.crop.trim() ||
            !formData.category ||
            !formData.location ||
            !Number.isFinite(quantity) ||
            quantity <= 0 ||
            !Number.isFinite(price) ||
            price <= 0
        ) {
            setStatus({
                type: "error",
                message: "Please complete all required fields with positive values."
            });
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("http://localhost:5000/api/listings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    ...formData,
                    crop: formData.crop.trim(),
                    quantity,
                    price,
                    description: formData.description.trim()
                })
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Unable to create listing");
            }

            navigate("/marketplace");
        } catch (error) {
            console.error("Failed to create listing:", error);
            setStatus({ type: "error", message: error.message });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="create-listing-section">

            <h1>Create Listing</h1>

            <p className="page-description">
                Add your agricultural product to the marketplace.
            </p>

            <form className="listing-form" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Crop Name</label>
                    <input
                        type="text"
                        name="crop"
                        placeholder="Enter crop name"
                        value={formData.crop}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-row">

                    <div className="form-group">
                        <label>Category</label>

                        <select name="category" value={formData.category} onChange={handleChange} required>
                            <option value="">Select category</option>
                            <option value="vegetables">Vegetables</option>
                            <option value="fruits">Fruits</option>
                            <option value="grains">Grains</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Location</label>

                        <select name="location" value={formData.location} onChange={handleChange} required>
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
                            name="quantity"
                            placeholder="Enter quantity"
                            min="0.01"
                            value={formData.quantity}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Price per kg (Rs.)</label>

                        <input
                            type="number"
                            name="price"
                            placeholder="Enter price"
                            min="0.01"
                            value={formData.price}
                            onChange={handleChange}
                            required
                        />
                    </div>

                </div>

                <div className="form-group">
                    <label>Description</label>

                    <textarea
                        name="description"
                        placeholder="Describe your product..."
                        rows="5"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>

                {status.message && (
                    <p role="alert" className={`listing-form-message ${status.type}`}>
                        {status.message}
                    </p>
                )}

                <button className="create-listing-btn" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Creating..." : "Create Listing"}
                </button>

            </form>

        </div>
    );
}

export default CreateListing;
