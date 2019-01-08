import React from 'react'
import { InputGroup, InputGroupAddon, Input, Button, FormFeedback, Form } from 'reactstrap';
import s from './quizselect.module.css'

const ToolBar = ({message, setSearchPhrase, StartSearch, SortByName, SortByDate}) => (
    <div className={s.tool_bar}>
        <Form onSubmit={StartSearch}>
        <InputGroup >
            <Input className={s.search} placeholder="Find quiz" onChange={setSearchPhrase} invalid={!!message} />
            <InputGroupAddon addonType="append">
                <Button type="submit">Search</Button>
            </InputGroupAddon>
            <FormFeedback>{message}</FormFeedback>
        </InputGroup>
        </Form>
        <div className={s.sort}>
            Sort by:
            <a onClick={SortByName}>Name</a>
            <a onClick={SortByDate}>Date</a>
        </div>
    </div>
);

export default ToolBar