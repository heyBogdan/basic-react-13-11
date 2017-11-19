import React, {Component} from 'react'
import Comment from "./Comment.jsx"

export default class CommentsList extends Component {
    render() {
        const comments = this.props.comments ? 
            this.props.comments.map((comment) => 
                <Comment comment={comment} key={comment.id} />
            ): 
            <li>no comments yet</li>;
        return comments;
    }
}
