import React from "react"
import { Form } from "./ContactForm.styles"

const ContactForm = () => (
  <Form
    name="Contact Form"
    method="POST"
    data-netlify="true"
    data-netlify-recaptcha="true"
  >
    <input type="hidden" name="form-name" value="Contact Form" />
    <div>
      <input type="text" name="name" id="name" placeholder=" " />
      <label labelFor="name">Name</label>
    </div>
    <div>
      <input type="email" name="email" id="email" placeholder=" " />
      <label labelFor="email">Email</label>
    </div>
    <div>
      <textarea name="message" id="message" placeholder=" " />
      <label labelFor="message">Message</label>
    </div>
    <button type="submit">Send</button>
  </Form>
)

export default ContactForm
