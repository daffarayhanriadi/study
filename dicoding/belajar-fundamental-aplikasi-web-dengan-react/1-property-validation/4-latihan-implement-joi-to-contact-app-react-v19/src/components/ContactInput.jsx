import React from "react";
import Joi from "joi";
import { validateProps } from "../utils/validation";

const contactInputPropsSchema = Joi.object({
  addContact: Joi.func().required(),
});

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    const validatedProps = validateProps(contactInputPropsSchema, props, "ContactInput");

    this.state = {
      name: "",
      tag: "",
      validatedProps,
    };

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState({
      name: event.target.value
    });
  }

  onTagChangeEventHandler(event) {
    this.setState({
      tag: event.target.value
    })
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    // this.props.addContact(this.state);
    const { addContact } = this.state.validatedProps;
    addContact(this.state);

    // reset form input (hanya tambahan fitur saja dari saya)
    this.setState({
      name: "",
      tag: "",
    });
  }

  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
        <input type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChangeEventHandler} />
        <input type="text" placeholder="Tag" value={this.state.tag} onChange={this.onTagChangeEventHandler} />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default ContactInput;
