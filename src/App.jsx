import "./App.css"
import Introduction from "./components/introduction/introductions";
import Projects from "./projects/projects";
import Contacts from "./components/contacts/contacts";
import Footer from "./components/footer/footer";
import CV from "./components/cv/cv";

const App = () => {
  return ( 
  <div className="portfolio-bg">
    <Introduction/>,
    <Projects/>,
    <CV/>,
    <Contacts/>
    <Footer/>
  </div>
  );
};

export default App;