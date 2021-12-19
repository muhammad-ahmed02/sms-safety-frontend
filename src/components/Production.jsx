import parse from "html-react-parser";

import "./Production.scss";
import useProduction from "../hooks/production";
import Loading from "./Loading";
import useWindowDimensions from "../assets/Dimensions";

const Production = () => {
  const production = useProduction();
  const { height } = useWindowDimensions();

  return (
    <>
      {production.hasLoaded ? (
        <div
          className="production-page"
          id="production"
          style={{ minHeight: height }}
        >
          <h1>Production</h1>
          <br />
          {production.state.map((prod, i) => (
            <div
              className="production-data"
              key={i}
              style={{ minHeight: height / 2 }}
            >
              <div className="production-images">
                {prod.production_images.map((image, i) => (
                  <div className="production-image" key={i}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      width="180px"
                      height="180px"
                    />
                    <span>{image.title}</span>
                  </div>
                ))}
              </div>
              <div className="production-details">{parse(prod.details)}</div>
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Production;
