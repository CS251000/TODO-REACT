// src/components/Home.js

import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="content">
        <h1 className="title">Welcome to Your App</h1>
        <div className="buttons">
          <a href="todo" className="btn btn-warning link">
            To Do App
          </a>
          <a href="notes" className="btn btn-warning link">
            Note Keeper
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
