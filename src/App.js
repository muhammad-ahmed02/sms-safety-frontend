import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";
import Loading from "./components/Loading";
import SiteDown from "./components/SiteDown";
import useSite from "./hooks/site";
import Layout from "./layout/Layout";
import Home from "./components/Home";

function App() {
  const site = useSite();
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        {site.hasLoaded ? (
          <Routes>
            {site.state.map((st, i) => (
              <>
                {st.status === "Down" ? (
                  <Route exact path="/" element={<SiteDown />}></Route>
                ) : (
                  <Route exact path="/" element={<Home />}></Route>
                )}
              </>
            ))}
          </Routes>
        ) : (
          <Loading />
        )}
      </Suspense>
    </Layout>
  );
}

export default App;
