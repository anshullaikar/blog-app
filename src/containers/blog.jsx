import React, {useState, useEffect } from "react";
import { useQuery } from "react-query";
import Card from "../components/card";
import Link from "react-router-dom/Link";
const Blog = () => {
    const [posts, setPosts] = useState([]);
    const { loading, error, data } = useQuery("postsData", () =>
        fetch(`https://jsonplaceholder.typicode.com/posts`).then((res) =>
            res.json()
        )
    );
    useEffect(() => {
        if (data) {
            setPosts(data);
        }
    }, [data]);
    if (loading)
        return (
            <div className="blog">
                <h1>Blog</h1>
                <div className="card-container">
                    <Card
                        type="blog"
                        title={"Loading"}
                        body={"Loading"}
                        author={"Loading"}
                    />
                </div>
            </div>
        );
    if (error) return "An error has occurred: " + error.message;
    return (
        <div className="blog">
            <h1>Blog</h1>
            <div className="card-container">
                {posts.map((post, index) => (
                    <Link
                        className="blog-card"
                        to={`/blog/${post.id}`}
                        key={post.id}
                    >
                        <Card
                            type="blog"
                            title={post.title}
                            key={post.id}
                            body={post.body}
                            author={post.userId}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Blog;
