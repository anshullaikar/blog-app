import React, { Component } from 'react';

class Post extends Component {
    state = {  } 
    render() { 
        return (<div>Hi {console.log(this.props.match.params.id)}</div>);
    }
}
 
export default Post;