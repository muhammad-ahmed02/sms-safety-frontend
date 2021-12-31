import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import useHome from "../hooks/home";
import About from "./About";
import Contact from "./Contact";
import "./Home.scss";
import Loading from "./Loading";
import Production from "./Production";

const Home = () => {
  const home = useHome();

  return (
    <>
      {home.hasLoaded ? (
        <div className="home-page" id="home">
          {home.state.map((hm, i) => (
            <div className="home-data" key={i}>
              <div className="home-text">
                <div className="main-title">
                  <h1>SMS Safety</h1>
                </div>
                <div className="subtitle">
                  <h3>{hm.subtitle}</h3>
                </div>
              </div>

              <div className="image-slider">
                <Carousel
                  autoPlay
                  swipeable
                  infiniteLoop
                  showThumbs={false}
                  dynamicHeight={false}
                >
                  {hm.image_slider.map((slider, i) => (
                    <div className="slider" key={i}>
                      <img src={slider.src} alt={slider.title} height="400px" />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          ))}
          <Production />
          <About />
          <Contact />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
