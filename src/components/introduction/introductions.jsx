import "./introduction.css";

const Introduction = () => {
    return (
        <div>
            <div className="intro">
                <div className="intro-left">
                    <div className="intro-left-wrapper">
                        <h2 className="intro-greetings">Hello, i'm</h2>
                        <h1 className="intro-name">Nikita Shalimo</h1>
                        <div className="intro-description">Junior front-end developer based in Minsk</div>
                        <h3 className="intro-skill-title">Skills:</h3>
                        <div className="intro-skills">
                            <div className="intro-skills-wrapper"> {/*for animation*/}
                                <div className="intro-skills-item">HTML5</div>
                                <div className="intro-skills-item">CSS3</div>
                                <div className="intro-skills-item">JavaScript</div>
                                <div className="intro-skills-item">React</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="intro-right">right</div>
            </div>
        </div>
    )
}

export default Introduction;