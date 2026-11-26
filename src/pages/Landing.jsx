import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import Logo from "../components/Logo";

const produceExamples = [
    { name: "Bell Pepper", category: "Vegetables", image: "/images/produce/bell-pepper.jpg" },
    { name: "Tomato", category: "Fresh produce", image: "/images/produce/tomato.jpg" },
    { name: "Green Chilli", category: "Seasonal crops", image: "/images/produce/green-chilli.jpg" }
];

function Landing() {
    const { language, toggleLanguage } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="landing-page">
            <header className="landing-navbar">
                <Link to="/" className="landing-brand" aria-label="GoviShop home">
                    <Logo className="landing-logo" />
                </Link>

                <nav className="landing-nav-links" aria-label="Main navigation">
                    <div className="landing-desktop-links">
                        <a href="#how-it-works">How it works</a>
                        <a href="#products">Explore produce</a>
                    </div>
                    <div className="landing-mobile-menu">
                        <button
                            type="button"
                            className="landing-menu-button"
                            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="landing-mobile-menu-panel"
                            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                {isMobileMenuOpen
                                    ? <path d="m6 6 12 12M18 6 6 18" />
                                    : <path d="M4 7h16M4 12h16M4 17h16" />}
                            </svg>
                        </button>
                        {isMobileMenuOpen && (
                            <div className="landing-mobile-menu-panel" id="landing-mobile-menu-panel">
                                <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>How it works</a>
                                <a href="#products" onClick={() => setIsMobileMenuOpen(false)}>Explore produce</a>
                                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>Log in</Link>
                                <button
                                    type="button"
                                    onClick={() => {
                                        toggleLanguage();
                                        setIsMobileMenuOpen(false);
                                    }}
                                >
                                    Change language · {language === "en" ? "සිංහල" : "English"}
                                </button>
                            </div>
                        )}
                    </div>
                    <button
                        type="button"
                        className="landing-language-button"
                        onClick={toggleLanguage}
                        aria-label="Change language"
                    >
                        <span aria-hidden="true">🌐</span> {language === "en" ? "සිංහල" : "English"}
                    </button>
                    <Link to="/login" className="landing-login-link">Log in</Link>
                    <Link to="/register" className="signup-button">Get started</Link>
                </nav>
            </header>

            <main>
                <section className="landing-hero">
                    <div className="hero-content">
                        <p className="hero-label"><span aria-hidden="true" /> LOCAL HARVESTS, DIRECT CONNECTIONS</p>
                        <h1>
                            A better way to move from
                            <span className="hero-final-line">farm to market.</span>
                        </h1>
                        <p className="hero-description">
                            Discover local produce, connect with farmers, and make offers directly through one simple marketplace.
                        </p>
                        <div className="hero-buttons">
                            <a href="#products" className="primary-button">Explore the marketplace <span aria-hidden="true">→</span></a>
                            <Link to="/register" className="secondary-button">Join GoviShop</Link>
                        </div>
                        <p className="hero-assurance">
                            <span aria-hidden="true">✓</span> A simpler connection between growers and buyers
                        </p>
                    </div>

                    <div className="hero-image">
                        <img src="/images/farm-hero.jpg" alt="Green farmland and a home among the fields" />
                        <div className="hero-image-caption">
                            <span>GOVISHOP MARKETPLACE</span>
                            <strong>Good produce. Closer connections.</strong>
                        </div>
                        <div className="hero-image-badge">
                            <span aria-hidden="true">✦</span>
                            From local farms
                        </div>
                    </div>
                </section>

                <section className="landing-section process-section" id="how-it-works">
                    <div className="section-title">
                        <p>HOW IT WORKS</p>
                        <h2>Three simple steps to get started</h2>
                        <span>Bring your harvest to market or find produce for your business.</span>
                    </div>
                    <div className="process-grid">
                        <article className="process-card">
                            <span className="process-number">01</span>
                            <h3>Farmers create a listing</h3>
                            <p>Add your crop, quantity, location, and asking price to reach interested buyers.</p>
                        </article>
                        <article className="process-card">
                            <span className="process-number">02</span>
                            <h3>Buyers make an offer</h3>
                            <p>Explore produce listings and send an offer with the price and quantity you need.</p>
                        </article>
                        <article className="process-card">
                            <span className="process-number">03</span>
                            <h3>Farmers review bids</h3>
                            <p>Compare incoming offers and accept or reject bids from your farmer workspace.</p>
                        </article>
                    </div>
                </section>

                <section className="why-govishop" id="about">
                    <div className="section-title">
                        <p>WHY GOVISHOP</p>
                        <h2>A more direct way to trade</h2>
                        <span>Purpose-built tools make everyday produce trading easier to manage.</span>
                    </div>
                    <div className="benefits-grid">
                        <article className="benefit-card">
                            <span className="benefit-icon" aria-hidden="true">01</span>
                            <h3>For farmers</h3>
                            <p>Showcase your harvest, set your terms, and manage buyer offers in one place.</p>
                        </article>
                        <article className="benefit-card">
                            <span className="benefit-icon" aria-hidden="true">02</span>
                            <h3>For buyers</h3>
                            <p>Find local produce and send a clear offer that fits your order.</p>
                        </article>
                        <article className="benefit-card">
                            <span className="benefit-icon" aria-hidden="true">03</span>
                            <h3>Direct connections</h3>
                            <p>Keep listings and bids together, from the first offer to the farmer's decision.</p>
                        </article>
                    </div>
                </section>

                <section className="landing-section products-section" id="products">
                    <div className="section-title">
                        <p>EXPLORE THE MARKETPLACE</p>
                        <h2>Fresh produce, direct from growers</h2>
                        <span>These are examples of the crops you can discover from local farmers.</span>
                    </div>
                    <div className="product-grid">
                        {produceExamples.map((produce) => (
                            <article className="product-card" key={produce.name}>
                                <img
                                    className="product-photo"
                                    src={produce.image}
                                    alt={produce.name}
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="product-info">
                                    <span className="product-category">{produce.category}</span>
                                    <h3>{produce.name}</h3>
                                    <p>Explore local listings and make an offer directly.</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="landing-cta">
                    <p className="cta-eyebrow">YOUR NEXT HARVEST STARTS HERE</p>
                    <h2>Ready to connect?</h2>
                    <p>Join GoviShop as a farmer or buyer and start exploring the marketplace.</p>
                    <Link to="/register" className="primary-button">Create your account <span aria-hidden="true">→</span></Link>
                </section>
            </main>

            <footer className="landing-footer">
                <Link to="/" className="landing-brand" aria-label="GoviShop home">
                    <Logo className="landing-footer-logo" light />
                </Link>
                <p>Connecting local harvests with the people who need them.</p>
                <div className="landing-footer-links">
                    <a href="#how-it-works">How it works</a>
                    <a href="#products">Explore produce</a>
                    <Link to="/login">Log in</Link>
                </div>
                <span>© 2026 GoviShop</span>
            </footer>
        </div>
    );
}

export default Landing;
