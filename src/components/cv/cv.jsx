import "./cv.css";
import MyCV from "../../CV/MyCV.pdf"

const CV = () => {
    return (
        <div className="cv-wrapper">
            <div className="cv-block">
                <button className="cv-download"><a href={MyCV} download="CV_Nikita_Shalimo.pdf">Click to download my CV</a></button>
             </div>
        </div>
    )
}

export default CV;