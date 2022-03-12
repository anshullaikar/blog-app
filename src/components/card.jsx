import React from "react";
import styled from "styled-components";

const CardDiv = styled.ul`
    margin-top: 2rem;
    margin-left: 5ch;
    margin-right: 5ch;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    padding: 2rem;
    border-radius: 10px;
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
const Card = ({title, body, author}) => (
    <CardDiv>
        <CardTitle>{title}</CardTitle>
        <p>{body}</p>
        <CardAuthor>Written by: {author}</CardAuthor>
    </CardDiv>
);
export default Card;
