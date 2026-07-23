import { useState } from 'react'
import { footer } from '../data/content.js'
import { submitContactForm } from '../api/contact.js'
import './Contact.css'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  // status is one of: 'idle' | 'submitting' | 'success' | 'error'
  const [status, setStatus] = useState('idle')

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('submitting')
    try {
      await submitContactForm(form)
      setStatus('success')
      setForm(initialForm)
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section className="block contact">
      <div className="wrap contact-grid">
        <div>
          <p className="eyebrow">GET IN TOUCH</p>
          <h1>Have a project in mind?</h1>
          <p className="contact-intro">
            Tell us a bit about what you're building — we'll get back to you within a couple of
            business days.
          </p>
          <div className="contact-details">
            <div>
              <span className="contact-label">Email</span>
              <span>{footer.email}</span>
            </div>
            <div>
              <span className="contact-label">Location</span>
              <span>{footer.location}</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              disabled={status === 'submitting'}
            />
          </label>

          <label className="field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              disabled={status === 'submitting'}
            />
          </label>

          <label className="field">
            <span>Message</span>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              disabled={status === 'submitting'}
            />
          </label>

          <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'success' && (
            <p className="form-status form-status-success">
              Thanks — your message has been sent. We'll be in touch soon.
            </p>
          )}
          {status === 'error' && (
            <p className="form-status form-status-error">
              Something went wrong sending this. (Note: this form isn't connected to a real
              backend yet — see src/api/contact.js.)
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
