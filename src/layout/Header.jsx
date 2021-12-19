import { Link } from "react-router-dom";
import useHome from "../hooks/home";

const Header = () => {
  const home = useHome();

  return (
    <header>
      {home.hasLoaded && (
        <div className="logo">
          {home.state.map((logo, i) => (
            <Link to="/" key={i}>
              <img src={logo.logo} alt="Logo" width="120px" />
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
