import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 15px 16px;
  margin: 5px auto;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <main>{children}</main>
    </Wrapper>
  );
};

export { Layout };
