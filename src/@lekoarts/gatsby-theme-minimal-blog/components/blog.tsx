import * as React from 'react'
import OriginalBlog from '@lekoarts/gatsby-theme-minimal-blog/src/components/blog'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query {
    allPost(sort: { fields: date, order: DESC }) {
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

const Homepage = (props: React.ComponentProps<typeof OriginalBlog>) => {
  const data = useStaticQuery(query)
  return <OriginalBlog {...props} posts={data.allPost.nodes} />
}

export default Homepage
