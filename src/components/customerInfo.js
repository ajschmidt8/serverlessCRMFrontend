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
import { stateList } from "./stateList";

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
  render() {
    return (
      <React.Fragment>
        <TopMenu>
          <Menu.Item header>Customer</Menu.Item>
        </TopMenu>
        <Grid padded>
          <Grid.Column>
            <Container>
              <Header as="h1">Add Customer</Header>
              <Segment>
                <div style={inputContainer}>
                  <input style={input} type="text" placeholder="First Name" />
                  <input style={input} type="text" placeholder="Last Name" />
                </div>
                <div style={inputContainer}>
                  <input
                    style={input}
                    type="text"
                    placeholder="Email Address"
                  />
                  <input style={input} type="text" placeholder="Phone" />
                </div>
                <div style={inputContainer}>
                  <input
                    style={input}
                    type="text"
                    placeholder="Street Address"
                  />
                  <input style={input} type="text" placeholder="Zip Code" />
                </div>
                <div style={inputContainer}>
                  <input style={input} type="text" placeholder="City" />
                  <Dropdown
                    placeholder="State"
                    search
                    selection
                    style={{ maxWidth: "calc(50% - .5rem)", flex: 1 }}
                    // defaultValue="NJ"
                    options={stateList}
                  />
                </div>
                <div style={inputContainer}>
                  <Checkbox label="Subscribe to tuning reminders" />
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    content="Cancel"
                    icon="cancel"
                    labelPosition="right"
                  />
                  <Button
                    content="Edit User"
                    icon="pencil"
                    labelPosition="right"
                  />
                  <Button
                    content="Delete User"
                    icon="trash alternate outline"
                    color="red"
                    labelPosition="right"
                  />
                  <Button
                    content="Save User"
                    icon="save"
                    labelPosition="right"
                  />
                  <Button
                    content="Save &amp; Invoice"
                    color="green"
                    icon="dollar"
                    labelPosition="right"
                  />
                </div>
              </Segment>
            </Container>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}

export default customerInfo;
