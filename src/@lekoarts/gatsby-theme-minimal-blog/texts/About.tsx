import * as React from 'react'
import { Text, Link, Box } from 'theme-ui'

const About = () => (
  <Box sx={{ display: ['block', 'block', 'flex'] }}>
    <img
      src="https://avatars.githubusercontent.com/u/1021430?s=128"
      alt="TkDodo"
      style={{
        marginRight: '0.875rem',
        marginTop: '0.5rem',
        width: '8rem',
        height: '8rem',
        borderRadius: '50%',
      }}
    />
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p style={{ marginBottom: 0, marginTop: 0 }}>
        <Text sx={{ fontWeight: 'bold' }}>
          Hi 👋, I'm Dominik from Vienna 🇦🇹
        </Text>
      </p>
      <p style={{ marginBottom: 0 }}>
        <Text>
          I'm a Web Developer with a passion for ReactJs. I ❤️ static
          types, especially TypeScript.
        </Text>
      </p>
      <p style={{ marginBottom: 0 }}>
        <Text>
          I currently co-maintain the popular async state management
          library{' '}
          <Link
            href="https://github.com/TanStack/query"
            target="_blank"
            rel="noreferrer noopener"
          >
            TanStack/query
          </Link>
          , as well as{' '}
          <Link
            href="https://github.com/remeda/remeda"
            target="_blank"
            rel="noreferrer noopener"
          >
            remeda
          </Link>
          , a utility library tailored to TypeScript users.
        </Text>
      </p>
      <p style={{ marginBottom: 0 }}>
        <Text>
          Welcome to my personal blog 📚, where I write about all things
          React, TypeScript and of course react-query.
        </Text>
      </p>
      <p style={{ marginBottom: 0 }}>
        <Text>
          If you enjoy my blog posts or want to support my open source
          work, you can{' '}
          <Link
            href="https://github.com/sponsors/TkDodo"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ whiteSpace: 'nowrap' }}
          >
            🎗 sponsor me on Github 🎗
          </Link>
        </Text>
      </p>
    </div>
  </Box>
)

export default About
