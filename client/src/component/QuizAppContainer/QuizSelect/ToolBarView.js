import React from 'react'
import { InputGroup, InputGroupAddon, Input, Button, FormFeedback, Form } from 'reactstrap';
import s from './quizselect.module.css'

const ToolBar = ({message, setSearchPhrase, StartSearch, SortByName, SortByDate}) => (
    <div className={s.tool_bar}>
        <Form onSubmit={StartSearch}>
        <InputGroup>
            <Input placeholder="Find quiz" onChange={setSearchPhrase} invalid={!!message} />
            <InputGroupAddon addonType="append">
                <Button type="submit" color="success">Search</Button>
            </InputGroupAddon>
            <FormFeedback>{message}</FormFeedback>
        </InputGroup>
        </Form>
        <button onClick={SortByName}>
            Sort
        </button>
        <button onClick={SortByDate}>
            Date
        </button>
    </div>
);

export default ToolBar