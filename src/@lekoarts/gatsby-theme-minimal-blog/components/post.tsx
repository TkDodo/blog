import * as React from 'react'
import OriginalPost from '@lekoarts/gatsby-theme-minimal-blog/src/components/post'

const Post = (props: React.ComponentProps<typeof OriginalPost>) => {
  const newProps = {
    ...props,
    data: {
      ...props.data,
      post: {
        ...props.data.post,
        banner: {
          childImageSharp: {
            resize: {
              src: `/og-images${props.data.post.slug}.png`,
            },
          },
        },
      },
    },
  }

  return <OriginalPost {...newProps} />
}

export default Post
