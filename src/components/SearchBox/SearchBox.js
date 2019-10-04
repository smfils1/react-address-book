import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const SearchBox = ({ width, className, searchChangeHandler }) => {
    return (
        <InputGroup style={{ width }} className={className}>
            <FormControl
                placeholder="Name, Phone, or Birthdate"
                aria-label="search"
                aria-describedby="basic-addon2"
                onChange={searchChangeHandler}
            />
            <InputGroup.Append>
                <InputGroup.Text
                    id="basic-addon2"
                    className="bg-primary text-white"
                >
                    Search
                </InputGroup.Text>
            </InputGroup.Append>
        </InputGroup>
    );
};

export default SearchBox;
