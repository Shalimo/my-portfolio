import "./projects.css";
import Project from "./project/project";
import Twitter from "../img/twitter2.jpg";
import Restaurant from "../img/restaurant.jpg";
import Food from "../img/food.jpg";
import Hardware from "../img/hardware.jpg";
import Got from "../img/got.jpg";
import Counter from "../img/counter.jpg";

const Projects = () => {

    const mitiTwitter = {
        backgroundImage: `url(${Twitter})`
    }

    const restautant = {
        backgroundImage: `url(${Restaurant})`
    }

    const food = {
        backgroundImage: `url(${Food})`
    }

    const hardware = {
        backgroundImage: `url(${Hardware})`
    }

    const got = {
        backgroundImage: `url(${Got})`
    }

    const counter = {
        backgroundImage: `url(${Counter})`
    }

    return (
        <div className="block" id="Projects">
        <div className="block-container">
          <span className="block-title">Portfolio</span>
          <h2 className="block-work-title">Creative Works</h2>
          <div className="projects">
            <Project
              title={'Mini twitter'}
              description={'React app. Twitter analogue.'}
              style={mitiTwitter}
              linkName={'https://github.com/Shalimo/mini-twitter'}
            />
            <Project
              title={'Food store'}
              description={'React/Redux app. The server is emulated using json database.'}
              style={restautant}
              linkName={'https://github.com/Shalimo/restaurant-app-react-redux'}
            />
            <Project
              title={'Food project'}
              description={'JavaScript app. Modules (tabs, modals, timer, calorie calculator, forms, cards), webpack, fetch API. The server is emulated using json database.'}
              style={food}
              linkName={'https://github.com/Shalimo/project-food'}
            />
            <Project
              title={'Hardware store'}
              description={'JavaScript app. Modules, fetch API, gulp. The server is emulated using echo php.'}
              style={hardware}
              linkName={'https://github.com/Shalimo/irvas-service'}
            />
            <Project
              title={'Game of Thrones'}
              description={'React app. The universe of the game of thrones - database using Game of Thrones API. '}
              style={got}
              linkName={'https://github.com/Shalimo/got-db'}
            />
            <Project
              title={'Counter'}
              description={'My first project with React/Redux. Just a memory.'}
              style={counter}
              linkName={'https://github.com/Shalimo/react-redux-counter'}
            />
          </div>
        </div>
      </div>
    )
}

export default Projects;