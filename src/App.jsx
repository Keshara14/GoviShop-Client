import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Createlisting from "./pages/Createlisting";
import Mylisings from"./pages/Mylistings";   
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import AccountDetails from "./pages/AccountDetails";
import Bids from "./pages/Bids";
import GoviBot from "./components/GoviBot";
import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import { RoleProvider } from "./context/RoleContext";
import { AuthProvider, useAuth } from "./context/AuthContext";

function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" replace />;
}

function App() {
    const location = useLocation();
    const isPublicPage = ["/", "/landing", "/Landing", "/login", "/register"].includes(location.pathname);

    return (
        <AuthProvider>
            <LanguageProvider>
                <RoleProvider>
                <div>
                    {!isPublicPage && <Header />}
                    {!isPublicPage && <Sidebar />}

                    <main className={isPublicPage ? "" : "main-content"}>
                        <Routes>
                            <Route path="/" element={<Landing />} />
                            <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                            <Route path="/marketplace" element={<ProtectedRoute><Marketplace /></ProtectedRoute>} />
                            <Route path="/create-listing" element={<ProtectedRoute><Createlisting /></ProtectedRoute>} />
                            <Route path="/my-listings" element={<ProtectedRoute><Mylisings /></ProtectedRoute>} />
                            <Route path="/account" element={<ProtectedRoute><AccountDetails /></ProtectedRoute>} />
                            <Route path="/bids" element={<ProtectedRoute><Bids /></ProtectedRoute>} />
                            <Route path="/Landing" element={<Landing />} />
                            <Route path="/landing" element={<Landing />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/header" element={<Header />} />
                            <Route path="/register" element={<Register />} />
                        </Routes>
                    </main>
                    {!isPublicPage && <GoviBot />}
                </div>
                </RoleProvider>
            </LanguageProvider>
        </AuthProvider>
    );
}

export default App;