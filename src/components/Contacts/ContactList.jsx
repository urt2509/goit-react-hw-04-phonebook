import React from 'react';
import PropTypes from 'prop-types';

import { Item, Button, List, ContactListContainer } from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => (
  <ContactListContainer>
    {contacts.map(({ id, name, number }) => (
      <List key={id}>
        <Item>
          {name}: {number}
        </Item>
        <Button type="submit" onClick={() => onDelete(id)}>
          Delete contact
        </Button>
      </List>
    ))}
  </ContactListContainer>
);

ContactList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
};

export { ContactList };
