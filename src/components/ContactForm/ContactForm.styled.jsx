import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';

const StyledFormik = styled(Formik)`
  margin: 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 5px;
`;

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

const Input = styled(Field)`
  margin: 0px;
  width: 250px;
  height: 45px;
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
  flex-direction: row;

  justify-content: space-around;
  align-content: center;
  flex-wrap: wrap;
`;

export { StyledFormik, Label, Input, Button, Title, StyledForm };
