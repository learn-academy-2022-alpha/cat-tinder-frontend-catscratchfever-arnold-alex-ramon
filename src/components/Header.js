// import React, { Component } from 'react'

// class Header extends Component {
//     render() {
//         return (
//             <>
//                 <h1>This is Header</h1>
//             </>
//         )
//     }
// }
// export default Header
import React, {Component} from "react";
import {
    Collapse, DropdownItem, DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand, NavbarText,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from "reactstrap";

export default class Header extends Component {
    render() {
        return(
            <>
                <div>
                    <Navbar
                        color="light"
                        expand="md"
                        light
                    >
                        <NavbarBrand href="/">
                            I am a Header
                        </NavbarBrand>
                        <NavbarToggler onClick={function noRefCheck(){}} />
                        <Collapse navbar>
                            <Nav
                                className="me-auto"
                                navbar
                            >
                                <NavItem>
                                    <NavLink href="/">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/catindex">
                                        Find a match
                                    </NavLink>
                                </NavItem>
                                <UncontrolledDropdown inNavbar nav>
                                    <DropdownToggle caret nav>
                                        Options
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <NavLink href="/catnew">Add a Cat</NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink href="/catindex">Update Cat</NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                            <NavbarText>
                                Cat Scratch Fever
                            </NavbarText>
                        </Collapse>
                    </Navbar>
                </div>
            </>

        )
    }
}
