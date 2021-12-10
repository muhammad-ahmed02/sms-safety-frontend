import { Route, Routes } from "react-router-dom";

import "./App.scss";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
