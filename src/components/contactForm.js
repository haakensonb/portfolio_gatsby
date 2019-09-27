import React from "react"

const ContactForm = () => {
  return (
    <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" action="/success">
      <p className="hidden">
        <label>Don't fill this out if you are human: <input  type="hidden" name="bot-field" /></label>
      </p>

      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input name="name" className="input" type="text" placeholder="Your name"></input>
        </div>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input name="email" className="input" type="email" placeholder="Your email"></input>
        </div>
      </div>

      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea name="message" className="textarea" placeholder="Your message"></textarea>
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