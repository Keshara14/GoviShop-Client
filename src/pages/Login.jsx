import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRole } from "../context/RoleContext";
import { useAuth } from "../context/AuthContext";
import Logo from "../components/Logo";

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const { changeRole } = useRole();
    const { login } = useAuth();
    const [role, setRole] = useState(location.state?.role === "buyer" ? "buyer" : "farmer");
    const [email, setEmail] = useState(location.state?.email || "");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        setIsSubmitting(true);

        try {
            const authenticatedSession = await login(email, password);
            changeRole(authenticatedSession.user.role);
            navigate("/home", { replace: true });
        } catch (submitError) {
            setError(submitError.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="login-page">
            <section className="login-container">
                <aside className="login-showcase">
                    <Logo className="login-brand" light />
                    <div className="login-showcase-content">
                        <span className="login-badge">WELCOME BACK</span>
                        <h1>Good things grow when we connect.</h1>
                        <p>Access your marketplace and continue building meaningful connections from farm to market.</p>
                        <div className="login-showcase-stats">
                            <span><strong>01</strong> Trusted marketplace</span>
                            <span><strong>02</strong> Local connections</span>
                            <span><strong>03</strong> Fresh opportunities</span>
                        </div>
                    </div>
                    <div className="login-showcase-orbit">✦</div>
                </aside>

                <section className="login-form-panel">
                    <div className="login-form-heading">
                        <span className="login-eyebrow">SIGN IN TO CONTINUE</span>
                        <h2>Welcome back</h2>
                        <p>Choose your account type and enter your details.</p>
                    </div>

                    <div className="login-role-options" role="group" aria-label="Account type">
                        <button
                            type="button"
                            className={role === "farmer" ? "login-role active" : "login-role"}
                            onClick={() => setRole("farmer")}
                        >
                            <span>🌱</span>
                            <strong>Farmer</strong>
                            <small>Manage your harvest</small>
                        </button>
                        <button
                            type="button"
                            className={role === "buyer" ? "login-role active" : "login-role"}
                            onClick={() => setRole("buyer")}
                        >
                            <span>🛒</span>
                            <strong>Buyer</strong>
                            <small>Find fresh products</small>
                        </button>
                    </div>

                    <form className="login-form" onSubmit={handleSubmit}>
                        {error && <p className="form-error" role="alert">{error}</p>}
                        <label className="form-group">
                            Email address
                            <input
                                type="text"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="you@example.com"
                                required
                            />
                        </label>

                        <label className="form-group">
                            Password
                            <input
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder="Enter your password"
                                required
                            />
                        </label>

                        <div className="login-form-options">
                            <label>
                                <input type="checkbox" />
                                Remember me
                            </label>
                            <button type="button">Forgot password?</button>
                        </div>

                        <button className="login-submit" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Signing in..." : `Log in as ${role === "farmer" ? "Farmer" : "Buyer"}`} <span>→</span>
                        </button>
                    </form>
                </section>
            </section>
        </main>
    );
}

export default Login;