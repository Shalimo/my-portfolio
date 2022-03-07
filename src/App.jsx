import "./App.css"
import Header from "./components/header/header";
import Introduction from "./components/introduction/introductions";
import Projects from "./projects/projects";
import Contacts from "./components/contacts/contacts";
import Footer from "./components/footer/footer";

const App = () => {
  return ( 
  <div className="portfolio-bg">
    <Header/>,
    <Introduction/>,
    <Projects/>,
    <Contacts/>
    <Footer/>
  </div>
  );
};

export default App;