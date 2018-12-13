import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllQuizzes, searchQuiz } from '../../../actions/quizActions'
import s from './quizselect.module.css'
import { InputGroup, InputGroupAddon, Input, Card, Button, CardImg, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';

class QuizSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sorted: true,
            search_phrase: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.SortByName = this.SortByName.bind(this);
        this.SortByDate = this.SortByDate.bind(this);
        this.StartSearch = this.StartSearch.bind(this);
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

    handleChange(event) {
        this.setState({search_phrase: event.target.value});
    }

    StartSearch () {
        this.props.searchQuiz(this.state.search_phrase)
    }

    render(){
        const quizzes_list = this.props.quizzes_list;

        return (
            <div>
                <div className={s.tool_bar}>
                    <InputGroup>
                        <Input placeholder="Enter your search" onChange={this.handleChange} />
                        <InputGroupAddon addonType="append">
                            <Button onClick={this.StartSearch} color="success">Search</Button>
                        </InputGroupAddon>
                    </InputGroup>
                    <button onClick={this.SortByName}>
                        Sort
                    </button>
                    <button onClick={this.SortByDate}>
                        Date
                    </button>
                </div>
                <CardGroup>
                    {quizzes_list.map((item) =>
                    <Card key={item._id} className={s.card_item}>
                        <CardImg top src="" alt="" />
                        <CardBody>
                            <CardTitle>{item.quiz_name}</CardTitle>
                            <CardText>{item.quiz_description}</CardText>
                            <Link to={`quiz/${item._id}`}><Button>Start</Button></Link>
                        </CardBody>
                    </Card>
                    )}
                </CardGroup>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        quizzes_list: state.quizzes.quizzes_list
    }
};

const mapDispatchToProps = {
    getAllQuizzes: getAllQuizzes,
    searchQuiz: searchQuiz
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizSelect)