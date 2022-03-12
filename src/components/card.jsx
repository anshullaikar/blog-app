import React from "react";
import styled from "styled-components";
import { ThemeContext } from "styled-components";
import theme from "../styles/settings.json"
const CardDiv = styled.div`
    margin-top: 2rem;
    margin-left: 5ch;
    margin-right: 5ch;
    box-shadow: 0 1px 3px ${theme.secondary}, 0 1px 2px rgba(0, 0, 0, 0.24);
    padding: 2rem;
    border-radius: 10px;
`;

const Circle = styled.div`
    width:2rem;
    height:2rem;
    border: 2px solid ${theme.secondary};
    
    border-radius:50%;

`

const CardFlexDiv = styled.div`
    margin-top: 1rem;
    margin-bottom:1rem;
    margin-left: 5ch;
    margin-right: 5ch;
    box-shadow: 0 1px 3px ${theme.accent}, 0 1px 2px rgba(0, 0, 0, 0.24);
    padding: 2rem;
    padding-right: 0px;
    padding-left: 0px;
    border-radius: 10px;
    display: flex;
    align-items: center;
`;

const Left = styled.div`
    width: 10%;
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
`;
const Right = styled.div`
    width: 90%;
`;
const CardTitle = styled.h2`
    font-weight: 600;
    font-size: 1.25rem;
    padding-bottom: 0.25rem;
`;
const CardAuthor = styled.h5`
    padding-top: 1rem;
    font-style: italic;
    font-weight: 300;
`;
const Card = ({
    title,
    body = "",
    author,
    completed = false,
    type = "not set",
}) => {
    switch (type) {
        case "blog":
            return (
                <CardDiv>
                    <CardTitle>{title}</CardTitle>
                    <p>{body}</p>
                    <CardAuthor>Written by: {author}</CardAuthor>
                </CardDiv>
            );
        case "todo":
            return (
                <CardFlexDiv style={{opacity:completed? 0.6 : 1.0}}>
                    <Left>
                        <Circle style={{backgroundColor: completed ? theme.secondary : "#fff"}}/>
                    </Left>
                    <Right>
                        <CardTitle>{title}</CardTitle>
                        <CardAuthor>Created by: {author}</CardAuthor>
                    </Right>
                </CardFlexDiv>
            );
        case "not set":
            return "Error";
        default:
            return null;
    }
};
export default Card;
