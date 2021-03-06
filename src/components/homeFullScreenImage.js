import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  //   const data = useStaticQuery(graphql`
  //     query {
  //       placeholderImage: file(
  //         relativePath: { eq: "The Open_web-home page.jpg" }
  //       ) {
  //         childImageSharp {
  //           fluid {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   `)

  const data = useStaticQuery(graphql`
    query Images {
      placeholderImage: file(
        relativePath: { eq: "The Open_web-home page.jpg" }
      ) {
        id
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <div className="image-main-wrapper" >
      <Img className="image-main" fadeIn={false} fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
  )
}

export default Image;
