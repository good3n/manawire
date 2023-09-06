import React from 'react'
import PropTypes from 'prop-types'
// import { useStaticQuery, graphql } from 'gatsby'
import { Header } from './Header'
import { Footer } from './Footer'
import '../assets/styles/normalize.css'
import '../assets/styles/global.css'

const Layout = ({children}) => {

  return (
    <>
      <Header
        // siteTitle={data.site.siteMetadata.title}
      />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
