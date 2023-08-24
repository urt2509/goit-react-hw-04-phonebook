import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Label,
  StyledField,
  Button,
  Title,
  StyledForm,
  StyledError,
} from './ContactForm.styled';

const schema = Yup.object().shape({
  name: Yup.string().min(1, 'Too short!').required('Required'),
  number: Yup.string()
    .min(9, 'Must be at least 9 symbols')
    .required('Required'),
});

const ContactForm = ({ onAdd }) => {
  // const [contactName, setContactName] = useState('');
  // const [contactNumber, setContactNumber] = useState('');

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        onAdd({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <StyledForm autoComplete="off">
        <Label>
          <Title>Name</Title>
          <StyledField name="name" placeholder="First and last name..." />
          <StyledError name="name" component="div" />
        </Label>
        <Label>
          <Title>Number</Title>
          <StyledField name="number" placeholder="Phone numer..." />
          <StyledError name="number" component="div" />
        </Label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
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
