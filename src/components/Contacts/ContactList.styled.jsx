import styled from 'styled-components';

const ContactListContainer = styled.ul`
  margin: 0;
  padding: 15px;
  width: 100%;
  heigth: 100%;
`;

const List = styled.li`
  display: flex;
  gap: 15px;

  align-items: center;
`;

const Item = styled.p`
  font-size: 24px;
  text-shadow: 0.5px 0.5px 1px #000000;
  color: rgb(96, 149, 255);
  ${'' /* color: #3d3b3b; */}
`;

const Button = styled.button`
  width: 150px;
  border: solid 3px rgb(96, 149, 255);
  border-radius: 5px;
  box-shadow: rgb(216, 227, 237) 2px 2px 5px 5px;
  height: 100%;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);

  &:hover,
  :focus {
    background-color: rgb(96, 149, 255);
    color: rgb(255, 255, 255);
  }
`;

export { Item, Button, List, ContactListContainer };
