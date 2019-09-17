import React from "react"
import { Helmet } from "react-helmet"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "./styles.scss"

const Layout = ({ children }) => {
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
      <main className="main">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
