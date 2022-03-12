import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Navbar = styled.ul`
    height: 4rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
`;
const NavLink = styled.li`
    margin: 2rem;
`;

const NavBar = ({ links, colors }) => {
    return (
        <Navbar style={{backgroundColor:colors.barColor}}>
            {/*mapped links which are given in props, component can be used for any project*/}
            {links.map((link, index) => (
                <NavLink key={index}>
                    <Link
                        style={{
                            textDecoration: "none",
                            color: colors.linkColor,
                        }}
                        to={link.to}
                    >
                        {link.name}
                    </Link>
                </NavLink>
            ))}
        </Navbar>
    );
};

export default NavBar;
