import React, { Component } from "react";
import {
  Container,
  Header,
  Menu,
  Button,
  Table,
  Grid
} from "semantic-ui-react";
import { withRouter, NavLink } from "react-router-dom";
import TopMenu from "./topMenu";
import axios from "axios";

class customers extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.history);
    this.state = {
      customers: [],
      isLoading: true
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://ja01v4wvc7.execute-api.us-east-1.amazonaws.com/dev/customers"
      )
      .then(resp => {
        console.log(resp.data, "data!");
        this.setState((prevState, props) => {
          return {
            customers: resp.data,
            isLoading: false
          };
        });
        return resp.data;
      });
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleUserClick(id, e) {
    this.props.history.push(`/customers/c/${id}`);
  }

  generateTable(customers) {
    return (
      <Table celled striped selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name:</Table.HeaderCell>
            <Table.HeaderCell>Email:</Table.HeaderCell>
            <Table.HeaderCell>Phone:</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {customers.map(customer => (
            <Table.Row
              key={customer.customer_id}
              style={{ cursor: "pointer" }}
              onClick={e => this.handleUserClick(customer.customer_id, e)}
            >
              <Table.Cell>
                {`${customer.firstName} ${customer.lastName}`}
              </Table.Cell>
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
        </TopMenu>
        <Grid padded>
          <Grid.Column>
            <Container>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1rem"
                }}
              >
                <Header as="h1" style={{ margin: 0 }}>
                  Customers
                </Header>

                <NavLink to="/customers/new">
                  <Button
                    color="green"
                    content="New Customer"
                    icon="plus"
                    labelPosition="right"
                  />
                </NavLink>
              </div>

              {this.state.isLoading && <p>Loading...</p>}

              {!this.state.isLoading &&
                (this.state.customers.length ? (
                  this.generateTable(customers)
                ) : (
                  <p>No customers...</p>
                ))}
            </Container>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withRouter(customers);
