import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <section className="block not-found">
      <div className="wrap">
        <p className="eyebrow">404 · OFF THE TRAIL</p>
        <h1>This path doesn't lead anywhere</h1>
        <p>The page you're looking for doesn't exist, or may have moved.</p>
        <Link className="btn btn-primary" to="/">
          Back to home
        </Link>
      </div>
    </section>
  )
}
