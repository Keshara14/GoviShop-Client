export const API_URL = "http://localhost:5000/api";

export async function apiRequest(path, options = {}, token) {
    let response;
    try {
        response = await fetch(`${API_URL}${path}`, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
                ...(options.headers || {})
            }
        });
    } catch {
        throw new Error("Cannot reach GoviShop server on port 5000.");
    }
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Request failed");
    }
    return data;
}
