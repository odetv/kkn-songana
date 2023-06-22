import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Desaku from "./pages/Desaku";
import Program from "./pages/Program";
import Blog from "./pages/Blog";
import Tentang from "./pages/Tentang";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HandlePage404 from "./pages/HandlePage";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/desaku" element={<Desaku />} />
                <Route path="/program" element={<Program />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/tentang" element={<Tentang />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<HandlePage404 />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
