import React from 'react';
import {Form, FormGroup, Input, Button} from 'reactstrap';

const Search = (props) => {

    const onKeyDown = (event) => {
        if(event.key === "Enter") {
            event.preventDefault();
            props.onSubmit();
        }
    }
    return (
        <Form >
            <FormGroup>
                <Input type="text" placeholder="Enter your keyword to search for images" id="keyword" name="keyword" onChange={props.onUserInput} 
                onKeyDown={onKeyDown}></Input>
            </FormGroup>
            <Button color="info" onClick={props.onSubmit} block>Splash!</Button>
        </Form>
    )
};

export default Search;