import React from "react";
import "./ContactItem.scss";

export default function ContactItem({ name, number,deleteContact}) {
  return (
    <li className="list__item">
      <p className="list__text">
        <span>{name} :</span> {number}
      </p>
      <button className="list__btn" onClick={deleteContact} type="button">
        Delete
      </button>
    </li>
  );
}
