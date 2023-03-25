import React, {Component} from 'react';

class Post extends Component {
    render() {
        const {post, postId} = this.props;
        const {title, body, userId} = post;

        return (
            <div>
                <div>Title: {title} #{postId}</div>
                <div>Body: {body}</div>
                <div>User Id: {userId}</div>
            </div>
        );
    }
}

export default Post;
