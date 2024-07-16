import "./App.css";
import NavBar from "./navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./HeroSection";
import Createdby from "./assets/CreatedBy.png";
import Gallery from "./Gallery";

function App() {
  return (
    <>
      <div className="d-flex m-3 p-3 justify-content-between align-items-center">
        <a href="">
          <img src={Createdby} alt="Created By Tony T" />
        </a>
        <nav className="d-flex ">
          <a className="pe-4" href="">
            Work
          </a>
          <a href="">About</a>
        </nav>
      </div>
      <div>
        <Gallery />
      </div>
    </>
  );
}

export default App;

/* mimic https://www.tmccluredesign.com/ 
https://getbootstrap.com/docs/5.3/utilities/flex/#enable-flex-behaviors
*/
