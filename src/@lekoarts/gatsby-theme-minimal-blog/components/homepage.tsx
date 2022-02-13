import * as React from 'react'
import OriginalHomePage from '@lekoarts/gatsby-theme-minimal-blog/src/components/homepage'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query {
    allPost(sort: { fields: date, order: DESC }, limit: 6) {
      nodes {
        slug
        title
        date(formatString: "DD.MM.YYYY")
        timeToRead
        description
        tags {
          name
          slug
        }
        banner {
          childImageSharp {
            resize(width: 300, height: 200, quality: 90) {
              src
              width
              height
            }
          }
        }
      }
    }
  }
`

const Homepage = (props: React.ComponentProps<typeof OriginalHomePage>) => {
  const data = useStaticQuery(query)
  return (
    <OriginalHomePage {...props} data={data} posts={data.allPost.nodes} />
  )
}

export default Homepage
