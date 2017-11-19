import React, {Component} from 'react'
import Comment from "./Comment.jsx" 
import CommentsList from "./CommentsList.jsx"

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isArticleOpen: props.defaultOpen,
            isCommentsOpen: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isArticleOpen: nextProps.defaultOpen
        })
    }
    render() {
        const {article} = this.props
        const body = this.state.isArticleOpen && <section>{article.text}</section>
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={this.handleArticleClick}>
                        {this.state.isArticleOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
                <h4>
                    <a 
                        style={{textDecoration: "underline", cursor: "pointer"}} 
                        onClick={this.handleCommentsClick}>{this.state.isCommentsOpen ? 'close comments' : 'open comments'}
                    </a>
                </h4>
                {this.state.isCommentsOpen && <ul><CommentsList comments={article.comments} /></ul>}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

    handleArticleClick = () => {
        this.setState({
            isArticleOpen: !this.state.isArticleOpen
        })
    }
    handleCommentsClick = () => {
        this.setState({
            isCommentsOpen: !this.state.isCommentsOpen
        })
    }
}


export default Article