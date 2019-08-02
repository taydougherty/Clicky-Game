import React from "react";
import "./style.css";

function PuppyCard(props) {
  return (
    <div onClick={() => props.clickedPuppy(props.id)} className="remove">
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Favourite Toy:</strong> {props.toy}
            </li>
            <li>
              <strong>Favourite Treat:</strong> {props.treat}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PuppyCard;
