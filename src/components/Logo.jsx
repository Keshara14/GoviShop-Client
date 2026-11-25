function Logo({ className = "", light = false }) {
    return (
        <span className={`govishop-logo ${light ? "govishop-logo-light" : ""} ${className}`.trim()}>
            <svg className="govishop-logo-mark" viewBox="0 0 42 42" role="img" aria-label="GoviShop leaf logo">
                <path className="govishop-logo-leaf govishop-logo-leaf-left" d="M20.5 26C11.1 26 5.2 20.2 4.2 9.1c8.9-.1 15.1 3.9 17.1 11.8Z" />
                <path className="govishop-logo-leaf govishop-logo-leaf-right" d="M20.3 25.8C20.8 14.2 28.1 6.7 39 7.1c-1.6 11.7-8.6 18.5-18.7 18.7Z" />
                <path className="govishop-logo-vein" d="M20.5 35C20.8 25.4 18.3 18.1 12 13" />
                <path className="govishop-logo-stem" d="M20.5 35c.2-5.2.3-9.2 0-13.2" />
            </svg>
            <span className="govishop-logo-name">GoviShop</span>
        </span>
    );
}

export default Logo;
