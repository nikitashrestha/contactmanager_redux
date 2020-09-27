import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import { connect } from "react-redux";
import { updContact, getCont } from "../../actions/contactAction";
import PropTypes from "prop-types";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone_number: "",
    errors: {},
  };

  componentWillReceiveProps(nextProps, nextState) {
    const { name, email, phone_number } = nextProps.contact;
    this.setState({
      name,
      email,
      phone_number,
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getCont(id);
  }

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
    const { id } = this.props.match.params;

    const updateContact = {
      id:id,
      name: name,
      email: email,
      phone_number: phone_number,
    };

    //// UPDATE CONTACT ////
    this.props.updContact(updateContact);
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
        <div className="card-header">Edit Contact</div>
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
              value="Update Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contact: state.contact.contact,
});

export default connect(mapStateToProps, { getCont, updContact })(EditContact);

EditContact.PropTypes = {
  contact: PropTypes.object.isRequired,
  getCont: PropTypes.func.isRequired,
};
