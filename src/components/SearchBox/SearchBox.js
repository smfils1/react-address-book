import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const SearchBox = ({width,className}) => {
    return (
        <InputGroup style={{width}} className={className} >
            <FormControl
            placeholder="Name"
            aria-label="Name"
            aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
                <InputGroup.Text id="basic-addon2" className="bg-primary text-white">Search</InputGroup.Text>
            </InputGroup.Append>
        </InputGroup>
    )
}

export default SearchBox
