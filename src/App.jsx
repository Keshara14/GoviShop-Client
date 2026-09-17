import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Createlisting from "./pages/Createlisting";
import Mylisings from"./pages/Mylistings";   
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Header />
            <Sidebar />

            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/create-listing" element={<Createlisting />} />
                    <Route path="/my-listings" element={<Mylisings />} />
                    <Route path="/header" element={<Header />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;