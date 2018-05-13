import React from "react";
import { Menu } from "semantic-ui-react";

const topMenu = ({ children }) => {
  return <Menu style={{ marginBottom: "3em" }}>{children}</Menu>;
};

export default topMenu;
