import React,{useState} from 'react';
import {Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText} from 'reactstrap';

const Header = props =>{
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return(
        <Navbar color="primary" light expand="md">
        <NavbarBrand href="/">Redux Auth</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
          <NavLink href="/"></NavLink>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    );
}

export default Header;