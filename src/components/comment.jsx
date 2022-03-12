import React from "react";
import styled from "styled-components";

const CommentDiv = styled.div`
    margin-left: 10ch;
    margin-right: 5ch;
    border-bottom: 2px solid rgba(0, 0, 0, 0.12);
    border-left: 2px solid rgba(0, 0, 0, 0.12);
    padding: 2rem;
`;
const CommentName = styled.h2`
    font-weight: 400;
    font-size: 0.8rem;
    padding-bottom: 0.5rem;
`;

const CommentBody = styled.p`
    font-weight: 300;
    font-size: 0.8rem;
`;

const CommentEmail = styled.h5`
    margin-top: 0.8rem;
    font-size: 0.8rem;
    font-style: italic;
    font-weight: 300;
`;

const Comment = ({ name, body, email }) => (
    <CommentDiv>
            <CommentName>{name}</CommentName>
            <CommentBody>{body}</CommentBody>
            <CommentEmail>Email: {email}</CommentEmail>
    </CommentDiv>
);

export default Comment;
