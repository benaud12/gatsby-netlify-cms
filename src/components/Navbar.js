import React from "react"
import { Link } from "gatsby"

export default ({ title }) => (
  <header>
    <div className="navbar">
      <Link to="/">
        <img
          style={{ width: 50, height: 50, border: "solid 2px white", borderRadius: "50%", marginRight: 5 }}
          src="/images/apartment-waltraud-logo.svg"
        />
      </Link>
      <h1>{title}</h1>
    </div>
  </header>
)
