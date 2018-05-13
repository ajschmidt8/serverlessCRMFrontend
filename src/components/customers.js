import React, { Component } from "react";
import { Container, Header, Menu, Button } from "semantic-ui-react";
import TopMenu from "./topMenu";

class customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      loading: true
    };
  }

  // TODO: figure out how to cache DynamoDB response

  componentDidMount() {
    setTimeout(() => {
      this.setState((prevState, props) => {
        return {
          customers: ["Bob", "Joe"],
          loading: false
        };
      });
    }, 1000);
  }

  render() {
    const customers = this.state.customers;

    return (
      <React.Fragment>
        <TopMenu>
          <Menu.Item header>Customers</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item name="signup" onClick={this.handleItemClick}>
              <Button
                color="green"
                content="New Customer"
                icon="plus"
                labelPosition="right"
              />
            </Menu.Item>
          </Menu.Menu>
        </TopMenu>
        <Container>
          <Header as="h1">Customers</Header>

          {this.state.loading ? (
            <p>Loading...</p>
          ) : this.state.customers.length ? (
            <ul>
              {customers.map(customer => <li key={customer}>{customer}</li>)}
            </ul>
          ) : (
            <p>No customers...</p>
          )}
        </Container>
      </React.Fragment>
    );
  }
}

export default customers;
