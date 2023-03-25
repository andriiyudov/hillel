import React, {Component} from 'react';

class Comments extends Component {
    render() {
        const {comments} = this.props;

        return (
            <div>
                {comments.map(({id, name, email, body}) => (
                    <div key={id}>
                        <div>Name: {name} #${id}</div>
                        <div>Email: {email}</div>
                        <div>Body: {body}</div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Comments;
