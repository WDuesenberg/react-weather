import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const SearchBar = props => {

    return (
    <Form inline>
	<FormGroup>
		    <Label for="searchTerm" hidden>Search by Location</Label>
            <Input 
                type="text"
                name="searchTerm" 
                id="searchTerm" 
                placeholder="City, State" 
                value={props.searchTerm}
                onChange={props.handleInputChange}
            />
	    </FormGroup>
	    <Button onClick={props.handleFormSubmit}>Search</Button>
    </Form>
    )
}

export default SearchBar;