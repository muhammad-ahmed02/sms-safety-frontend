import { Link } from "react-router-dom";

import useSite from "../hooks/site";
import useHome from "../hooks/home";

const Header = () => {
  const home = useHome();
  const site = useSite();

  return (
    <>
      {site.hasLoaded && (
        <header>
          {site.state.map((st, i) => (
            <div key={i}>
              {st.status !== "Down" && (
                <>
                  {home.hasLoaded && (
                    <div className="logo">
                      {home.state.map((logo, i) => (
                        <Link to="/" key={i}>
                          <img src={logo.logo} alt="Logo" width="120px" />
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </header>
      )}
    </>
  );
};

export default Header;
