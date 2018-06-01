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
  constructor(props) {
    super(props);
    this.state = {
      isEditable: this.props.isEditable || false
    };
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
                    />
                  )}
                  {!this.state.isEditable && (
                    <Button
                      content="Delete Customer"
                      icon="trash alternate outline"
                      color="red"
                      labelPosition="right"
                    />
                  )}
                  {!this.state.isEditable && (
                    <Button
                      content="Edit Customer"
                      icon="pencil"
                      labelPosition="right"
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
              </Segment>
            </Container>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}

export default customerInfo;
