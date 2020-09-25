import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { Component } from "react";

import TextInputGroup from "../layout/TextInputGroup";
import { addContact } from "../../actions/contactAction";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone_number: "",
    errors: {},
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone_number } = this.state;

    // Check For Errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (phone_number === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    const newContact = {
      name: name,
      email: email,
      phone_number: phone_number,
    };

    //// SUBMIT CONTACT ////
    this.props.addContact(newContact);

    // Clear State
    this.setState({
      name: "",
      email: "",
      phone_number: "",
      errors: {},
    });

    this.props.history.push("/");
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone_number, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Email"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={this.onChange}
              error={errors.email}
            />
            <TextInputGroup
              label="Phone"
              name="phone_number"
              placeholder="Enter Phone"
              value={phone_number}
              onChange={this.onChange}
              error={errors.phone}
            />
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

AddContact.prototypes = {
  addContact: PropTypes.func.isRequired,
};

export default connect(null, { addContact })(AddContact);
