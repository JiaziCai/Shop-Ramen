import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Cart from "../components/Cart"

const CartPage = ({ data }) => (
  <Layout>
    <SEO title="cart" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Shopping Cart"
      styleClass="about-background"
    />
    <Cart />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "cart.jpeg" }) {
      childImageSharp {
        fluid {
          tracedSVG
          src
        }
      }
    }
  }
`

export default CartPage
