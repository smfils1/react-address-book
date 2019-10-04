import React, { Component } from 'react'
import ContactList from '../ContactList/ContactList'
import Container from "react-bootstrap/Container";
import SearchBox from '../SearchBox/SearchBox'



class AddressBook extends Component {
    state = {
        contacts: [
            {
                FirstName: "Cathy" ,
                LastName: "Pierce",
                Birthday: "9/14/1996",
                Telephone: "200-910-8132"
            },
            {
                FirstName: "Alfonso",
                LastName: "Cooley",
                Birthday: "8/10/1973",
                Telephone: "200-657-9362"
            },
            {
                FirstName: "Victor",
                LastName: "Gordon",
                Birthday:  "8/3/1970",
                Telephone: "200-661-9407"
            },
            {
                FirstName: "Colleen",
                LastName: "Wright",
                Birthday: "10/28/1967",
                Telephone: "200-250-7949"
            },
            {
                FirstName: "James",
                LastName: "Johnston",
                Birthday: "5/11/1972",
                Telephone: "200-645-3176"
            },
            {
                FirstName: "Anna",
                LastName: "Reyes",
                Birthday: "9/10/1975",
                Telephone: "200-707-8670"
            }
        ]
    }

    render() {
        return (
            <Container>
                <SearchBox width="25rem" className="mx-auto my-5"/>

                <div className="d-flex flex-wrap  justify-content-around">
                    <ContactList contacts={this.state.contacts}/>
                </div>
            </Container>
            
        )
    }
}

export default AddressBook
