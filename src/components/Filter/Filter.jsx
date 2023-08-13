import React from 'react';
import PropTypes from 'prop-types';
import { InputFilter, Title, FilterContainer } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <FilterContainer>
    <Title>Find contacts by name</Title>
    <InputFilter type="text" value={value} onChange={onChange} />
  </FilterContainer>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export { Filter };
