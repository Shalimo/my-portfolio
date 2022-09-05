import "./projects.css";
import Project from "./project/project";
import Twitter from "../../img/twitter2.jpg"
import Restaurant from "../../img/restaurant.jpg";
import Food from "../../img/food.jpg";
import Hardware from "../../img/hardware.jpg";
import Got from "../../img/got.jpg";
import Counter from "../../img/counter.jpg";
import Converter from "../../img/converter.jpg";
import Calendar from "../../img/calendar.jpg";
import GitHub from "../../img/github.jpg"
import CRM from "../../img/CRM.jpg"
import Terminal from "../../img/terminal.png"

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

    const converter = {
      backgroundImage: `url(${Converter})`
  }

    const calendar = {
      backgroundImage: `url(${Calendar})`
    }

    const github = {
      backgroundImage: `url(${GitHub})`
    }

    const crm = {
      backgroundImage: `url(${CRM})`
    }

    const terminal = {
      backgroundImage: `url(${Terminal})`
    }

  const projects = [
    {title: "Personal CRM", description: "Commercial project from MVP Connect. JavaScript, React. Working with Firebase, GAPI, People API. Authorization via google and facebook. Displaying dynamic information on the screen. Layout using Figma. Implementation of front-end and back-end communication.", style: crm, url: null},
    {title: "Terminal for restaurants", description: "Commercial project from MVP Connect. React native app. Poster analogue. Layout of all screens using Figma. Adding dynamics.", style: terminal, url: null},
    {title: "Mini twitter", description: "React app. Twitter analogue.", style: mitiTwitter, url: 'https://github.com/Shalimo/mini-twitter'},
    {title: "Food store", description: "React/Redux app. The server is emulated using json database.", style: restautant, url: 'https://github.com/Shalimo/restaurant-app-react-redux'},
    {title: "Food project", description: "JavaScript app. Modules (tabs, modals, timer, calorie calculator, forms, cards), webpack, fetch API. The server is emulated using json database.", style: food, url: 'https://github.com/Shalimo/project-food'},
    {title: "Hardware store", description: "JavaScript app. Modules, fetch API, gulp. The server is emulated using echo php.", style: hardware, url: 'https://github.com/Shalimo/irvas-service'},
    {title: "Game of Thrones", description: "React app. The universe of the game of thrones - database using Game of Thrones API.", style: got, url: 'https://github.com/Shalimo/got-db'},
    {title: "Counter", description: "My first project with React/Redux. Just a memory.", style: counter, url: 'https://github.com/Shalimo/react-redux-counter'},
    {title: "Currency converter", description: "React app. Currensy API, fetch API, function components, hooks.", style: converter, url: 'https://github.com/Shalimo/currency-converter'},
    {title: "Booking calendar", description: "Test task (JavaScript app).", style: calendar, url: 'https://github.com/Shalimo/booking-calendar'},
    {title: "Mini Github", description: "Task project for Paralect.", style: github, url: 'https://github.com/Shalimo/git-mini-paralect'},
  ]

    return (
        <div className="block" id="Projects">
        <div className="block-container">
          <span className="block-title">Portfolio</span>
          <h2 className="block-work-title">Creative Works</h2>
          <div className="projects">
            {projects.map((item, i) => {
              return(
                <div key={i}>
                  <Project
                    title={item.title}
                    description={item.description}
                    style={item.style}
                    linkName={item.url}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
}

export default Projects;