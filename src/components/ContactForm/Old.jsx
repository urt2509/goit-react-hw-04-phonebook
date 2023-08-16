import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import {
  ContactFormContainer,
  Label,
  Input,
  Button,
  Title,
} from './ContactForm.styled';

class ContactFormOld extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  numberId = nanoid();
  nameId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value, id: this.nameId });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <ContactFormContainer autoComplete="on" onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameId}>
          <Title>Name</Title>
          <Input
            type="text"
            name="name"
            value={name}
            id={this.nameId}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
          <br />
        </Label>
        <Label htmlFor={this.numberId}>
          <Title>Number</Title>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            id={this.numberId}
            onChange={this.handleChange}
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </ContactFormContainer>
    );
  }
}
