import React from "react"
import { Helmet } from "react-helmet"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "./styles.scss"
import { withPrefix } from "gatsby"

const TemplateWrapper = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Apartment Waltraud</title>
        <meta name="description" content="Apartment Waltraud in Ramsau" />
        <meta name="theme-color" content="#fff" />
        <meta property="og:title" content="Apartment Waltraud" />
        <meta property="og:url" content="/" />
      </Helmet>
      <Navbar />
      <div className="main">{children}</div>
      <Footer />
    </>
  )
}

export default TemplateWrapper
