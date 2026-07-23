import { Link } from 'react-router-dom'
import { navLinks, footer } from '../data/content.js'
import './Footer.css'

function MountainLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M2 19L9 7L13 14L16 9L22 19H2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Link to="/" className="logo">
              <MountainLogo />
              Bitprava
            </Link>
            <p className="footer-tagline">{footer.tagline}</p>
          </div>

          <nav className="footer-links">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="footer-contact">
            {footer.email}
            <br />
            {footer.location}
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {footer.year} BITPRAVA</span>
          <span>{footer.elevation}</span>
        </div>
      </div>
    </footer>
  )
}
