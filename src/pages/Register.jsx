import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logo from "../components/Logo";

function Register() {
    const [step, setStep] = useState(1);
    const [accountType, setAccountType] = useState("farmer");
    const [account, setAccount] = useState({
        fullName: "", nic: "", contactNumber: "", contactNumber2: "", email: "",
        province: "", district: "", streetAddress: "", password: "",
        preferredContactMethod: "phone", whatsappNumber: "", productCategory: "",
        businessName: "", about: ""
    });
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const { register } = useAuth();

    const updateAccount = (event) => {
        setAccount((current) => ({ ...current, [event.target.name]: event.target.value }));
    };

    const createAccount = async () => {
        setError("");
        setIsSubmitting(true);
        try {
            await register({ ...account, role: accountType });
            navigate("/login", {
                replace: true,
                state: { role: accountType, email: account.email }
            });
        } catch (submitError) {
            setError(submitError.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="register-page">
            <div className="register-container">
                <aside className="register-showcase">
                    <Logo className="register-brand" light />
                    <div className="register-showcase-content">
                        <span className="register-badge">FARM TO MARKET</span>
                        <h1>Grow your journey with GoviShop.</h1>
                        <p>Join a trusted community connecting local farmers with buyers across Sri Lanka.</p>
                        <div className="register-benefits">
                            <span>✓ Reach more customers</span>
                            <span>✓ Share your harvest</span>
                            <span>✓ Build trusted connections</span>
                        </div>
                    </div>
                    <div className="register-showcase-orbit">✦</div>
                </aside>

                <section className="register-form-panel">
                    {step === 1 ? (
                        <>
                            <div className="register-form-heading">
                                <span className="register-step">STEP 1 OF 2</span>
                                <h2>Create your account</h2>
                                <p>Tell us a little about yourself to get started.</p>
                            </div>

                            {error && <p className="form-error" role="alert">{error}</p>}
                            <div className="register-fields">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input name="fullName" value={account.fullName} onChange={updateAccount} type="text" placeholder="Enter your full name" required />
                                </div>
                                <div className="form-group">
                                    <label>NIC</label>
                                    <input name="nic" value={account.nic} onChange={updateAccount} type="text" placeholder="Enter your NIC number" required />
                                </div>
                                <div className="form-group">
                                    <label>Contact Number</label>
                                    <input name="contactNumber" value={account.contactNumber} onChange={updateAccount} type="tel" placeholder="Enter your contact number" required />
                                </div>
                                <div className="form-group">
                                    <label>Contact Number 2 (Optional)</label>
                                    <input name="contactNumber2" value={account.contactNumber2} onChange={updateAccount} type="tel" placeholder="Enter another contact number if available" />
                                </div>
                                <div className="form-group">
                                    <label>Email (Optional)</label>
                                    <input name="email" value={account.email} onChange={updateAccount} type="email" placeholder="Enter your email address" required />
                                </div>
                                <div className="form-group">
                                    <label>Province</label>
                                    <input name="province" value={account.province} onChange={updateAccount} type="text" placeholder="Enter your province" required />
                                </div>
                                <div className="form-group">
                                    <label>District</label>
                                    <input name="district" value={account.district} onChange={updateAccount} type="text" placeholder="Enter your district" required />
                                </div>
                                <div className="form-group">
                                    <label>Street Address</label>
                                    <input name="streetAddress" value={account.streetAddress} onChange={updateAccount} type="text" placeholder="Enter your street address" required />
                                </div>
                            </div>

                            <button className="register-continue-button" type="button" onClick={() => setStep(2)}>
                                Continue <span>→</span>
                            </button>
                        </>
                    ) : (
                        <>
                            <div className="register-form-heading">
                                <span className="register-step">STEP 2 OF 2</span>
                                <h2>Tell us about your work</h2>
                                <p>Help us personalize your GoviShop experience.</p>
                            </div>

                            {error && <p className="form-error" role="alert">{error}</p>}
                            <div className="register-fields">
                                <div className="form-group register-field-full">
                                    <label>Account Type</label>
                                    <div className="account-type-options">
                                        <button
                                            type="button"
                                            className={accountType === "farmer" ? "account-type active" : "account-type"}
                                            onClick={() => setAccountType("farmer")}
                                        >
                                            <span>🌱</span>
                                            <strong>Farmer</strong>
                                            <small>Sell your harvest</small>
                                        </button>
                                        <button
                                            type="button"
                                            className={accountType === "buyer" ? "account-type active" : "account-type"}
                                            onClick={() => setAccountType("buyer")}
                                        >
                                            <span>🛒</span>
                                            <strong>Buyer</strong>
                                            <small>Find fresh products</small>
                                        </button>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Preferred Contact Method</label>
                                    <select name="preferredContactMethod" value={account.preferredContactMethod} onChange={updateAccount}>
                                        <option value="phone">Phone call</option>
                                        <option value="whatsapp">WhatsApp</option>
                                        <option value="email">Email</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>WhatsApp Number</label>
                                    <input name="whatsappNumber" value={account.whatsappNumber} onChange={updateAccount} type="tel" placeholder="Enter your WhatsApp number" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input name="password" value={account.password} onChange={updateAccount} type="password" placeholder="Create a password" minLength="8" required />
                                </div>
                                <div className="form-group">
                                    <label>Product Category (Optional)</label>
                                    <input name="productCategory" value={account.productCategory} onChange={updateAccount} type="text" placeholder="e.g. Vegetables, Fruits, Grains" />
                                </div>
                                <div className="form-group">
                                    <label>Farm or Business Name (Optional)</label>
                                    <input name="businessName" value={account.businessName} onChange={updateAccount} type="text" placeholder="Enter your farm or business name" />
                                </div>
                                <div className="form-group register-field-full">
                                    <label>About You (Optional)</label>
                                    <textarea name="about" value={account.about} onChange={updateAccount} placeholder="Tell us briefly about your farm or business" rows="3" />
                                </div>
                            </div>

                            <div className="register-step-actions">
                                <button className="register-back-button" type="button" onClick={() => setStep(1)}>
                                    ← Back
                                </button>
                                <button className="register-continue-button" type="button" onClick={createAccount} disabled={isSubmitting}>
                                    {isSubmitting ? "Creating..." : "Create Account"} <span>✓</span>
                                </button>
                            </div>
                        </>
                    )}
                </section>
            </div>
        </div>
    );
}

export default Register;