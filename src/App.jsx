import "./App.css"
import Introduction from "./components/introduction/introductions";
import Projects from "./components/projects/projects";
import Contacts from "./components/contacts/contacts";
import Footer from "./components/footer/footer";
import CV from "./components/cv/cv";
import Header from "./components/header/header";

const App = () => {
  return ( 
  <div className="portfolio-bg">
    <Header/>
    <Introduction/>
    <Projects/>
    <CV/>
    <Contacts/>
    <Footer/>
  </div>
  );
};

export default App;