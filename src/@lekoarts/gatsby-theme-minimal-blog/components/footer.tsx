/** @jsx jsx */
import useSiteMetadata from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata'
import { jsx } from 'theme-ui'
import { Link } from 'theme-ui'

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}. All rights
        reserved.
      </div>
      <div
        sx={{
          display: 'flex',
          flexDirection: [`column`, `column`, `row`],
          gap: [0, 0, 2],
        }}
      >
        <div>
          <Link
            aria-label="Link to the theme's GitHub repository"
            href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog"
          >
            Theme
          </Link>
          {` `}
          by
          {` `}
          <Link
            aria-label="Link to the theme author's website"
            href="https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Theme"
          >
            LekoArts.
          </Link>
        </div>
        <div>
          This site is powered by{' '}
          <Link href="https://www.netlify.com">Netlify</Link>.
        </div>
      </div>
    </footer>
  )
}

export default Footer
