import React, {Component} from 'react';
import './App.css';
import Post from './post/post';
import Comments from './comments/comments';
import ActionButtons from './action-buttons/action-buttons';

const URL = 'https://jsonplaceholder.typicode.com';
class App extends Component {
    state = {
        postId: '',
        post: null,
        comments: null,
    };

    onPostIdChange = postId => {
        this.setState({postId});
    }

    onClearButtonClick = () => {
        this.setState({postId: '', post: null, comments: null});
    }

    handleGetPost = () => {
        const {postId} = this.state;

        fetch(`${URL}/posts/${postId}`)
            .then(res => res.json())
            .then(post => this.setState({post}))
    }

    handleGetPostComments = () => {
        const {postId} = this.state;

        fetch(`${URL}/posts/${postId}/comments`)
            .then(res => res.json())
            .then(comments => this.setState({comments}))
    }

    render() {
        const {postId, post, comments} = this.state;

        return (
            <div>
                <ActionButtons
                    postId={postId}
                    onPostIdChange={this.onPostIdChange}
                    onClearButtonClick={this.onClearButtonClick}
                    handleGetPost={this.handleGetPost}
                    handleGetPostComments={this.handleGetPostComments}
                />
                {post && <Post post={post} postId={postId}/>}
                {comments && <Comments comments={comments}/>}
            </div>
        );
    }
}

export default App;
