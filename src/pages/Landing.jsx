import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import Logo from "../components/Logo";
import ProduceVisual from "../components/ProduceVisual";

const stats = [
    { value: 1250, label: "Farmers joined" },
    { value: 860, label: "Active buyers" },
    { value: 3400, label: "Products listed" },
    { value: 2100, label: "Successful connections" },
];

function CommunityStats() {
    const sectionRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);
    const [counts, setCounts] = useState(stats.map(() => 0));

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setHasStarted(true);
                observer.disconnect();
            }
        }, { threshold: 0.3 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!hasStarted) {
            return undefined;
        }

        const startTime = performance.now();
        const duration = 1800;
        let animationFrame;

        const animate = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            setCounts(stats.map((stat) => Math.floor(stat.value * easedProgress)));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [hasStarted]);

    return (
        <section ref={sectionRef} className="landing-section community-stats-section">
            <div className="section-title">
                <p>OUR GROWING COMMUNITY</p>
                <h2>Growing together, from farm to market.</h2>
                <span>Trusted by farmers and buyers building a better agricultural marketplace.</span>
            </div>

            <div className="community-stats-grid">
                {stats.map((stat, index) => (
                    <div className="community-stat" key={stat.label}>
                        <strong>{counts[index].toLocaleString()}+</strong>
                        <span>{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Landing() {
    const navigate = useNavigate();
    const { language, toggleLanguage } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleProductClick = () => {
        navigate("/register");
    };

    return (
        <div className="landing-page">
            <header className="landing-navbar">
                <Logo className="landing-logo" />

                <nav className="landing-nav-links">
                    <div className="landing-desktop-links">
                        <a href="#products">Products</a>
                        <a href="#about">About</a>
                        <Link to="/login">Login</Link>
                    </div>
                    <div className="landing-mobile-menu">
                        <button
                            type="button"
                            className="landing-menu-button"
                            aria-label="Open navigation menu"
                            aria-expanded={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
                        >
                            ⋯
                        </button>
                        {isMobileMenuOpen && (
                            <div className="landing-mobile-menu-panel">
                                <a href="#products" onClick={() => setIsMobileMenuOpen(false)}>Products</a>
                                <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
                            </div>
                        )}
                    </div>
                    <button
                        type="button"
                        className="landing-language-button"
                        onClick={toggleLanguage}
                        aria-label="Change language"
                    >
                        🌐 {language === "en" ? "සිංහල" : "English"}
                    </button>
                    <Link to="/register" className="signup-button">Sign Up</Link>
                </nav>
            </header>

            <section className="landing-hero">
                <div className="hero-content">
                    <p className="hero-label">FROM FARM TO MARKET</p>
                    <h1>
                        Fresh From
                        <br />
                        Farmers.
                        <br />
                        <span className="hero-final-line">Directly To The Market</span>
                    </h1>
                    <p className="hero-description">
                        GoviShop connects farmers with buyers through a simple agricultural marketplace.
                    </p>
                    <div className="hero-buttons">
                        <a href="#products" className="primary-button">Explore Products</a>
                        <Link to="/register" className="secondary-button">Join GoviShop</Link>
                    </div>
                </div>

                <a href="#about" className="scroll-indicator">
                    ↓
                    <span>Scroll to explore</span>
                </a>
            </section>

            <section className="why-govishop" id="about">
                <div className="section-title">
                    <p>WHY GOVISHOP?</p>
                    <h2>Connecting Agriculture More Directly</h2>
                </div>

                <div className="benefits-grid">
                    <div className="benefit-card">
                        <span>🌱</span>
                        <h3>For Farmers</h3>
                        <p>List your products and reach potential buyers directly.</p>
                    </div>
                    <div className="benefit-card">
                        <span>🛒</span>
                        <h3>For Buyers</h3>
                        <p>Discover agricultural products from local farmers.</p>
                    </div>
                    <div className="benefit-card">
                        <span>🤝</span>
                        <h3>Direct Connections</h3>
                        <p>Create better connections between farmers and agricultural buyers.</p>
                    </div>
                </div>
            </section>

            <CommunityStats />

            <section className="landing-section" id="products">
                <div className="section-title">
                    <p>EXPLORE THE MARKET</p>
                    <h2>Trending Products</h2>
                    <span>Discover fresh agricultural products available from local farmers.</span>
                </div>

                <div className="product-grid">
                    <div className="product-card" onClick={handleProductClick}>
                        <ProduceVisual name="Bell Pepper" />
                        <div className="product-info">
                            <span className="product-category">Specialty Vegetable</span>
                            <h3>Bell Pepper</h3>
                            <p>Available from Ratnapura</p>
                            <strong>Rs. 450 / kg</strong>
                        </div>
                    </div>
                    <div className="product-card" onClick={handleProductClick}>
                        <ProduceVisual name="Tomato" />
                        <div className="product-info">
                            <span className="product-category">Fresh Vegetable</span>
                            <h3>Tomato</h3>
                            <p>Available from Colombo</p>
                            <strong>Rs. 180 / kg</strong>
                        </div>
                    </div>
                    <div className="product-card" onClick={handleProductClick}>
                        <ProduceVisual name="Green Chilli" />
                        <div className="product-info">
                            <span className="product-category">Specialty Vegetable</span>
                            <h3>Green Chilli</h3>
                            <p>Available from Kandy</p>
                            <strong>Rs. 250 / kg</strong>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="landing-footer">
                <Logo className="landing-footer-logo" />
                <p>From Farm to Market</p>
                <span>© 2026 GoviShop</span>
            </footer>
        </div>
    );
}

export default Landing;
