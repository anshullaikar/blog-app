import React, { Component } from "react";
import Card from "./card";
import Link from "react-router-dom/Link";
class Blog extends Component {
    state = {
        posts: [],
    };
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((postList) => {
                this.setState({ posts: postList });
            });
    }
    render() {
        return (
            <div>
                <h1>Blog</h1>
                <div className="card-container">
                    {this.state.posts.map((post, index) => (
                        <Link to={`/blog/${post.id}`}>
                            <Card
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
    }
}

export default Blog;
