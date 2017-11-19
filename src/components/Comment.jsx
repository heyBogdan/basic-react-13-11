import React, {Component} from 'react'

const Comment = (props) => {
    return (
        <li>
            <p><b>{props.comment.user}</b></p>
            <p>{props.comment.text}</p>
        </li>
    )
}

export default Comment;