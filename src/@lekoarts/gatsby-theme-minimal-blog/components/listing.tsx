/** @jsx jsx */
import ItemTags from '@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags'
import * as React from 'react'
import OriginalListing from '@lekoarts/gatsby-theme-minimal-blog/src/components/listing'
import OriginalBlogListLitem from '@lekoarts/gatsby-theme-minimal-blog/src/components/blog-list-item'
import { Link, withPrefix } from 'gatsby'

import { Image, Card, Grid } from '@theme-ui/components'
import { jsx } from 'theme-ui'

import { Del } from '../../../components/Del'

const Listing = (
  props: React.ComponentProps<typeof OriginalListing>
) => {
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
          <CardListItem
            key={post.slug}
            post={post}
            showTags={props.showTags}
          />
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
  showTags = true,
  post,
}: Omit<React.ComponentProps<typeof OriginalBlogListLitem>, 'post'> &
  BannerProps) => {
  const image = post.banner?.childImageSharp.resize

  return (
    <Card
      sx={(t) => ({
        maxWidth: '320px',
        borderRadius: '12px',
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
        <Link to={post.slug} tabIndex={-1}>
          <Image
            loading="lazy"
            sx={{ borderRadius: '6px' }}
            src={`${withPrefix(image.src)}`}
            width={image.width}
            height={image.height}
            alt={post.title}
          />
        </Link>
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
      <p sx={{ mt: 2, fontWeight: 'bold' }}>
        <Link
          to={post.slug}
          sx={(t) => ({
            ...t.styles?.a,
            fontSize: [1, 2, 3],
            color: `text`,
            '&:hover, &:active, &:focus': {
              textDecoration: 'none',
            },
          })}
        >
          {post.title === 'Why You Want React Query' ? (
            <>
              Why You <Del>Want</Del> Need React Query
            </>
          ) : (
            post.title
          )}
        </Link>
      </p>
      {post.tags && showTags && (
        <p
          sx={{
            color: `secondary`,
            mt: 1,
            a: { color: `secondary` },
            fontSize: 1,
          }}
        >
          <ItemTags tags={post.tags} />
        </p>
      )}
    </Card>
  )
}
