import React, {Component} from 'react';
import {getPostIdValidErrorMessage} from './utils/getPostIdValidErrorMessage';


class ActionButtons extends Component {
    handlePostIdInputChange = ({target: {value}}) => {
        this.props.onPostIdChange(value);
    }
    render() {
        const {postId} = this.props;
        const postIdErrorMsg = getPostIdValidErrorMessage(postId);

        return (
            <div>
                <input type="text" onChange={this.handlePostIdInputChange} value={postId}/>
                <button onClick={this.props.onClearButtonClick}>Clear Id</button>
                {postIdErrorMsg && <div>{postIdErrorMsg}</div>}
                {(postId && !postIdErrorMsg) && (
                    <div>
                        <button onClick={this.props.handleGetPost}>Get Post</button>
                        <button onClick={this.props.handleGetPostComments}>Get Post Comments</button>
                    </div>
                )}
            </div>
        );
    }
}

export default ActionButtons;
