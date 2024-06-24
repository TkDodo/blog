import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Link, Box } from 'theme-ui'

const About = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <Box
      as="p"
      sx={{
        display: 'flex',
        alignItems: ['center', null],
        gap: 4,
      }}
    >
      <Box
        sx={{
          width: ['15rem', null, '19rem'],
          marginBottom: [null, null, 5],
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
    </Box>
    <p>
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
    </p>
  </Box>
)

/**
 * <div style={{ display: 'flex', flexDirection: 'column' }}>
 *       <p style={{ marginBottom: 0, marginTop: 0 }}>
 *         <Text sx={{ fontWeight: 'bold' }}></Text>
 *       </p>
 *       <p style={{ marginBottom: 0 }}>
 *         <Text>
 *           I'm a Web Developer with a passion for ReactJs. I ❤️ static
 *
 *         </Text>
 *       </p>
 *       <p style={{ marginBottom: 0 }}>
 *         <Text>
 *           I currently co-maintain the popular async state management
 *           library{' '}
            <Link
              href="https://github.com/TanStack/query"
              target="_blank"
              rel="noreferrer noopener"
            >
              TanStack/query
            </Link>
 *           , as well as{' '}
 *           <Link
 *             href="https://github.com/remeda/remeda"
 *             target="_blank"
 *             rel="noreferrer noopener"
 *           >
 *             remeda
 *           </Link>
 *           , a utility library tailored to TypeScript users.
 *         </Text>
 *       </p>
 *       <p style={{ marginBottom: 0 }}>
 *         <Text>
 *           Welcome to my personal blog 📚, where I write about all
 *           things React, TypeScript and of course react-query.
 *         </Text>
 *       </p>
 *       <p style={{ marginBottom: 0 }}>
 *         <Text>
 *           If you enjoy my blog posts or want to support my open source
 *           work, you can{' '}
 *           <Link
 *             href="https://github.com/sponsors/TkDodo"
 *             target="_blank"
 *             rel="noopener noreferrer"
 *             sx={{ whiteSpace: 'nowrap' }}
 *           >
 *             🎗 sponsor me on Github 🎗
 *           </Link>
 *         </Text>
 *       </p>
 *     </div>
 */

export default About
