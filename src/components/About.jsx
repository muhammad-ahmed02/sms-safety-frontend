import parse from "html-react-parser";

import "./About.scss";
import useAbout from "../hooks/about";
import Loading from "./Loading";
import useWindowDimensions from "../assets/Dimensions";

const About = () => {
  const about = useAbout();
  const { height } = useWindowDimensions();

  return (
    <>
      {about.hasLoaded ? (
        <div className="about-page" id="about" style={{ minHeight: height }}>
          <section className="about-data">
            <h1>About Us</h1>
            <br />
            {about.state.map((ab, i) => (
              <div className="about-section" key={i}>
                <img src={ab.cover} alt="Cover" height={height/2} />
                <div className="details">{parse(ab.details)}</div>
              </div>
            ))}
          </section>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default About;
