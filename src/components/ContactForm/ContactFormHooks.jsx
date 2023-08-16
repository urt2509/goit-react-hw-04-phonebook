import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import {
  ContactFormContainer,
  Label,
  Input,
  Button,
  Title,
} from './ContactForm.styled';

const patterns = {
  name: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
  phone: '+?d{1,4}?[ .-s]?(?d{1,3}?)?[ .-s]?d{1,4}[ .-s]?d{1,4}[ .-s]?d{1,9}',
};

const titleMessages = {
  name: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  phone:
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
};

const ContactFormHooks = ({ onSubmit }) => {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  // const [contact, setContact] = useState('');
  // const contact = { contactId, contactName, contactNumber };

  const numberId = nanoid();
  const nameId = nanoid();

  const handleNameInput = e => {
    setContactName(e.currentTarget.value);
    console.log(contactName);
  };
  const handleNumberInput = e => {
    setContactNumber(e.currentTarget.value);
    console.log(contactNumber);
  };

  const handleSubmit = e => {
    console.log(contactName);
    console.log(contactNumber);
    // const contact = {
    //   id: nanoid(),
    //   name: contactName,
    //   number: contactNumber,
    // };

    // // onSubmit(contact);
    // console.log(contact);
    // setContactName('');
    // setContactNumber('');
  };

  return (
    <ContactFormContainer autoComplete="off" onSubmit={handleSubmit}>
      <Label htmlFor={nameId}>
        <Title>Name</Title>
        <Input
          type="text"
          name="name"
          // pattern={patterns.name}
          title={titleMessages.name}
          required
          value={contactName}
          // id={nameId}
          onChange={handleNameInput}
        />
        <br />
      </Label>
      <Label htmlFor={numberId}>
        <Title>Number</Title>
        <Input
          type="tel"
          name="number"
          // pattern={patterns.phone}
          title={titleMessages.phone}
          required
          value={contactNumber}
          // id={numberId}
          onChange={handleNumberInput}
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </ContactFormContainer>
  );
};

ContactFormHooks.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
};

export { ContactFormHooks };
