import React from "react";
import { Navbar } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";

const layout = (props) => {
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg" sticky="top">
        <LinkContainer to="/">
          <Navbar.Brand>Result Finder</Navbar.Brand>
        </LinkContainer>
      </Navbar>

      {props.children}
    </React.Fragment>
  );
};

export default layout;
