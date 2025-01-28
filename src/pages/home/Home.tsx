import Banner from "../../components/banner-into/Banner.tsx";
import Statistics from "../../components/banner-statistics/Statistics.tsx";
import {CardSection} from "../../components/card-section/CardSection.tsx";
import HeroSection from "../../components/hero-section/HeroSection.tsx";
import ContactSection from "../../components/contact-section/ContactSection.tsx";

const Home: React.FC = () => {
    return (
        <div>
            <Banner />
            <Statistics />
            <CardSection />
            <HeroSection />
        </div>
    );
};

export default Home;
