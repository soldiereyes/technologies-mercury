import OderBanner from "../../components/oder-banner/OderBanner.tsx";
import FirstOderSection from "../../components/first-oder-section/FirstOderSection.tsx";
import ThirdOderSection from "../../components/third-oder-section/ThirdOderSection.tsx";
import SecondOderSection from "../../components/second-oder-section/SecondOderSection.tsx";

const Oders: React.FC = () => {
    return (
        <>
            <OderBanner/>
            <FirstOderSection/>
            <SecondOderSection/>
            <ThirdOderSection/>
        </>
    );
};

export default Oders;
