import React, {Component} from "react";


export default (OriginalComponent) => class DecoratedComponent extends Component {
    state = {
        openArticleId: null
    }

    toggleOpenArticle = openArticleId => {
        console.log('---', this.state.openArticleId, openArticleId)
        this.state.openArticleId === openArticleId ? 
            this.setState({ openArticleId: null }):
            this.setState({ openArticleId })
    } 
    render() {
        return (
            <OriginalComponent {...this.props} {...this.state} toggleOpenArticle={this.toggleOpenArticle} />
        );
    }
}