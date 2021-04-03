import React from "react";
import { Link } from "react-scroll";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link as Menu } from "react-router-dom";
const Header = () => {
  const links = [
    {
      id: 0,
      url: "aboutme-section",
      description: "About me",
    },
    {
      id: 1,
      url: "work_section",
      description: "Work",
    },
    {
      id: 2,
      url: "skillset-section",
      description: "Skill Set",
    },
    {
      id: 3,
      url: "projects_section",
      description: "Projects",
    },
    {
      id: 4,
      url: "contact_section",
      description: "Contact",
    },
  ];
  return (
    <div className="container">
      <Navbar.Brand className="navHeaderWrapper">
        <Menu to="/">Home</Menu>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {links.map((link) => {
            return (
              <Link
                key={link.id}
                to={link.url}
                spy={true}
                smooth={true}
                className="menu-nav-tile"
              >
                {link.description}
              </Link>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </div>
  );
};

export default Header;
