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

  // const [filter, setFilter] = useState('');

  const formSubmitHandler = () => {
    console.log('render');
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
              <ContactFormHooks onSubmit={formSubmitHandler} />
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
              // onDelete={this.handleDelete}
              id={contacts.id}
            />
          </FieldsSet>
        </Section>
      </AppContainer>
    </Layout>
  );
};

// handleFilter = e => {
//   this.setState({ filter: e.currentTarget.value });
// };

// getFilteredContacts = e => {
//   const { contacts, filter } = this.state;
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

// handleDelete = contactId => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(el => el.id !== contactId),
//   }));
// };

// render() {
//   const { filter, contacts } = this.state;

//   const filteredContacts = this.getFilteredContacts();

// return (
//   <>
//     <Section>
//       <FieldsSet>
//         <Title>Phonebook</Title>
//         <FieldsSet>
//           <ContactForm onSubmit={this.formSubmitHandler} />
//         </FieldsSet>
//       </FieldsSet>
//     </Section>

//     <Section>
//       <FieldsSet>
//         <SecondTitle>Contact List</SecondTitle>

//         <Filter value={filter} onChange={this.handleFilter} />

//         <ContactList
//           contacts={filteredContacts}
//           onDelete={this.handleDelete}
//           id={contacts.id}
//         />
//       </FieldsSet>
//     </Section>
//   </>
// );
//   }
// }

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
