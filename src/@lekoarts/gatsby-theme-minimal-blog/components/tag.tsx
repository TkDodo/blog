import * as React from 'react'
import OriginalTag from '@lekoarts/gatsby-theme-minimal-blog/src/components/tag'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query {
    allPost(sort: { fields: date, order: DESC }) {
      nodes {
        slug
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

const Homepage = (props: React.ComponentProps<typeof OriginalTag>) => {
  const data = useStaticQuery(query)

  const newPosts = props.posts.map((post) => ({
    ...post,
    banner: data.allPost.nodes.find((node) => node.slug === post.slug)
      ?.banner,
  }))

  return <OriginalTag {...props} posts={newPosts} />
}

export default Homepage
