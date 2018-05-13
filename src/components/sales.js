import React from "react";
import { Container, Header, Menu } from "semantic-ui-react";
import TopMenu from "./topMenu";

const sales = () => {
  return (
    <React.Fragment>
      <TopMenu>
        <Menu.Item header>Sales</Menu.Item>
      </TopMenu>
      <Container>
        <Header as="h1">Sales!</Header>
        <p>Here's your sales stuff!! Look at that $$$.</p>
      </Container>
    </React.Fragment>
  );
};

export default sales;
