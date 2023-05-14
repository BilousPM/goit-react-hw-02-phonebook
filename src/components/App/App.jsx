import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import css from "./App.module.css"

class App extends Component {

  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  };

  handleFormSubmit = data => {
    const preCheck = this.state.contacts.some(
      ({ name, number }) =>
        name.toLowerCase() === data.name.toLowerCase() || number === data.number
    );

    if (preCheck) {
      alert(`Sorry, contact ${data.name} is already exists`);
      return;
    }
    const contact = {
      id: nanoid(5),
      ...data
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }))
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  onSelectedContacts = () => {
    const { contacts } = this.state;
    const normalisedFilter = this.state.filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalisedFilter));
  }

  deleteContact= (contactId)=>{
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  render() {
    const { filter } = this.state;
    const selectedContacts = this.onSelectedContacts()

    return (
      <div className={css.phonebook}>
        <h1 className={css.phonebook_title}>Phonebook</h1>
        <Form onSubmit={this.handleFormSubmit} />

        <h2>Contacts</h2>
        < Filter value={filter} onChange={this.changeFilter} />
        < ContactList contacts={selectedContacts} onDeleteContact={this.deleteContact } />
      </div>
    );
  }
};

export default App;

