import React, { Component } from "react";
import {
  Menu,
  Grid,
  Container,
  Header,
  Segment,
  Dropdown,
  Checkbox,
  Button
} from "semantic-ui-react";
import TopMenu from "./topMenu";
import { stateList, convertState } from "./stateList";
import axios from "axios";
import uuidv4 from "uuid/v4";
import qs from "qs";

const inputContainer = {
  display: "flex",
  marginBottom: "1rem",
  justifyContent: "space-between"
};

const input = {
  flex: 1,
  maxWidth: "calc(50% - .5rem)",
  border: "none",
  borderBottom: "1px solid rgba(34,36,38,.15)",
  padding: ".67857143em 1em .67857143em 0"
  //   borderRadius: ".28571429rem"
};

class customerInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditable: this.props.isEditable || false,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      zip: "",
      city: "",
      state: "",
      isLoading: true
    };
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleSaveNewClick = this.handleSaveNewClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSaveNewClick() {
    const customerObj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      zip: this.state.zip,
      city: this.state.city,
      // state: this.state.state,
      state: "Virginia",
      customer_id: uuidv4(),
      date: 123,
      document: "info"
    };
    console.log(qs.stringify(customerObj));

    axios
      .post(
        `https://8m7pi1zat6.execute-api.us-east-1.amazonaws.com/dev/customer/`,
        qs.stringify(customerObj)
      )
      .then(resp => (window.location = "/customers"))
      .catch(err => console.log(err));
  }

  handleDeleteClick() {
    axios
      .delete(
        `https://8m7pi1zat6.execute-api.us-east-1.amazonaws.com/dev/customer/${
          this.props.match.params.id
        }`
      )
      .then(resp => (window.location = "/customers"));
  }

  componentDidMount() {
    this.props.match.params.id
      ? axios
          .get(
            `https://8m7pi1zat6.execute-api.us-east-1.amazonaws.com/dev/customer/${
              this.props.match.params.id
            }`
          )
          .then(resp => {
            console.log(resp.data[0], "data!");
            this.setState((prevState, props) => {
              return {
                ...resp.data[0],
                isLoading: false
              };
            });
          })
      : this.setState((prevState, props) => {
          return {
            isLoading: false
          };
        });
  }

  render() {
    return (
      <React.Fragment>
        <TopMenu>
          <Menu.Item header>Customer</Menu.Item>
        </TopMenu>
        <Grid padded>
          <Grid.Column>
            <Container>
              <Header as="h1">
                {this.props.titleDescriptor || ""} Customer
              </Header>
              <Segment>
                {this.state.isLoading && <p>Loading...</p>}

                {!this.state.isLoading && (
                  <div>
                    <div style={inputContainer}>
                      <input
                        style={input}
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                      />
                      <input
                        style={input}
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div style={inputContainer}>
                      <input
                        style={input}
                        type="text"
                        placeholder="Email Address"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                      />
                      <input
                        style={input}
                        type="text"
                        placeholder="Phone"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div style={inputContainer}>
                      <input
                        style={input}
                        type="text"
                        placeholder="Street Address"
                        name="address"
                        value={this.state.address}
                        onChange={this.handleInputChange}
                      />
                      <input
                        style={input}
                        type="text"
                        placeholder="Zip Code"
                        name="zip"
                        value={this.state.zip}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div style={inputContainer}>
                      <input
                        style={input}
                        type="text"
                        placeholder="City"
                        name="city"
                        value={this.state.city}
                        onChange={this.handleInputChange}
                      />
                      <Dropdown
                        placeholder="State"
                        search
                        selection
                        style={{ maxWidth: "calc(50% - .5rem)", flex: 1 }}
                        name="state"
                        defaultValue={
                          this.state.state
                            ? convertState(this.state.state, 2)
                            : ""
                        }
                        options={stateList}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div style={inputContainer}>
                      <Checkbox label="Subscribe to tuning reminders" />
                    </div>
                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      {this.state.isEditable && (
                        <Button
                          content="Cancel"
                          icon="cancel"
                          labelPosition="right"
                        />
                      )}
                      {this.state.isEditable && (
                        <Button
                          content="Save Customer"
                          color="green"
                          icon="save"
                          labelPosition="right"
                          onClick={this.handleSaveNewClick}
                        />
                      )}
                      {!this.state.isEditable && (
                        <Button
                          content="Delete Customer"
                          icon="trash alternate outline"
                          color="red"
                          labelPosition="right"
                          onClick={this.handleDeleteClick}
                        />
                      )}
                      {!this.state.isEditable && (
                        <Button
                          content="Edit Customer"
                          icon="pencil"
                          labelPosition="right"
                          onClick={e => {
                            this.setState((prevState, props) => ({
                              isEditable: !prevState.isEditable
                            }));
                          }}
                        />
                      )}
                      {!this.state.isEditable && (
                        <Button
                          content="Invoice Customer"
                          color="green"
                          icon="dollar"
                          labelPosition="right"
                        />
                      )}
                    </div>
                  </div>
                )}
              </Segment>
            </Container>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}

export default customerInfo;
