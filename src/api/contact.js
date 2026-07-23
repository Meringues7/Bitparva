import { CONTACT_API_ENDPOINT } from '../data/content.js'

/**
 * Submits the contact form.
 *
 * FOR THE BACKEND DEVELOPER:
 * This currently POSTs JSON to CONTACT_API_ENDPOINT (see src/data/content.js).
 * Point that constant at whatever you build — a serverless function
 * (e.g. Vercel/Netlify `/api/contact`), a small Express route, or a
 * third-party form service (Formspree, Web3Forms, etc).
 *
 * Expected request body:
 *   { name: string, email: string, message: string }
 *
 * Expected response:
 *   - 2xx on success (body is ignored by the frontend)
 *   - non-2xx on failure — the frontend shows a generic error message
 *
 * If you use a service with a different response shape, adjust
 * `submitContactForm` below rather than the Contact page component.
 */
export async function submitContactForm({ name, email, message }) {
  const response = await fetch(CONTACT_API_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
  })

  if (!response.ok) {
    throw new Error('Failed to submit contact form')
  }

  return response
}
