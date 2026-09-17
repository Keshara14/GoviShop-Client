
function Header() {
    return (
        <header className="top-bar">
            <div className="header-greeting">
                <h1>Good morning, Keshara 👋</h1>
                <p>Connect with trusted buyers and bring your harvest to market.</p>
            </div>

            <div className="account-area">
                <button className="notification-button" type="button" aria-label="Notifications">
                    🔔
                    <span className="notification-count">2</span>
                </button>

                <div className="account-avatar">
                    K
                </div>

                <div className="account-info">
                    <p>Keshara R.</p>
                    <span>Farmer</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
