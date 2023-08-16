import styled from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  max-width: 750px;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding: 24px;

  background-color: #f0f6f5;
`;

const FieldsSet = styled.fieldset`
border: solid 1px color: #555;
border-radius: 5px;
`;

const Title = styled.h1`
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 40px;
  text-align: start;
  color: #555;
`;

const SecondTitle = styled.h2`
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 40px;
  text-align: start;
  color: #555;
`;

export { AppContainer, Title, SecondTitle, FieldsSet };
