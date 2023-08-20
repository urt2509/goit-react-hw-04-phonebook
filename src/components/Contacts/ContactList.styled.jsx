import styled from 'styled-components';

const ContactListContainer = styled.ul`
  margin: 0;
  padding: 15px;
  width: 100%;
  heigth: 100%;
`;

const List = styled.li`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
`;

const Item = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #0000ff;
`;

const Button = styled.button`
  width: 180px;
  border: solid 3px rgb(96, 149, 255);
  border-radius: 5px;
  box-shadow: rgb(216, 227, 237) 2px 2px 5px 5px;
  height: 45px;
  margin: 5px;
  text-align: center;
  background-color: #ffffff;
  color: #0000ff;
  font-weight: bold;

  &:hover,
  :focus {
    background-color: #0000ff;
    color: #ffffff;
    font-size: 1.15em;
  }
`;

export { Item, Button, List, ContactListContainer };
