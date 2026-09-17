
import Header from "../components/Header";
import farmHero from "../images/farm-Hero.jpg"
function Home() {
    return (
        <div className="home-page">

            {/* Welcome Section */}

            <section className="home-hero">

                <div className="hero-content">

                    <p className="hero-small-text">
                        GoviShop Dashboard
                    </p>

                    <h1>
                        Welcome back, Harindu 👋
                    </h1>

                    <p>
                        Manage your agricultural products and connect
                        with buyers through GoviShop.
                    </p>

                    <button className="hero-button">
                        + Create Listing
                    </button>

                </div>

                <div className="hero-image">
                    <img
                        src="/images/farm-hero.jpg"
                        src={farmHero}                        
                        alt="Agricultural farm"
                    />
                </div>

            </section>


            {/* Statistics */}

            <section className="home-stats">

                <div className="home-stat-card">

                    <div className="stat-icon">
                        🌱
                    </div>

                    <div>
                        <p>Active Listings</p>
                        <h2>12</h2>
                    </div>

                </div>


                <div className="home-stat-card">

                    <div className="stat-icon">
                        💰
                    </div>

                    <div>
                        <p>Pending Offers</p>
                        <h2>5</h2>
                    </div>

                </div>


                <div className="home-stat-card">

                    <div className="stat-icon">
                        🛒
                    </div>

                    <div>
                        <p>Completed Sales</p>
                        <h2>20</h2>
                    </div>

                </div>


                <div className="home-stat-card">

                    <div className="stat-icon">
                        📈
                    </div>

                    <div>
                        <p>Total Earnings</p>
                        <h2>Rs. 125K</h2>
                    </div>

                </div>

            </section>


            {/* Main Content */}

            <section className="home-content">

                {/* Recent Listings */}

                <div className="home-section">

                    <div className="section-header">

                        <div>
                            <h2>Recent Listings</h2>

                            <p>
                                Your recently added agricultural products
                            </p>
                        </div>

                        <button className="view-all-btn">
                            View All
                        </button>

                    </div>


                    <div className="home-listings">

                        <div className="home-listing-card">

                            <img
                                src="/images/bell-pepper.jpg"
                                alt="Bell Pepper"
                            />

                            <div className="listing-info">

                                <h3>Bell Pepper</h3>

                                <p>500 kg</p>

                                <span>
                                    Rs. 450 / kg
                                </span>

                            </div>

                            <div className="listing-status">
                                Active
                            </div>

                        </div>


                        <div className="home-listing-card">

                            <img
                                src="/images/tomato.jpg"
                                alt="Tomato"
                            />

                            <div className="listing-info">

                                <h3>Tomato</h3>

                                <p>300 kg</p>

                                <span>
                                    Rs. 180 / kg
                                </span>

                            </div>

                            <div className="listing-status">
                                Active
                            </div>

                        </div>


                        <div className="home-listing-card">

                            <img
                                src="/images/green-chilli.jpg"
                                alt="Green Chilli"
                            />

                            <div className="listing-info">

                                <h3>Green Chilli</h3>

                                <p>250 kg</p>

                                <span>
                                    Rs. 250 / kg
                                </span>

                            </div>

                            <div className="listing-status">
                                Active
                            </div>

                        </div>

                    </div>

                </div>


                {/* Quick Actions */}

                <div className="quick-actions-section">

                    <h2>Quick Actions</h2>

                    <div className="quick-actions">

                        <button className="quick-action">
                            <span>＋</span>
                            <div>
                                <h3>Create Listing</h3>
                                <p>Add a new product</p>
                            </div>
                        </button>


                        <button className="quick-action">
                            <span>🛒</span>
                            <div>
                                <h3>Marketplace</h3>
                                <p>Find agricultural products</p>
                            </div>
                        </button>


                        <button className="quick-action">
                            <span>📋</span>
                            <div>
                                <h3>My Listings</h3>
                                <p>Manage your products</p>
                            </div>
                        </button>

                    </div>

                </div>

            </section>


            {/* Recent Offers */}

            <section className="offers-section">

                <div className="section-header">

                    <div>
                        <h2>Recent Offers</h2>

                        <p>
                            Latest offers received from buyers
                        </p>
                    </div>

                    <button className="view-all-btn">
                        View All
                    </button>

                </div>


                <div className="offer-card">

                    <div>
                        <h3>Bell Pepper</h3>
                        <p>Buyer: Green Harvest Traders</p>
                    </div>

                    <div>
                        <strong>Rs. 430 / kg</strong>
                    </div>

                    <div className="offer-status">
                        In Review
                    </div>

                </div>


                <div className="offer-card">

                    <div>
                        <h3>Tomato</h3>
                        <p>Buyer: Fresh Foods Ltd.</p>
                    </div>

                    <div>
                        <strong>Rs. 175 / kg</strong>
                    </div>

                    <div className="offer-status">
                        In Review
                    </div>

                </div>

            </section>

        </div>
    );
}

export default Home;

