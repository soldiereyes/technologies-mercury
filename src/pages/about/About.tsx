import AboutBanner from "../../components/about-banner/AboutBanner.tsx";
import FirstAboutSection from "../../components/first-about-section/FirstAboutSection.tsx";
import SecondSectionAbout from "../../components/second-about-section/SecondAboutSection.tsx";
import LocationMap from "../../components/Location/LocationMap.tsx";

const About: React.FC = () => {
    return (
        <div>
            <AboutBanner/>
            <FirstAboutSection/>
            <SecondSectionAbout/>
            <LocationMap/>
        </div>
    );
};

export default About;
