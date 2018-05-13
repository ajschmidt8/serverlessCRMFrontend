import React from "react";
import TopMenu from "./topMenu";
import { Container, Header, Menu } from "semantic-ui-react";

const Home = () => {
  return (
    <React.Fragment>
      <TopMenu>
        <Menu.Item header>Home</Menu.Item>
      </TopMenu>
      <Container>
        <Header as="h1">Welcome to the CRM</Header>
        <p>Please select an item from the left menu to get started.</p>
      </Container>
    </React.Fragment>
  );
};

export default Home;
