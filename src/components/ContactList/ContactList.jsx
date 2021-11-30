import React from "react";
import ContactItem from "../ContactItem/ContactItem";

export default function ContactList({ contacts,deleteContact }) {
  return (
    <ul className="list">
      {contacts.map((item) => (
        <ContactItem
          deleteContact={() => deleteContact(item.id)}
          key={item.id}
          name={item.name}
          number={item.number}
        />
      ))}
    </ul>
  );
}
