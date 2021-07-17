import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Services from "../components/sections/services"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"
import Clients from "../components/sections/clients"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
    <Services />
    <Clients />
    <GetStarted />
    <Footer />
  </Layout>
)

export default IndexPage
