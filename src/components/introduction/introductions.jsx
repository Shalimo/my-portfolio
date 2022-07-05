import "./introduction.css";
import Me from "../../img/me.jpg";
import HTML from "../../img/HTML.svg"
import CSS from "../../img/CSS.svg"
import JS from "../../img/JS.svg"
import REACT from "../../img/REACT.svg"

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
                                <div><img className="skill-icon" src={HTML} alt=""></img></div>
                                <div><img className="skill-icon" src={CSS} alt=""></img></div>
                                <div><img className="skill-icon" src={JS} alt=""></img></div>
                                <div><img className="skill-icon" src={REACT} alt=""></img></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="intro-right">
                    <img src={Me} alt="" className="intro-img"/>
                </div>
            </div>
        </div>
    )
}

export default Introduction;