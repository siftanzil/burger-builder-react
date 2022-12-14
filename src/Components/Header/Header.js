/** @format */

import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import Logo from "../../assets/logo.png";

import { connect } from "react-redux";

const mapStateToProps = ( state ) => {
    return {
        token: state.token,
    };
};

const Header = ( props ) => {
    let links = null;
    if ( props.token === null )
    {
        links = (
            <Nav className="mr-md-5">
                <NavItem>
                    <NavLink exact="true" to="/login" className="NavLink">
                        Login
                    </NavLink>
                </NavItem>
            </Nav>
        );
    } else
    {
        links = (
            <Nav className="mr-md-5">
                <NavItem>
                    <NavLink exact="true" to="/" className="NavLink">
                        Builder
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink exact="true" to="/orders" className="NavLink">
                        Orders
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink exact="true" to="/logout" className="NavLink">
                        Logout
                    </NavLink>
                </NavItem>
            </Nav>
        );
    }

    return (
        <div className="Navigation">
            <Navbar
                style={ {
                    backgroundColor: "yellow",
                    height: "70px",
                } }
            >
                <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">
                    <img src={ Logo } alt="Logo" width="80px" />
                </NavbarBrand>
                { links }
            </Navbar>
        </div>
    );
};
export default connect( mapStateToProps )( Header );
