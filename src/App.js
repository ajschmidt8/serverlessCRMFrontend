import React, { Component } from "react";
import { Menu, Icon, Sidebar } from "semantic-ui-react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./components/home";
import Customers from "./components/customers";
import CustomerInfo from "./components/customerInfo";
import Sales from "./components/sales";

const NavLinkWithChildrenFunc = ({ to, exact = false, children, ...rest }) => (
  <Route path={to} exact={exact}>
    {({ match }) => (
      <NavLink to={to} {...rest}>
        {typeof children === "function" ? children(match) : children}
      </NavLink>
    )}
  </Route>
);

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Sidebar
            as={Menu}
            animation="push"
            width="thin"
            visible={true}
            icon="labeled"
            vertical
            inverted
          >
            <NavLinkWithChildrenFunc exact to="/">
              {match => (
                <Menu.Item active={!!match}>
                  <Icon name="home" />
                  Home
                </Menu.Item>
              )}
            </NavLinkWithChildrenFunc>

            <NavLinkWithChildrenFunc to="/customers">
              {match => (
                <Menu.Item active={!!match}>
                  <Icon name="users" />
                  Customers
                </Menu.Item>
              )}
            </NavLinkWithChildrenFunc>

            <NavLinkWithChildrenFunc to="/sales">
              {match => (
                <Menu.Item active={!!match}>
                  <Icon name="line chart" />
                  Sales
                </Menu.Item>
              )}
            </NavLinkWithChildrenFunc>
            <Menu.Item style={{ cursor: "pointer" }}>
              <Icon name="log out" />
              Logout
            </Menu.Item>
          </Sidebar>

          <div style={{ marginLeft: "150px" }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/customers/c/:id" component={CustomerInfo} />
              <Route path="/customers" component={Customers} />
              <Route path="/sales" component={Sales} />
              <Redirect to="/" />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
