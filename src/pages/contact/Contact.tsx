import ContactBanner from "../../components/contact-banner/ContactBanner.tsx";
import LocationMap from "../../components/location/LocationMap.tsx";
import InfoBanner from "../../components/info-banner/InfoBanner.tsx";

const Contact: React.FC = () => {
    return (
        <>
            <ContactBanner/>
            <InfoBanner />
            <LocationMap/>
        </>
    );
};

export default Contact;
