import "./projects.css";
import Project from "./project/project";
import Twitter from "../img/twitter2.jpg";

const Projects = () => {

    const mitiTwitter = {
        backgroundImage: `url(${Twitter})`
    }

    return (
        <div className="block" id="Projects">
        <div className="block-container">
          <span className="block-title">Portfolio</span>
          <h2 className="block-work-title">Creative Works</h2>
          <div className="projects">
            <Project
              title={'Mini Twitter'}
              description={'some text'}
              style={mitiTwitter}
              linkName={'https://github.com/Shalimo/mini-twitter'}
            />
            <Project
              title={'some text'}
              description={'some text'}
              style={mitiTwitter}
              linkName={'https://github.com/Shalimo/mini-twitter'}
            />
            <Project
              title={'some text'}
              description={'some text'}
              style={mitiTwitter}
              linkName={'https://github.com/Shalimo/mini-twitter'}
            />
            <Project
              title={'some text'}
              description={'some text'}
              style={mitiTwitter}
              linkName={'https://github.com/Shalimo/mini-twitter'}
            />
            <Project
              title={'some text'}
              description={'some text'}
              style={mitiTwitter}
              linkName={'https://github.com/Shalimo/mini-twitter'}
            />
            <Project
              title={'some text'}
              description={'some text'}
              style={mitiTwitter}
              linkName={'https://github.com/Shalimo/mini-twitter'}
            />
          </div>
        </div>
      </div>
    )
}

export default Projects;