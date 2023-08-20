import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: flex-start;
  max-width: 850px;
  height: 100%;
  margin-right: auto;
  margin-left: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 15px;
  background-color: #b7b7fa00;
  border: 4mm ridge #d3dc3299;
  border-radius: 10px;
  border-collapse: collapse;
`;

const Container = styled.div`
  padding: 10px;
`;

const Title = styled.h1`
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 40px;
  text-align: center;
  color: #0000ff;
`;

const SecondTitle = styled.h2`
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 40px;
  text-align: center;
  color: #0000ff;
`;

export { AppContainer, Title, SecondTitle, Container };
