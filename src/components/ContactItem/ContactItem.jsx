import React from "react";
import "./ContactItem.scss";

export default function ContactItem({ name, number,deleteContact}) {
  return (
    <li className='list__item'>
      <p>{name} : {number}</p>
      <button onClick={deleteContact} type="button">Delete</button>
    </li>
  );
}
