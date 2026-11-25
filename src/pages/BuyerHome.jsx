import { useRole } from "../context/RoleContext";
import farmHero from "../images/farm-Hero.jpg";
import ProduceVisual from "../components/ProduceVisual";
import StatIcon from "../components/StatIcon";

function BuyerHome() {
    const { changeRole } = useRole();

    return (
        <div className="home-page buyer-dashboard">
            <section className="home-hero">
                <div className="hero-content">
                    <p className="hero-small-text">GoviShop Buyer Dashboard</p>
                    <h1>Find the best harvest for your business 🛒</h1>
                    <p>
                        Discover fresh agricultural products directly from trusted
                        local farmers.
                    </p>
                    <button className="hero-button" type="button" onClick={() => window.location.href = "/marketplace"}>
                        Browse Marketplace
                    </button>
                </div>

                <div className="hero-image">
                    <img src={farmHero} alt="Fresh agricultural products" />
                </div>
            </section>

            <section className="home-stats">
                <div className="home-stat-card">
                    <StatIcon type="sales" />
                    <div>
                        <p>Active Orders</p>
                        <h2>4</h2>
                    </div>
                </div>
                <div className="home-stat-card">
                    <StatIcon type="saved" />
                    <div>
                        <p>Saved Products</p>
                        <h2>12</h2>
                    </div>
                </div>
                <div className="home-stat-card">
                    <StatIcon type="sales" />
                    <div>
                        <p>Completed Purchases</p>
                        <h2>28</h2>
                    </div>
                </div>
                <div className="home-stat-card">
                    <StatIcon type="earnings" />
                    <div>
                        <p>Total Spent</p>
                        <h2>Rs. 185K</h2>
                    </div>
                </div>
            </section>

            <section className="home-section">
                <div className="section-header">
                    <div>
                        <h2>Recommended Products</h2>
                        <p>Fresh products selected for you</p>
                    </div>
                    <button className="view-all-btn" type="button" onClick={() => window.location.href = "/marketplace"}>
                        View All
                    </button>
                </div>

                <div className="home-listings">
                    <div className="home-listing-card">
                        <ProduceVisual name="Bell Pepper" className="product-icon" />
                        <div className="listing-info">
                            <h3>Bell Pepper</h3>
                            <p>500 kg · Ratnapura</p>
                            <span>Rs. 450 / kg</span>
                        </div>
                        <div className="listing-status">Available</div>
                    </div>
                    <div className="home-listing-card">
                        <ProduceVisual name="Tomato" className="product-icon" />
                        <div className="listing-info">
                            <h3>Tomato</h3>
                            <p>300 kg · Colombo</p>
                            <span>Rs. 180 / kg</span>
                        </div>
                        <div className="listing-status">Available</div>
                    </div>
                    <div className="home-listing-card">
                        <ProduceVisual name="Green Chilli" className="product-icon" />
                        <div className="listing-info">
                            <h3>Green Chilli</h3>
                            <p>250 kg · Kandy</p>
                            <span>Rs. 250 / kg</span>
                        </div>
                        <div className="listing-status">Available</div>
                    </div>
                </div>
            </section>

            <section className="quick-actions-section">
                <h2>Buyer Actions</h2>
                <div className="quick-actions">
                    <button className="quick-action" type="button" onClick={() => window.location.href = "/marketplace"}>
                        <span>🔎</span>
                        <div>
                            <h3>Browse Marketplace</h3>
                            <p>Find fresh products</p>
                        </div>
                    </button>
                    <button className="quick-action" type="button">
                        <span>❤️</span>
                        <div>
                            <h3>Saved Products</h3>
                            <p>View your favorites</p>
                        </div>
                    </button>
                    <button className="quick-action" type="button" onClick={() => changeRole("farmer")}>
                        <span>🌱</span>
                        <div>
                            <h3>Switch to Farmer</h3>
                            <p>Open farmer dashboard</p>
                        </div>
                    </button>
                </div>
            </section>

            <section className="offers-section">
                <div className="section-header">
                    <div>
                        <h2>Recent Purchases</h2>
                        <p>Your latest agricultural orders</p>
                    </div>
                    <button className="view-all-btn" type="button">View All</button>
                </div>
                <div className="offer-card">
                    <div>
                        <h3>Bell Pepper</h3>
                        <p>Order #GS-1042 · Ratnapura</p>
                    </div>
                    <strong>Rs. 22,500</strong>
                    <div className="offer-status">Delivered</div>
                </div>
                <div className="offer-card">
                    <div>
                        <h3>Tomato</h3>
                        <p>Order #GS-1038 · Colombo</p>
                    </div>
                    <strong>Rs. 12,600</strong>
                    <div className="offer-status">In Transit</div>
                </div>
            </section>
        </div>
    );
}

export default BuyerHome;
