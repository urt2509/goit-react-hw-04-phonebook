import styled from 'styled-components';

const FilterContainer = styled.label`
  margin-bottom: 25px;
  margin-left: 40px;
  padding: 10px;
`;

const InputFilter = styled.input`
  margin-left: 40px;
  width: 250px;
  border: solid 3px rgb(96, 149, 255);
  border-radius: 5px;
  box-shadow: rgb(216, 227, 237) 2px 2px 5px 5px;
  height: 100%;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
`;

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 10px;
  margin-left: 40px;
  text-align: start;
  color: #555;
`;

export { InputFilter, Title, FilterContainer };
