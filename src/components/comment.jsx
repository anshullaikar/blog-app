import React, { Component } from 'react';
class Comment extends Component { 
    render() { 
        return (
            <div className="comment">
                <div className="comment-body">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.body}</p>
                    <h5>Email: {this.props.email}</h5>
                </div>
            </div>
        );
    }
}
 
export default Comment;

// // 0:
// body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
// email: "Eliseo@gardner.biz"
// id: 1
// name: "id labore ex et quam laborum"
// postId: 1