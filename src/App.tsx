import Navbar from "./components/navbar/Navbar.tsx";

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <main>
                <section id="home">Welcome to Technologies Mercury</section>
                {/* Outras seções */}
            </main>
        </div>
    );
};

export default App;
