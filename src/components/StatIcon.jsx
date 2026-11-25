function StatIcon({ type }) {
    const paths = {
        listings: <><path d="M5 19V9l7-4 7 4v10" /><path d="M9 19v-5h6v5" /><path d="M12 5v-2" /></>,
        offers: <><path d="M12 3v18" /><path d="M17 7c-.8-1-2.1-1.6-4-1.6-2.4 0-4 1.2-4 3s1.6 2.7 4 3.2 4 1.3 4 3.3-1.6 3.1-4 3.1c-1.9 0-3.4-.7-4.2-1.8" /></>,
        sales: <><path d="m5 7 2-3h10l2 3" /><path d="M4 7h16v12H4z" /><path d="m8 13 2 2 5-5" /></>,
        earnings: <><path d="M5 19V9" /><path d="M12 19V5" /><path d="M19 19v-8" /><path d="m4 8 6-4 4 3 6-5" /></>,
        saved: <path d="M20 8.5c0 5-8 10-8 10s-8-5-8-10a4 4 0 0 1 7-2.5L12 7l1-1a4 4 0 0 1 7 2.5Z" />
    };

    return (
        <div className={`stat-icon stat-icon-${type}`} aria-hidden="true">
            <svg viewBox="0 0 24 24">{paths[type]}</svg>
        </div>
    );
}

export default StatIcon;
