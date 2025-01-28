import Navbar from "./components/navbar/Navbar.tsx";
import Footer from "./components/footer/Footer.tsx";
import Banner from "./components/banner-into/Banner.tsx";
import Statistics from "./components/banner-statistics/Statistics.tsx";
import {CardSection} from "./components/card-section/CardSection.tsx";
import HeroSection from "./components/hero-section/HeroSection.tsx";

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Statistics />
            <CardSection/>
            <HeroSection/>
            <Footer />
        </div>
    );
};

export default App;
