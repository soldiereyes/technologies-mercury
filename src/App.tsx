import Navbar from "./components/navbar/Navbar.tsx";
import Footer from "./components/footer/Footer.tsx";
import Banner from "./components/banner-into/Banner.tsx";
import Statistics from "./components/banner-statistics/Statistics.tsx";

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Statistics />
            <Footer />
        </div>
    );
};

export default App;
