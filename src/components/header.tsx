import styled from "styled-components";

const Headerdiv = styled.header`
  border-bottom: 1px solid #151a37;
`;

const Container = styled.div`
  max-width: 1248px;
  padding: 20px 16px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-family: "Montserrat";
  font-size: 2rem;
  line-height: 1;
  font-weight: 400;
  color: #fff;
`;

const Header = () => {
  return (
    <Headerdiv>
      <Container>
        <Title>To-Do List</Title>
      </Container>
    </Headerdiv>
  );
};

export default Header;
