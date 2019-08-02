import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="jumbotron jumbotron-fluid text-center">
      <div className="container">
        <h1 className="display-4">Play the Puppy Match Game!</h1>
        <p className="lead">Click on a puppy to get started!</p>
        <p className="lead">Score: {props.counter} | Top Score: {props.topScore}</p>
      </div>
    </div>
  );
}

export default Header;