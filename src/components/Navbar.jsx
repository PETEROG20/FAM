import NavbarLinks from "./NavbarLinks";
import Title from "./Title";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="title-centered">
        <Title />
      </div>
      <div className="Navbar-Links-werapper">
        <NavbarLinks/>
      </div>
    </div>
  );
}

export default Navbar;
