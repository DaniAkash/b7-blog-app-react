import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText
} from "reactstrap";
import { NavLink } from "react-router-dom";
import routes from "../routes/routes";

const Header = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavLink className={"navbar-brand"} to={routes.home}>
          Blog
        </NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                className={"nav-link"}
                activeClassName={"active"}
                to={routes.home}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={"nav-link"}
                activeClassName={"active"}
                to={routes.authors}
              >
                Authors
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={"nav-link"}
                activeClassName={"active"}
                to={routes.newPost}
              >
                New Post
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>About</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default Header;
