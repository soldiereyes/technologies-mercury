import Navbar from "./components/navbar/Navbar.tsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./components/footer/Footer.tsx";
import Home from "./pages/home/Home.tsx";
import About from "./pages/about/About.tsx";
import Services from "./pages/services/Services.tsx";
import Oders from "./pages/oders/Oders.tsx";
import Contact from "./pages/contact/Contact.tsx";
import ContactSection from "./components/contact-section/ContactSection.tsx";

const App: React.FC = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/orders" element={<Oders />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <ContactSection/>
                <Footer />
            </Router>

        </div>
    );
};

export default App;
