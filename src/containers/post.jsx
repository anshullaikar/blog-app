import React, {useState, useEffect } from "react";
import { useQuery } from "react-query";
import Card from "../components/card";
import Comment from "../components/comment";
const Post = ({ match }) => {
    const [post, setPost] = useState({});
    const [commentList, setCommentList] = useState([]);
    const {
        loading: postIsLoading,
        error: postError,
        data: postData,
    } = useQuery("postData", () =>
        fetch(
            `https://jsonplaceholder.typicode.com/posts/${match.params.id}`
        ).then((res) => res.json())
    );
    const {
        loading: commentsIsLoading,
        error: commentsError,
        data: commentsData,
    } = useQuery("commentsData", () =>
        fetch(`https://jsonplaceholder.typicode.com/comments/`).then((res) =>
            res.json()
        )
    );
    useEffect(() => {
        if (postData) {
            setPost(postData);
        }
    }, [postData]);
    useEffect(() => {
        if (commentsData) {
            let filteredList = commentsData.filter((comment) => {
                return comment.postId == match.params.id;
            });
            setCommentList(filteredList);
        }
    }, [commentsData]);
    if (postIsLoading || commentsIsLoading)
        return (
            <div>
                <Card
                    type="blog"
                    title={"Loading"}
                    body={"Loading"}
                    author={"Loading"}
                />
                <Comment
                    key={"Loading"}
                    name={"Loading"}
                    body={"Loading"}
                    email={"Loading"}
                />
            </div>
        );

    if (postError || commentsError)
        return (
            "An error has occurred: " +
            postError.message +
            commentsError.message
        );
    return (
        <div>
            <Card
                type="blog"
                title={post.title}
                body={post.body}
                author={post.userId}
            />
            {commentList.map((comment) => (
                <Comment
                    key={comment.id}
                    name={comment.name}
                    body={comment.body}
                    email={comment.email}
                />
            ))}
        </div>
    );
};

export default Post;
