import { Link } from "react-router-dom";
import logoWhite from "../assets/soroman-logo.jpeg"; // white logo
import logoBlack from "../assets/soromon-logo-black.png"; // black logo

const Logo = ({ variant = "white" }) => {
  const logo = variant === "black" ? logoBlack : logoWhite;

  return (
    <Link to={"/"}>
      <img
        className="w-full max-w-[200px] min-w-[119px] cursor-pointer"
        src={logo}
        alt="The company Logo Soroman"
      />
    </Link>
  );
};

export default Logo;
