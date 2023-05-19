import * as React from "react";
import logo from "../img/logo.webp"

function SvgComponent(props) {
  return (
    <img src={logo} alt="SMS Safety Logo" width={props.width} height={props.height}  />
  );
}

export default SvgComponent;
