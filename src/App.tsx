import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Desaku from "./pages/Desaku";
import Program from "./pages/Program";
import Blog from "./pages/Blog";
import CreateBlog from "./pages/CreateBlog";
import Tentang from "./pages/Tentang";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HandlePage404 from "./pages/HandlePage";
import { useEffect, useState } from "react";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { url } from "../src/config/config";

export const base_api_url = url;
export const UserContext = React.createContext<{
    authenticatedUser: any;
    setAuthenticatedUser: React.Dispatch<any>;
}>({
    authenticatedUser: null,
    setAuthenticatedUser: () => {},
});

function App() {
    const storedAuthenticatedUser = localStorage.getItem("authenticatedUser");
    const initialAuthenticatedUser = storedAuthenticatedUser
        ? JSON.parse(storedAuthenticatedUser)
        : null;

    const [authenticatedUser, setAuthenticatedUser] = useState(
        initialAuthenticatedUser
    );

    useEffect(() => {
        if (authenticatedUser) {
            localStorage.setItem(
                "authenticatedUser",
                JSON.stringify(authenticatedUser)
            );
        } else {
            localStorage.removeItem("authenticatedUser");
        }
    }, [authenticatedUser]);

    return (
        <Router>
            <UserContext.Provider
                value={{ authenticatedUser, setAuthenticatedUser }}
            >
                <Header />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/desaku" element={<Desaku />} />
                    <Route path="/program" element={<Program />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/create" element={<CreateBlog />} />
                    <Route path="/tentang" element={<Tentang />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<HandlePage404 />} />
                </Routes>
                <Footer />
                <ToastContainer />
            </UserContext.Provider>
        </Router>
    );
}

export default App;
