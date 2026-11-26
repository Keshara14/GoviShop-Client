
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRole } from "../context/RoleContext";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../i18n/LanguageContext";

function Header() {
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isDownloadOpen, setIsDownloadOpen] = useState(false);
    const [installPrompt, setInstallPrompt] = useState(null);
    const [installMessage, setInstallMessage] = useState("");
    const { role } = useRole();
    const { logout, user } = useAuth();
    const { language, setLanguage } = useLanguage();
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            icon: "💰",
            title: "New offer received",
            message: "Green Harvest Traders offered Rs. 430 / kg for Bell Pepper.",
            time: "10 minutes ago",
            unread: true,
        },
        {
            id: 2,
            icon: "🛒",
            title: "Listing viewed",
            message: "Your Tomato listing was viewed by a buyer.",
            time: "1 hour ago",
            unread: true,
        },
    ]);
    const notificationRef = useRef(null);
    const accountRef = useRef(null);
    const unreadCount = notifications.filter((notification) => notification.unread).length;
    const roleLabel = role === "farmer" ? "Farmer" : "Buyer";
    const userInitials = (user?.fullName || "GS")
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((name) => name[0])
        .join("")
        .toUpperCase();
    const profileStatus = language === "si"
        ? role === "farmer"
            ? "ඔබ ගොවියෙකු ලෙස පුරනය වී ඇත."
            : "ඔබ ගැනුම්කරුවෙකු ලෙස පුරනය වී ඇත."
        : `You are logged in as a ${roleLabel}.`;
    const switchRoleLabel = language === "si"
        ? role === "farmer"
            ? "ගැනුම්කරුවෙකු ලෙස පුරනය වන්න"
            : "ගොවියෙකු ලෙස පුරනය වන්න"
        : `Log in as a ${role === "farmer" ? "Buyer" : "Farmer"}`;

    useEffect(() => {
        const handleInstallPrompt = (event) => {
            event.preventDefault();
            setInstallPrompt(event);
        };
        window.addEventListener("beforeinstallprompt", handleInstallPrompt);
        window.addEventListener("appinstalled", () => setInstallPrompt(null));
        const handleOutsideClick = (event) => {
            if (accountRef.current && !accountRef.current.contains(event.target)) {
                setIsNotificationsOpen(false);
                setIsProfileOpen(false);
                setIsDownloadOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            window.removeEventListener("beforeinstallprompt", handleInstallPrompt);
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const installApp = async (platform) => {
        setInstallMessage("");
        if (!installPrompt) {
            setInstallMessage(platform === "Windows"
                ? "Open the browser menu and choose Install GoviShop or Install page as app."
                : "Open the browser menu and choose Install GoviShop or Add to Home Screen.");
            return;
        }

        await installPrompt.prompt();
        const choice = await installPrompt.userChoice;
        if (choice.outcome === "accepted") {
            setInstallMessage(`${platform} app installation started.`);
        }
        setInstallPrompt(null);
    };

    const switchRole = () => {
        const nextRole = role === "farmer" ? "buyer" : "farmer";
        setIsProfileOpen(false);
        navigate("/login", { state: { role: nextRole } });
    };

    return (
        <header className="top-bar" ref={accountRef}>
            <div className="top-bar-identity">
                <div className="profile-wrapper">
                    <button
                        className="account-avatar"
                        type="button"
                        aria-label="Open profile menu"
                        aria-expanded={isProfileOpen}
                        aria-controls="profile-menu"
                        onClick={() => {
                            setIsProfileOpen((isOpen) => !isOpen);
                            setIsNotificationsOpen(false);
                        }}
                    >
                        {userInitials}
                    </button>

                    {isProfileOpen && (
                        <div className="profile-menu" id="profile-menu" role="dialog" aria-label="Profile menu">
                            <p className="profile-menu-title">Account</p>
                            <p className="profile-status">{profileStatus}</p>
                            <button type="button" className="switch-role-button" onClick={() => { setIsProfileOpen(false); navigate("/account"); }}>
                                View account details
                            </button>
                            <button type="button" className="switch-role-button" onClick={switchRole}>
                                {switchRoleLabel}
                            </button>
                            <button type="button" className="switch-role-button" onClick={() => { logout(); navigate("/", { replace: true }); }}>
                                Log out
                            </button>
                            <div className="profile-download">
                                <button
                                    type="button"
                                    className="profile-download-toggle"
                                    aria-expanded={isDownloadOpen}
                                    onClick={() => {
                                        setIsDownloadOpen((open) => !open);
                                        setInstallMessage("");
                                    }}
                                >
                                    Download GoviShop
                                </button>
                                {isDownloadOpen && (
                                    <div className="profile-download-options">
                                        <button type="button" onClick={() => installApp("Windows")}>
                                            Install for Windows
                                        </button>
                                        <button type="button" onClick={() => installApp("Android")}>
                                            Install for Android
                                        </button>
                                        {installMessage && <small role="status">{installMessage}</small>}
                                    </div>
                                )}
                            </div>
                            <div className="profile-language">
                                <span className="profile-language-label">
                                    {language === "si" ? "භාෂාව වෙනස් කරන්න" : "Change language"}
                                </span>
                                <div className="profile-language-options" role="group" aria-label="Language">
                                    <button
                                        type="button"
                                        className={language === "en" ? "profile-language-option active" : "profile-language-option"}
                                        onClick={() => setLanguage("en")}
                                    >
                                        English
                                    </button>
                                    <button
                                        type="button"
                                        className={language === "si" ? "profile-language-option active" : "profile-language-option"}
                                        onClick={() => setLanguage("si")}
                                    >
                                        සිංහල
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="account-info">
                    <p>{user?.fullName || "Account"}</p>
                    <span>{roleLabel}</span>
                </div>
            </div>

            <div className="notification-wrapper" ref={notificationRef}>
                    <button
                        className="notification-button"
                        type="button"
                        aria-label="Notifications"
                        aria-expanded={isNotificationsOpen}
                        aria-controls="notification-menu"
                        onClick={() => {
                            setIsNotificationsOpen((isOpen) => !isOpen);
                            setIsProfileOpen(false);
                        }}
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
                            <path d="M10 21h4" />
                        </svg>
                        {unreadCount > 0 && <span className="notification-count">{unreadCount}</span>}
                    </button>

                    {isNotificationsOpen && (
                        <div className="notification-menu" id="notification-menu" role="dialog" aria-label="Notifications">
                            <div className="notification-menu-header">
                                <h2>Notifications</h2>
                                <button
                                    type="button"
                                    className="mark-read-button"
                                    onClick={() => setNotifications((current) => current.map((notification) => ({ ...notification, unread: false })))}
                                >
                                    Mark all as read
                                </button>
                            </div>

                            <div className="notification-list">
                            {notifications.map((notification) => (
                                <button
                                    type="button"
                                    className={notification.unread ? "notification-item unread" : "notification-item"}
                                    key={notification.id}
                                    onClick={() => setNotifications((current) => current.map((item) => item.id === notification.id ? { ...item, unread: false } : item))}
                                >
                                    <span className="notification-icon">{notification.icon}</span>
                                    <span>
                                        <strong>{notification.title}</strong>
                                        <small>{notification.message}</small>
                                        <time>{notification.time}</time>
                                    </span>
                                </button>
                            ))}
                            </div>

                            <button type="button" className="view-notifications-button">
                                View all notifications
                            </button>
                        </div>
                    )}
            </div>
        </header>
    );
}

export default Header;
