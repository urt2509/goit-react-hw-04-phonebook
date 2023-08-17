import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { useLocalStorage } from 'hooks';
import { localStorageKeys } from 'constants';
import initialContacts from '../contacts.json';

import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { AppContainer } from './App.styled';
import { Section } from './Sections';
import { ContactList } from './Contacts';
import { ContactFormHooks } from './ContactForm';
import { Filter } from './Filter';

import { Title, SecondTitle, FieldsSet } from './App.styled';

const App = () => {
  const [contacts, setContacts] = useLocalStorage(
    localStorageKeys.CONTACTS_KEY,
    initialContacts
  );

  const addContact = newContact => {
    console.log(newContact);
    setContacts([...contacts, newContact]);
    console.log(contacts);
  };

  // const [filter, setFilter] = useState('');

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  // const findNameHandler = findName => {
  //   contacts.find(
  //     elem => elem.name.toLowerCase() === findName.nameame.toLowerCase()
  //   );

  //   if (findName) {
  //     return alert(`${findNameHandler.name} is already in contacts.`);
  //   }
  //   setContacts(prevState => prevState.contacts);
  // };

  return (
    <Layout>
      <AppContainer>
        <GlobalStyle />
        <Section>
          <FieldsSet>
            <Title>Phonebook</Title>
            <FieldsSet>
              <ContactFormHooks onAdd={addContact} />
            </FieldsSet>
          </FieldsSet>
        </Section>

        <Section>
          <FieldsSet>
            <SecondTitle>Contact List</SecondTitle>

            {/* <Filter value={filter} onChange={this.handleFilter} /> */}

            <ContactList
              contacts={contacts}
              // contacts={filteredContacts}
              onDelete={deleteContact}
              id={contacts.id}
            />
          </FieldsSet>
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
