import React, { Component } from "react";
import Card from "./card";
import Comment from "./comment";
class Post extends Component {
    state = {
        post: {},
        commentList:[]
    };
    componentDidMount() {
        fetch(
            `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`
        )
            .then((response) => response.json())
            .then((post) => {
                this.setState({ post });
            });
        fetch(
            `https://jsonplaceholder.typicode.com/comments/`
        )
            .then((response) => response.json())
            .then((comments) => {
                let filteredList = comments.filter((comment) => {

                  return comment.postId == this.props.match.params.id})
                console.log(comments)
                this.setState({ commentList: filteredList});
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
                {this.state.commentList.length && this.state.commentList.map(comment => <Comment key={comment.id} name={comment.name} body={comment.body} email={comment.email}/>)}
                {console.log(this.state.commentList)}
            </div>
        );
    }
}

export default Post;
