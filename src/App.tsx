import GlobalStyle from "./globalStyles";
import styled from "styled-components";
import background from "./assets/background-min.png";
import Header from "./components/header";
import CreateNewTask from "./components/create-new";
import TodayTasks from "./components/today-task";
import Progress from "./components/progress";
import CompletedTasks from "./components/complete-task";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(${background}) no-repeat center center;
  background-size: cover;
`;

const Content = styled.section`
  max-width: 1248px;
  padding: 96px 16px;
  margin: 0 auto;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 176px;

  @media (max-width: 1100px) {
    column-gap: 80px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 500px) {
    padding: 48px 16px;
  }
`;

const Divider = styled.div`
  width: 1px;
  min-height: calc(100vh - 272px);
  height: calc(100% - 192px);
  background: #24293f;
  position: absolute;
  top: 96px;
  left: 50%;

  @media (max-width: 768px) {
    display: none;
  }
`;


const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Content>
          <CreateNewTask />
          <TodayTasks />
          <Divider />
          <Progress />
          <CompletedTasks />
        </Content>
      </Container>
    </>
  );
};

export default App;
