import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import * as yup from 'yup';

import {
  StyledFormik,
  Label,
  Input,
  Button,
  Title,
  StyledForm,
} from './ContactForm.styled';

const ContactForm = ({ onAdd }) => {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  // const numberId = nanoid();
  // const nameId = nanoid();

  const handleNameInput = e => {
    setContactName(e.currentTarget.value);
  };
  const handleNumberInput = e => {
    setContactNumber(e.currentTarget.value);
  };

  const reset = () => {
    setContactName('');
    setContactNumber('');
  };

  const handleSubmit = e => {
    const contact = {
      id: nanoid(),
      name: contactName,
      number: contactNumber,
    };

    onAdd(contact);
    reset();
  };

  return (
    <StyledFormik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
    >
      <StyledForm autoComplete="off">
        <Label>
          <Title>Name</Title>
          <Input
            type="text"
            name="name"
            placeholder="First and last name..."
            value={contactName}
            onChange={handleNameInput}
          />
        </Label>
        <Label>
          <Title>Number</Title>
          <Input
            type="tel"
            name="number"
            placeholder="Phone numer..."
            value={contactNumber}
            onChange={handleNumberInput}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </StyledFormik>
  );
};

ContactForm.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.number,
  }),
  id: PropTypes.string,
};

export { ContactForm };
