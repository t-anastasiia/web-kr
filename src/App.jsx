import React, { useState } from "react";
import "./app.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import FAQ from "./components/faq/Faq";
import Tarifs from "./components/tarifs/Tarifs";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("home");

  const renderComponent = () => {
    switch (activeComponent) {
      case "home":
        return <Home />;
      case "faq":
        return <FAQ />;
      case "tarifs":
        return <Tarifs />;
      default:
        return <Home />;
    }
  };

  return (
    <main>
      <Header setActiveComponent={setActiveComponent} />
      {renderComponent()}
    </main>
  );
};

export default App;
