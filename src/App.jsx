import React, { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import "./styles/App.scss";
import { info } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((element) => element.id !== id),
    }));
  };

  addContact = (contactData) => {
    this.setState((prevState) => ({
      contacts: [contactData, ...prevState.contacts],
    }));
    info({ text: `Contact successfully added`, delay: 700 });
  };

  filterOnChange = ({ target }) => {
    this.setState({ filter: target.value });
  };

  render() {
    const query = this.state.filter.toLocaleLowerCase();
    const visibleContacts = this.state.contacts.filter((element) =>
      element.name.toLocaleLowerCase().includes(query)
    );

    return (
      <>
        <div className="phonebook__wrapper">
          <div className="form-wrapper">
            <h1 className="headline">Phonebook</h1>

            <h2>Add new contact</h2>
            <ContactForm onSubmitHandler={this.addContact} contacts={this.state.contacts} />
          </div>
          <div className="list-wrapper">
            <h2>Contacts</h2>
            <Filter value={this.state.filter} onChange={this.filterOnChange} />
            <ContactList deleteContact={this.deleteContact} contacts={visibleContacts} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
