import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Contact from "../components/sections/contact"
import Footer from "../components/sections/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
