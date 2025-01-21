import Navbar from "./components/navbar/Navbar.tsx";
import Footer from "./components/footer/Footer.tsx";
import Banner from "./components/banner-into/Banner.tsx";

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <main>
                <section id="home" style={{ padding: '2rem', textAlign: 'center' }}>
                    Welcome to Technologies Mercury
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default App;
