import { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { apiRequest } from "../utils/api";

function GoviBot() {
    const { isAuthenticated, token } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        { role: "assistant", content: "Hi, I am GoviBot. How can I help you?" }
    ]);
    const [isSending, setIsSending] = useState(false);
    const messagesRef = useRef(null);

    useEffect(() => {
        if (messagesRef.current) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
    }, [messages, isSending]);

    const sendMessage = async (event) => {
        event.preventDefault();

        const text = message.trim();
        if (!text || isSending) {
            return;
        }

        const history = messages.slice(-8);
        setMessages((current) => [...current, { role: "user", content: text }]);
        setMessage("");
        setIsSending(true);

        try {
            const data = await apiRequest("/chat", {
                method: "POST",
                body: JSON.stringify({ message: text, history })
            }, token);

            setMessages((current) => [
                ...current,
                { role: "assistant", content: data.reply }
            ]);
        } catch (error) {
            setMessages((current) => [
                ...current,
                { role: "assistant", content: error.message }
            ]);
        } finally {
            setIsSending(false);
        }
    };

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="govibot-widget">
            {isOpen && (
                <section className="govibot-panel" aria-label="GoviBot chat">
                    <div className="govibot-header">
                        <div className="govibot-heading">
                            <span className="govibot-avatar small" aria-hidden="true">
                                <svg viewBox="0 0 24 24">
                                    <path d="M7 9.5A5 5 0 0 1 12 5a5 5 0 0 1 5 4.5V12a5 5 0 0 1-5 5 5 5 0 0 1-5-5z" />
                                    <path d="M4.5 12v2.5a1.5 1.5 0 0 0 1.5 1.5M19.5 12v2.5a1.5 1.5 0 0 1-1.5 1.5M9 20h6" />
                                    <circle cx="9.5" cy="11.5" r=".7" />
                                    <circle cx="14.5" cy="11.5" r=".7" />
                                </svg>
                            </span>
                            <span>
                                <strong>GoviBot</strong>
                                <small>GoviShop Assistant</small>
                            </span>
                        </div>
                        <button
                            className="govibot-close"
                            type="button"
                            aria-label="Close GoviBot"
                            onClick={() => setIsOpen(false)}
                        >
                            ×
                        </button>
                    </div>

                    <div className="govibot-messages" ref={messagesRef}>
                        {messages.map((item, index) => (
                            <div
                                className={`govibot-message ${item.role === "user" ? "user" : ""}`}
                                key={`${item.role}-${index}`}
                            >
                                {item.content}
                            </div>
                        ))}
                        {isSending && (
                            <div className="govibot-message govibot-thinking">GoviBot is thinking...</div>
                        )}
                    </div>

                    <form className="govibot-composer" onSubmit={sendMessage}>
                        <input
                            type="text"
                            placeholder="Ask GoviBot something..."
                            aria-label="Message GoviBot"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            disabled={isSending}
                        />
                        <button type="submit" aria-label="Send message" disabled={isSending || !message.trim()}>
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="m4 4 16 8-16 8 3-8z" />
                                <path d="M7 12h13" />
                            </svg>
                        </button>
                    </form>
                </section>
            )}

            <button
                className="govibot-launcher"
                type="button"
                aria-label={isOpen ? "Close GoviBot" : "Open GoviBot"}
                aria-expanded={isOpen}
                onClick={() => setIsOpen((open) => !open)}
            >
                <span className="govibot-avatar" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                        <path d="M7 9.5A5 5 0 0 1 12 5a5 5 0 0 1 5 4.5V12a5 5 0 0 1-5 5 5 5 0 0 1-5-5z" />
                        <path d="M4.5 12v2.5a1.5 1.5 0 0 0 1.5 1.5M19.5 12v2.5a1.5 1.5 0 0 1-1.5 1.5M9 20h6" />
                        <circle cx="9.5" cy="11.5" r=".7" />
                        <circle cx="14.5" cy="11.5" r=".7" />
                    </svg>
                </span>
                <span className="govibot-launcher-label">GoviBot</span>
            </button>
        </div>
    );
}

export default GoviBot;
