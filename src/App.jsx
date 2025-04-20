import React from "react";
import "./App.css";
import Newsfeed from "./components/Newsfeed";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <section className="main-container">
        <Navbar/>
        <Newsfeed/>
      </section>
    </div>
  );
}

export default App;
