import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useLocalStorage } from 'hooks';
import { localStorageKeys } from 'constants';
import initialContacts from '../contacts.json';

import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { AppContainer } from './App.styled';
import { Section } from './Sections';
import { ContactList } from './Contacts';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';

import { Title, SecondTitle, Container } from './App.styled';

const App = () => {
  const [contacts, setContacts] = useLocalStorage(
    localStorageKeys.CONTACTS_KEY,
    initialContacts
  );
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    const findName = contacts.find(
      elem => elem.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (findName) {
      return alert(`${findName.name} is already in contacts.`);
    }

    setContacts([...contacts, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const getFilteredContacts = e => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleFilter = e => {
    setFilter(e.currentTarget.value);
    console.log(filter);
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Layout>
      <AppContainer>
        <GlobalStyle />
        <Section>
          <Title>Phonebook</Title>
          <Container>
            <Container>
              <ContactForm onAdd={addContact} />
            </Container>
          </Container>
        </Section>

        <Section>
          <SecondTitle>Contacts</SecondTitle>
          <Container>
            <Filter value={filter} onChange={handleFilter} />

            <ContactList
              contacts={filteredContacts}
              onDelete={deleteContact}
              id={contacts.id}
            />
          </Container>
        </Section>
      </AppContainer>
    </Layout>
  );
};

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
