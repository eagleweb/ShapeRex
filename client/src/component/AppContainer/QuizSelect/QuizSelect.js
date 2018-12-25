import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllQuizzes, searchQuiz } from '../../../actions/quizActions'
import isEmpty from '../../../validation/is-empty';
import ToolBar from './ToolBarView'
import CardView from './CardView'
import { Button } from 'reactstrap';

class QuizSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sorted: true,
            search_phrase: null,
            message: null
        };
        this.setSearchPhrase = this.setSearchPhrase.bind(this);
        this.SortByName = this.SortByName.bind(this);
        this.SortByDate = this.SortByDate.bind(this);
        this.StartSearch = this.StartSearch.bind(this);
        this.renderQuizSelect = this.renderQuizSelect.bind(this);
        this.BackToQuiz = this.BackToQuiz.bind(this);
    }

    componentDidMount() {
        this.props.getAllQuizzes();
    }

    SortByName () {
        const data = this.props.quizzes_list;
        const isSorted = this.sorted;
        let direction = isSorted ? 1 : -1;

        const sorted = data.sort((a, b) => {
            if (a.quiz_name.toLowerCase() === b.quiz_name.toLowerCase()) { return 0 }
            return a.quiz_name.toLowerCase() > b.quiz_name.toLowerCase() ? direction : direction * -1;
        });

        this.sorted = !isSorted;

        this.setState({quizzes_list: sorted});
    }

    SortByDate () {
        const data = this.props.quizzes_list;
        const isSorted = this.sorted;
        let direction = isSorted ? 1 : -1;

        const sorted = data.sort((a, b) => {
            if (a.added === b.added) { return 0 }
            return a.added > b.added ? direction : direction * -1;
        });

        this.sorted = !isSorted;

        this.setState({quizzes_list: sorted});
    }

    setSearchPhrase (event) {
        this.setState({search_phrase: event.target.value});
    }

    StartSearch (event) {
        event.preventDefault();
        if (isEmpty(this.state.search_phrase)) {
            this.setState({message: 'Enter your search request'})
        } else {
            this.setState({message: null});
            this.props.searchQuiz(this.state.search_phrase);
            this.setState({search_phrase: null});
        }
    }

    BackToQuiz () {
        this.setState({message: null});
        this.setState({search_phrase: null});
        this.props.getAllQuizzes();
    }

    renderQuizSelect () {
        if (this.props.isLoading) {
            return <div>Loading...</div>
        }
        if (this.props.quizzes_list.length === 0) {
            return (
                <React.Fragment>
                    <ToolBar
                        message={this.state.message}
                        setSearchPhrase={this.setSearchPhrase}
                        StartSearch={this.StartSearch}
                        SortByName={this.SortByName}
                        SortByDate={this.SortByDate}
                    />
                    <div>Nothing find. Sorry!</div>
                    <Button onClick={this.BackToQuiz}>Back to quiz page</Button>
                </React.Fragment>
            )
        }
        return (
            <React.Fragment>
                <ToolBar
                    message={this.state.message}
                    setSearchPhrase={this.setSearchPhrase}
                    StartSearch={this.StartSearch}
                    SortByName={this.SortByName}
                    SortByDate={this.SortByDate}
                />
                {this.props.search_result ? <Button onClick={this.BackToQuiz}>Back to quiz page</Button> : null}
                <CardView quizzes_list={this.props.quizzes_list} history={this.props.history}/>
            </React.Fragment>
        )
    }

    render(){
        return (
            <React.Fragment>
                {this.renderQuizSelect()}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        quizzes_list: state.quizzes.quizzes_list,
        isLoading: state.quizzes.isLoading,
        search_result: state.quizzes.search_result
    }
};

const mapDispatchToProps = {
    getAllQuizzes: getAllQuizzes,
    searchQuiz: searchQuiz
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizSelect)