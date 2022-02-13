/** @jsx jsx */
import * as React from 'react'
import OriginalListing from '@lekoarts/gatsby-theme-minimal-blog/src/components/listing'
import OriginalBlogListLitem from '@lekoarts/gatsby-theme-minimal-blog/src/components/blog-list-item'
import { Link, withPrefix } from 'gatsby'

import { Image, Card, Grid } from '@theme-ui/components'
import { jsx } from 'theme-ui'

const Listing = (props: React.ComponentProps<typeof OriginalListing>) => {
  if (props.showTags !== false) {
    return <OriginalListing {...props} />
  }

  return (
    <section sx={{ mb: [5, 6, 7] }} className={props.className}>
      <Grid
        gap={4}
        columns={[1, 2, null, 3]}
        sx={{
          justifyItems: ['center', null, null, 'stretch'],
        }}
      >
        {props.posts.map((post) => (
          <CardListItem key={post.slug} post={post} />
        ))}
      </Grid>
    </section>
  )
}

export default Listing

type BannerProps = {
  post: React.ComponentProps<typeof OriginalBlogListLitem>['post'] & {
    banner?: {
      childImageSharp: {
        resize: {
          src: string
          width: number
          height: number
        }
      }
    }
  }
}

const CardListItem = ({
  post,
}: Omit<React.ComponentProps<typeof OriginalBlogListLitem>, 'post'> &
  BannerProps) => {
  const image = post.banner?.childImageSharp.resize

  return (
    <Link
      data-sal="zoom-in"
      data-sal-easing="ease"
      data-sal-delay="100"
      data-sal-duration="400"
      to={post.slug}
      sx={(t) => ({
        ...t.styles?.a,
        fontSize: [1, 2, 3],
        color: `text`,
        '@media (prefers-reduced-motion: reduce)': {
          transform: 'none',
        },
        '&:hover, &:active, &:focus': {
          textDecoration: 'none',
        },
      })}
    >
      <Card
        sx={(t) => ({
          height: '100%',
          borderRadius: '8px',
          border: `2px solid ${t.colors.background}`,
          padding: '8px',
          '&:hover, &:active, &:focus': {
            border: `2px solid ${t.colors.primary}`,
          },
          '@media (prefers-reduced-motion: no-preference)': {
            transition:
              'border 150ms ease-in, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),box-shadow 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
            '&:hover': {
              transform: 'translate3d(0, -8px, 0)',
            },
          },
        })}
      >
        {image && (
          <Image
            sx={{ borderRadius: '8px' }}
            src={`${withPrefix(image.src)}`}
            width={image.width}
            height={image.height}
            alt={post.title}
          />
        )}
        <p
          sx={{
            mt: 1,
            mb: 1,
            color: `secondary`,
            fontSize: [1, 1, 2],
          }}
        >
          <time>{post.date}</time>,{' '}
          {post.timeToRead && <>{post.timeToRead} min read</>}
        </p>
        <p sx={{ mt: 2, fontWeight: 'bold' }}>{post.title}</p>
      </Card>
    </Link>
  )
}
