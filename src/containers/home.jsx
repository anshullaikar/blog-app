import React from "react";
import styled from "styled-components";

const Welcome = styled.h1`
    font-size:4rem;
    padding-top:2rem;
    padding-bottom:1rem;
`;
const Home = () => {
    return (
        <div style={{marginLeft:"2rem"}}>
            <Welcome>Welcome!</Welcome>
            <p>
                Please click the Todos or Blog link on the Navbar to continue.
            </p>
        </div>
    );
};

export default Home;
