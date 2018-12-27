import React, { Component } from "react";
import classNames from "classnames";

import Card from "./components/Card";
import CardHeader from "./components/CardHeader";
import Search from "./components/Search";
import Button from "./components/Button";
import Modal from "./components/Modal";

import EditIcon from "./static/icons/edit-2-outline.svg";
// import AddIcon from "./static/icons/person-add-outline.svg";

import "./App.scss";
import contacts from "./mocks/MOCK_DATA.json";

class App extends Component {
  state = {
    contacts: contacts,
    addContactModal: false,
    searchInput: ""
  };

  handleAddContact = () => {
    this.setState({ addContactModal: true });
  };

  handleCloseAddContact = () => {
    this.setState({ addContactModal: false });
  };

  handleSearch = ({ target }) => {
    const contactsFiltered = contacts.filter(contact => {
      return contact.first_name.indexOf(target.value) > -1;
    });

    this.setState({ searchInput: target.value, contacts: contactsFiltered });
  };

  render() {
    const { contacts, searchInput, addContactModal } = this.state;
    return (
      <div className="container">
        <div className="grid">
          <div className="main">
            <Card>
              <div style={{ padding: "12px 18px 0 18px" }}>
                <CardHeader handleAddContact={this.handleAddContact} />
                <Search
                  handleSearch={this.handleSearch}
                  searchInput={searchInput}
                />
              </div>
              <ul className="list-reset card__list">
                {contacts.map(
                  ({ first_name, last_name, company, is_active }, i) => {
                    return (
                      <li className="card__element" key={first_name + i}>
                        <span className="card__left-row">
                          <span
                            className={classNames("card__dot", {
                              "card__dot-active": is_active
                            })}
                          />
                          {first_name} {last_name}
                        </span>{" "}
                        <span className="card__right-row">
                          {company}
                          <img
                            className="card__right-row-icon"
                            src={EditIcon}
                            alt="Edit Icon"
                            height="16"
                          />
                        </span>
                      </li>
                    );
                  }
                )}
              </ul>

              <div className="column-footer">
                <Button label="Button" />
              </div>
            </Card>

            <Modal
              addContactModal={addContactModal}
              handleCloseAddContact={this.handleCloseAddContact}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
