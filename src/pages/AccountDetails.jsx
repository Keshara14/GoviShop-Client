import { useAuth } from "../context/AuthContext";

function AccountDetails() {
    const { user } = useAuth();

    const details = [
        ["Full name", user?.fullName],
        ["Account type", user?.role === "farmer" ? "Farmer" : "Buyer"],
        ["Email", user?.email],
        ["NIC", user?.nic],
        ["Contact number", user?.contactNumber],
        ["Alternative contact", user?.contactNumber2 || "Not provided"],
        ["Province", user?.province],
        ["District", user?.district],
        ["Street address", user?.streetAddress],
        ["Preferred contact", user?.preferredContactMethod || "Not provided"],
        ["WhatsApp number", user?.whatsappNumber || "Not provided"],
        ["Product category", user?.productCategory || "Not provided"],
        ["Farm/business name", user?.businessName || "Not provided"],
        ["About", user?.about || "Not provided"]
    ];

    return (
        <section className="account-details-page">
            <div className="account-details-heading">
                <span>YOUR ACCOUNT</span>
                <h1>Registration details</h1>
                <p>These are the details saved when you created your GoviShop account.</p>
            </div>

            <div className="account-details-card">
                {details.map(([label, value]) => (
                    <div className="account-detail" key={label}>
                        <span>{label}</span>
                        <strong>{value || "Not provided"}</strong>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default AccountDetails;
