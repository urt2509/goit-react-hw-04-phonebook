import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Section } from './Sections';
import { nanoid } from 'nanoid';

import { ContactList } from './Contacts';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';

import initialContacts from '../contacts.json';

import { Title, SecondTitle, FieldsSet } from './App.styled';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  contactId = nanoid();

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parcedContacts = JSON.parse(contacts);

    if (parcedContacts) {
      this.setState({ contacts: parcedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = props => {
    const contact = {
      id: nanoid(),
      name: props.name,
      number: props.number,
    };

    const findName = this.state.contacts.find(
      elem => elem.name.toLowerCase() === props.name.toLowerCase()
    );

    if (findName) {
      return alert(`${findName.name} is already in contacts.`);
    }
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = e => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  handleDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== contactId),
    }));
  };

  render() {
    const { filter, contacts } = this.state;

    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <Section>
          <FieldsSet>
            <Title>Phonebook</Title>
            <FieldsSet>
              <ContactForm onSubmit={this.formSubmitHandler} />
            </FieldsSet>
          </FieldsSet>
        </Section>

        <Section>
          <FieldsSet>
            <SecondTitle>Contact List</SecondTitle>

            <Filter value={filter} onChange={this.handleFilter} />

            <ContactList
              contacts={filteredContacts}
              onDelete={this.handleDelete}
              id={contacts.id}
            />
          </FieldsSet>
        </Section>
      </>
    );
  }
}

App.propTypes = {
  id: PropTypes.string,
  filter: PropTypes.string,
  contacts: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.number,
  }),
};

export { App };
