import "./App.css"
import Introduction from "./components/introduction/introductions";
import Projects from "./projects/projects";

const App = () => {
  return ( 
  <div className="portfolio-bg">
    <Introduction/>,
    <Projects/>
  </div>
  );
};

export default App;