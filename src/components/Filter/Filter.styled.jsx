import styled from 'styled-components';

const FilterContainer = styled.label`
  display: flex;

  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 25px;
  margin-left: 40px;
  padding: 10px;

  color: #0000ff;
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
  font-size: 18px;
  ${'' /* font-weight: bold; */}
  background-color: #ffffff;
  color: #0000ff;
`;

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 10px;
  margin-left: 40px;
  text-align: start;
  color: #0000ff;
`;

export { InputFilter, Title, FilterContainer };
