import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContactPage from "../AddContactPage/AddContactPage";
import ContactsPage from "../ContactsPage/ContactsPage";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../NavBar/NavBar";

class App extends Component {
    state = {
        submitNewData: false,
        newFirstName: "",
        newLastName: "",
        newPhone: "",
        newBirthDate: "",
        search: "",
        contacts: [
            {
                FirstName: "Cathy",
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
                Birthday: "8/3/1970",
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
    };


    getUniqueId = ({ FirstName, LastName, Birthday, Telephone }) => {
        return `${FirstName}${LastName}${Telephone}${Birthday}`;
    };

    filteredContacts = () => {
        const { search, contacts } = this.state;
        const test = (search, infoObject) => {
            return Object.values(infoObject).some(value =>
                value
                    .trim()
                    .toLowerCase()
                    .includes(search.trim().toLowerCase())
            );
        };
        return contacts.filter(contact => test(search, contact));
    };

    deleteHandler = event => {
        const deleteBool = window.confirm(
            "Are you sure you want to delete contact?"
        );

        if (deleteBool) {
            const id = event.currentTarget.value;
            this.setState(prevState => {
                let contacts = [...prevState.contacts];
                for (let i = 0; i < contacts.length; i++) {
                    if (id === this.getUniqueId(contacts[i])) {
                        contacts.splice(i, 1);
                        break;
                    }
                }
                return { contacts };
            });
        }
    };

    submitHandler = event => {
        const submitNewData = window.confirm(
            "Are you sure you want to add new contact?"
        );
        if (!submitNewData) {
            event.preventDefault();
            this.setState({ submitNewData });
        } else {
            this.setState(prevState => {
                const newContact = {
                    FirstName: prevState.newFirstName,
                    LastName: prevState.newLastName,
                    Telephone: prevState.newPhone,
                    Birthday: prevState.newBirthDate
                };
                const contacts = [...prevState.contacts];
                contacts.push(newContact);
                return { submitNewData, contacts: [...contacts] };
            });
        }
    };

    inputChangeHandler = (event, stateToChange) => {
        const input = event.target.value;
        const update = {};
        update[stateToChange] = input;
        this.setState(update);
    };

    searchChangeHandler = event => {
        this.inputChangeHandler(event, "search");
    };

    fnameChangeHandler = event => {
        this.inputChangeHandler(event, "newFirstName");
    };

    lnameChangeHandler = event => {
        this.inputChangeHandler(event, "newLastName");
    };

    phoneChangeHandler = event => {
        this.inputChangeHandler(event, "newPhone");
    };

    birthDateChangeHandler = event => {
        this.inputChangeHandler(event, "newBirthDate");
    };

    render() {
        return (
            <>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={routeProps => (
                                <ContactsPage
                                    {...routeProps}
                                    contacts={this.filteredContacts()}
                                    searchChangeHandler={
                                        this.searchChangeHandler
                                    }
                                    deleteHandler={this.deleteHandler}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/add-contact"
                            render={routeProps => (
                                <AddContactPage
                                    {...routeProps}
                                    submitHandler={this.submitHandler}
                                    fnameChangeHandler={this.fnameChangeHandler}
                                    lnameChangeHandler={this.lnameChangeHandler}
                                    phoneChangeHandler={this.phoneChangeHandler}
                                    birthDateChangeHandler={
                                        this.birthDateChangeHandler
                                    }
                                />
                            )}
                        />
                        <Route render={ContactsPage} />
                    </Switch>
                </Router>
            </>
        );
    }
}

export default App;
