import React from "react";
import ContactList from "./ContactList";
import { getData } from "../utils/data";

// NOTE: Pemilik data
// ContactApp Component
function ContactApp() {
  const contacts = getData();

  return (
    <div className="contact-app">
      <h1>Daftar Kontak</h1>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default ContactApp;
