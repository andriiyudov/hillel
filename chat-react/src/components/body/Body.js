import React, {Component} from 'react';
import {ENTER_KEY_CODE, INITIAL_MESSAGES} from './constants';
import {getMessage} from './utils/getMessage';
import {getRandomMessage} from './utils/getRandomMessage';
import Message from './message/Message';
import './Body.css';


class Body extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textareaText: '',
            messages: INITIAL_MESSAGES,
        }
    }

    onTextAreaChange = ({target: {value}}) => {
        this.setState({textareaText: value});
    }

    onTextAreaKeyDown = ({keyCode}) => {
        if (keyCode === ENTER_KEY_CODE) {
            this.onApply();
        }
    }

    onApply = () => {
        const {textareaText} = this.state;

        if (textareaText.trim()) {
            this.setState(({messages}) => ({
                messages: [...messages, getMessage(messages, textareaText)],
                textareaText: '',
            }))
            this.onMessageReply();
        }
    }

    onMessageReply = () => {
        setTimeout(() => (
            this.setState(({messages}) => {
                const newMessage = getMessage(messages, getRandomMessage().text, false);

                return {messages: [...messages, newMessage]};
            })
        ), 1000);
    }

    deleteMessage = id => {
        const {messages} = this.state;
        const newMessages = messages.filter(message => message.id !== id);

        this.setState({messages: newMessages});
    }

    render() {
        const {textareaText, messages} = this.state;

        return (
            <div className="body">
                <div className="body__messages">
                    {messages.map(message => (
                        <Message key={message.id} message={message} deleteMessage={this.deleteMessage}/>
                    ))}
                </div>
                <div className="body__action-buttons">
                    <div className="body__section">
                        <textarea
                            className="body__textarea"
                            onChange={this.onTextAreaChange}
                            onKeyDown={this.onTextAreaKeyDown}
                            value={textareaText}
                        />
                    </div>
                    <div className="body__section">
                        <button className="body__button" onClick={this.onApply}>Send message</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;
