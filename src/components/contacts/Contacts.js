import React, { Component } from "react";
import Contact from "./Contact";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getContact } from "../../actions/contactAction";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContact();
  }
  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}
const mapStatToprops = state => ({
  contacts: state.contact.contacts
});

export default connect(
  mapStatToprops,
  { getContact }
)(Contacts);

Contacts.PropTypes = {
  contact: PropTypes.array.isRequired,
  getContact: PropTypes.func.isRequired
};
