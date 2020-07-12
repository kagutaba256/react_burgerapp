import React from "react";
import Aux from "../../hoc/Aux";

const Layout = (props) => (
  <Aux>
    Toolbar, SideDrawer, Backdrop
    <main>{props.children}</main>
  </Aux>
);

export default Layout;
