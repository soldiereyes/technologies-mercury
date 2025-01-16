import Navbar from "./components/navbar/Navbar.tsx";
import Footer from "./components/footer/Footer.tsx";

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
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
