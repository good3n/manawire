import React from 'react'
import { Form } from './ContactForm.styles'

const ContactForm = () => (
  <Form
    data-netlify="true"
    method="POST"
    name="Contact Form"
    netlify-honeypot="bot-field"
  >
    <input name="form-name" type="hidden" value="Contact Form" />
    <input name="bot-field" type="hidden" />
    <div>
      <input id="name" name="name" placeholder=" " type="text" required />
      <label labelFor="name">Name</label>
    </div>
    <div>
      <input id="email" name="email" placeholder=" " type="email" required />
      <label labelFor="email">Email</label>
    </div>
    <div>
      <textarea id="message" name="message" placeholder=" " required />
      <label labelFor="message">Message</label>
    </div>
    <button type="submit">Send</button>
  </Form>
)

export default ContactForm
