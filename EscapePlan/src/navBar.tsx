import "./NavBar.css";
import Lionheart from "./assets/Lionheart.svg";

const NavBar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
        <a className="navbar-brand" href="#">
          <img
            src={Lionheart}
            alt="Bootstrap"
            width={24}
            height={24}
            className="d-inline-block align-text-top"
          />{" "}
          CreatedByTonyT
        </a>
       </nav>
  </div>
  );
};

export default NavBar;
