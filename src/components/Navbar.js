import React from "react"
import { Link } from "gatsby"

export default () => (
  <header>
    <nav className="navbar">
      <Link to="/">
        <img style={{ width: 50, height: 50, border: "solid 2px white", borderRadius: "50%" }} src="/images/apartment-waltraud-logo.svg"></img>
      </Link>

      <div className="navbar-links">
        <Link to="/">
          Home
        </Link>
        <Link to="/privacy-policy">
          Privacy Policy
        </Link>
      </div>
    </nav>
  </header>
)
