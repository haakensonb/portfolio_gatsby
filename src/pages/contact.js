import React from "react"
import ContactForm from "../components/contactForm"
import Navbar from "../components/navbar"

const ContactPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="section">
        <h1 className="title has-text-centered">Contact</h1>
        <ContactForm></ContactForm>
      </div>
    </div>

  );
}

export default ContactPage