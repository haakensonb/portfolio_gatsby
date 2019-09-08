import React from "react"

const ContactForm = () => {
  return (
    <form name="contact" method="POST" data-netlify="true">
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Your name"></input>
        </div>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input className="input" type="email" placeholder="Your email"></input>
        </div>
      </div>

      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea className="textarea" placeholder="Your message"></textarea>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <button type="submit" className="button is-link">Submit</button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm