import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from "reactstrap";
import { NavLink } from "react-router-dom";
import routes from "../routes/routes";
import useAdminProvider from "../store/AdminProvider/useAdminProvider";

const Header = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { isAdminLoggedIn } = useAdminProvider();

  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    window.localStorage.removeItem("jwtToken");
    window.location.reload();
  };

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
            {isAdminLoggedIn ? (
              <NavItem>
                <NavLink
                  className={"nav-link"}
                  activeClassName={"active"}
                  to={routes.newPost}
                >
                  New Post
                </NavLink>
              </NavItem>
            ) : null}
          </Nav>
          {isAdminLoggedIn ? (
            <Button onClick={logout}>Logout</Button>
          ) : (
            <NavLink
              activeClassName="active"
              className="nav-link"
              to={routes.adminLogin}
            >
              Login
            </NavLink>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};
export default Header;
