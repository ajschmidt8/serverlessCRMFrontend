import React, { Component } from "react";
import { Container, Header, Menu, Button, Table } from "semantic-ui-react";
import TopMenu from "./topMenu";
import faker from "faker";

class customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      isLoading: true
    };
  }

  componentDidMount() {
    const customers = [...Array(10)].map(() => {
      return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        address: faker.address.streetAddress(),
        zipCode: faker.address.zipCode("#####"),
        city: faker.address.city(),
        state: faker.address.state(),
        phone: faker.phone.phoneNumberFormat(),
        email: faker.internet.email()
      };
    });

    this.timer = setTimeout(() => {
      this.setState((prevState, props) => {
        return {
          customers,
          // customers: [],
          isLoading: false
        };
      });
    }, 500);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  generateTable(customers) {
    return (
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name:</Table.HeaderCell>
            <Table.HeaderCell>Email:</Table.HeaderCell>
            <Table.HeaderCell>Phone:</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {customers.map(customer => (
            <Table.Row>
              <Table.Cell>{`${customer.firstName} ${
                customer.lastName
              }`}</Table.Cell>
              <Table.Cell>{customer.email}</Table.Cell>
              <Table.Cell>{customer.phone}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
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

          {this.state.isLoading && <p>Loading...</p>}

          {!this.state.isLoading ? (
            this.state.customers.length ? (
              this.generateTable(customers)
            ) : (
              <p>No customers...</p>
            )
          ) : null}
        </Container>
      </React.Fragment>
    );
  }
}

export default customers;
