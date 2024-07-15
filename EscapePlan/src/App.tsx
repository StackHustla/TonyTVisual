import "./App.css";
import NavBar from "./navBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from "./HeroSection";

function App() {

  return (
    <>
      <div className="d-flex">
        <NavBar />
        <HeroSection />
      </div>
    </>
  );
}

export default App;
