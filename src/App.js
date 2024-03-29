import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
// Screens
import Landing from "./screens/Landing.jsx";
import Loading from "./screens/Loading.jsx"

export default function App() {
  return (
    <>
      <Suspense fallback={<Loading /> }>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Landing />
      </Suspense>
    </>
  );
}
