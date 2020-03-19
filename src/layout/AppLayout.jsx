import React from "react";
import { Link } from "@reach/router";
import { Navbar, Nav, Dropdown, Badge } from "react-bootstrap";

import "./style.scss";

const AppLayout = props => {
  return (
    <div className="applayout">
      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <Link to="/">
              <span>R</span>Hello-React
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="/">
                  <i className="icon-dashcube" />
                  Dashboard
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/component">
                  <i className="icon-calendar-page-empty" />
                  Components
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/">
                  <i className="icon-chart-line" />
                  Analystics
                </Link>
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto notify">
              <Nav.Link>
                <i className="icon-clock" />
                <Badge variant="success">5</Badge>
              </Nav.Link>
              <Nav.Link>
                <i className="icon-email-mail-streamline" />
                <Badge variant="success">5</Badge>
              </Nav.Link>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <figure>
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                      alt=""
                    />
                  </figure>
                  Herry Beer
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <div className="container">{props.children}</div>
    </div>
  );
};

export default AppLayout;
