import React, {Component} from 'react';
import Article from './Article';
import PropTypes from 'prop-types';
import makeAccordeon from '../decorators/makeAccordeon';

class ArticleList extends Component {
    render() {
        console.log(this.props);
        const articleElements = this.props.articles.map((article, index) => <li key = {article.id}>
            <Article article = {article}
                     isOpen = {this.props.openArticleId === article.id}
                     toggleOpen = {this.props.toggleOpenArticle}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
/*

    toggleOpenArticleWitoutCurr(openArticleId) {
        this.setState({ openArticleId })
    }
*/

}

export default makeAccordeon(ArticleList);