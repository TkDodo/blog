import * as React from 'react'
import { Link, Box, Grid } from 'theme-ui'

const About = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <Grid
      gap={4}
      columns={[1, null, 2]}
      sx={{
        maxWidth: '50rem',
        justifyItems: ['flex-start', null, 'stretch'],
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: ['15rem', null, '19rem'],
        }}
      >
        <img
          src="https://avatars.githubusercontent.com/u/1021430?s=400"
          alt="TkDodo"
          style={{
            borderRadius: '50%',
            width: '100%',
            height: 'auto',
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: ['100%', null, '25rem'],
        }}
      >
        <h1> Hi 👋, I'm Dominik from Vienna 🇦🇹</h1>
        <p>
          I'm a Web Developer and open source maintainer who ❤️
          ReactJs and TypeScript. I'm currently maintaining{' '}
          <Link
            href="https://github.com/TanStack/query"
            target="_blank"
            rel="noreferrer noopener"
          >
            TanStack/query
          </Link>{' '}
          and{' '}
          <Link
            href="https://github.com/TanStack/router"
            target="_blank"
            rel="noreferrer noopener"
          >
            TanStack/router
          </Link>
          .
        </p>
      </Box>
    </Grid>
    <Box as="p">
      Welcome to my personal blog 📚, where I write about all things
      React, TypeScript and of course the{' '}
      <Link
        href="https://github.com/TanStack"
        target="_blank"
        rel="noreferrer noopener"
      >
        TanStack
      </Link>
      . If you enjoy my blog posts or want to support my open source
      work, you can{' '}
      <Link
        href="https://github.com/sponsors/TkDodo"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ whiteSpace: 'nowrap' }}
      >
        🎗 sponsor me on Github 🎗
      </Link>
    </Box>
  </Box>
)

export default About
