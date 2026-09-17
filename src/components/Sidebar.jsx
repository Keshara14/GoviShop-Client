
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="sidebar">
            <h2 className="logo">🌱 GoviShop</h2>

            <nav className="sidebar-nav">
                <Link to="/home" className="nav-item">
                    <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" /></svg>
                    Home
                </Link>
                <Link to="/marketplace" className="nav-item">
                    <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9h18l-1.5-5h-15z" /><path d="M5 9v10h14V9" /><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" /><path d="M9 19v-5h6v5" /></svg>
                    Marketplace
                </Link>
                <Link to="/my-listings" className="nav-item">
                    <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                    My Listings
                </Link>
                <Link to="/create-listing" className="nav-item">
                    <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
                    Create Listing
                </Link>
            </nav>
        </aside>
    );
}

export default Sidebar;
