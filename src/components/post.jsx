import React, { Component } from "react";
import Card from "./card";

class Post extends Component {
    state = {
        post: {},
    };
    componentDidMount() {
        fetch(
            `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`
        )
            .then((response) => response.json())
            .then((post) => {
                this.setState({ post });
            });
    }
    render() {
        return (
            <div>
                <Card
                    title={this.state.post.title}
                    body={this.state.post.body}
                    author={this.state.post.userId}
                />
            </div>
        );
    }
}

export default Post;
