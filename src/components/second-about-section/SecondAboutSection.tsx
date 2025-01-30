import "./SecondAboutSection.css";

const SecondSectionAbout: React.FC = () => {
    return (
        <section className="second-about-section">
            <div className="overlay"></div>
            <div className="content">
                <h1>LOREN IPSUM</h1>
                <p>
                    Donec vulputate ligula in orci sodales venenatis. Ut sed tortor gravida,
                    maximus odio vitae, cursus enim. Sed non tristique mi. Integer condimentum
                    sollicitudin malesuada. Nam blandit nunc et elit pellentesque auctor.
                    Integer id libero orci. Nulla vehicula convallis ultricies. Integer mollis
                    sagittis sem, quis ultrices magna.
                </p>
                <p>
                    Cras tristique lacinia orci, sit amet pretium augue elementum et. Sed ut
                    urna quis nisl accumsan ultrices a non augue. Nulla facilisi. Fusce maximus
                    sapien vitae neque vehicula, sit amet malesuada nulla suscipit. Integer
                    suscipit vulputate libero ut dapibus. Vivamus lobortis nulla non consequat euismod.
                </p>
            </div>
        </section>
    );
};

export default SecondSectionAbout;
