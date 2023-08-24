import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

const Label = styled.label`
  padding: 0px;
  color: #0000ff;
`;

const Title = styled.p`
  font-size: 1.15em;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: start;
  color: #0000ff;
`;

const StyledField = styled(Field)`
  margin: 0px;
  margin-right: 10px;
  width: 250px;
  border: solid 3px rgb(96, 149, 255);
  border-radius: 5px;
  box-shadow: rgb(216, 227, 237) 2px 2px 5px 5px;
  background-color: rgb(255, 255, 255);
  color: #0000ff;
`;

const Button = styled.button`
  width: 180px;
  border: solid 3px rgb(96, 149, 255);
  border-radius: 5px;
  box-shadow: rgb(216, 227, 237) 2px 2px 5px 5px;
  height: 45px;
  margin: 5px;
  margin-top: 10px;
  text-align: center;
  background-color: #0000ff;
  color: #ffffff;
  font-weight: bold;

  &:hover,
  :focus {
    background-color: #ffffff;
    color: #0000ff;
    font-size: 1.15em;
  }
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledError = styled(ErrorMessage)`
  color: #0000ff;
`;

export { Label, StyledField, Button, Title, StyledForm, StyledError };
