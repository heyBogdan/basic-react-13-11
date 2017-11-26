import React, { Component } from 'react';
import ValidatedInput from "./ValidatedInput.jsx";
import ValidatedTextArea from "./ValidatedTextArea.jsx";
import "../css/index.css";

export default class CommentForm extends Component {
    render() {
        return (
            <div>
                <div>
                    <p>UserName:</p>
                    <ValidatedInput minLength={10} maxLength={100}/>
                </div>
                <div>
                    <p>Text:</p>
                    <ValidatedTextArea minLength={20} maxLength={100} rows={10}/>
                </div>
            </div>
        );
    }
}
