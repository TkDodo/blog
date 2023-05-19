import * as React from 'react'
import { Flex, Box } from '@theme-ui/components'
import { useColorMode } from 'theme-ui'
import { useSpringCarousel } from 'react-spring-carousel'

import { Slide } from './slide'

const slides: ReadonlyArray<React.ReactNode> = [
  <p>
    Hello everyone 👋, thanks for being here today, where I want to talk
    about...
  </p>,
  <>
    <p>...tying your shoes correctly.</p>
    <p>
      Most people don’t know that there is a right and a wrong way to
      tie your shoes. Both ways look very similar at first glance, but
      one knot is stable and the other loosens as you walk. It's a
      little difference that might change your life. Stay tuned until
      the end where I'll show you that trick.
    </p>
  </>,
]

export const Presentation = () => {
  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    enterFullscreen,
    exitFullscreen,
    getIsFullscreen,
  } = useSpringCarousel({
    items: slides.map((slide, index) => ({
      id: `slide-${index + 1}`,
      renderItem: <Slide index={index}>{slide}</Slide>,
    })),
  })

  const ref = React.useRef()
  const [colorMode] = useColorMode()
  const fill =
    colorMode === 'dark'
      ? 'rgba(255, 255, 255, 0.87)'
      : 'rgba(0, 0, 0, 0.87)'

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box
        as="button"
        aria-label="enter fullscreen"
        sx={{
          '&:hover': {
            opacity: 1,
          },
          display: 'flex',
          alignSelf: 'flex-end',
          zIndex: 1,
          background: 'none',
          border: 0,
          textAlign: 'center',
          transition: 'opacity .15s ease',
          opacity: 0.5,
          cursor: 'pointer',
          backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='${fill}' viewBox='0 0 24 24'%3E%3Cpath d='M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-4 7h-1v-3.241l-11.241 11.241h3.241v1h-5v-5h1v3.241l11.241-11.241h-3.241v-1h5v5z'/%3E%3C/svg%3E")`,
          backgroundPosition: '50%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          height: '2rem',
          width: '2rem',
        }}
        onClick={() => enterFullscreen(ref.current)}
      />
      <Flex
        ref={ref}
        sx={{
          position: 'relative',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ flexGrow: 1 }}>{carouselFragment}</Box>
        <Box
          as="button"
          sx={{
            '&:hover': {
              opacity: 1,
            },
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: 0,
            bottom: 0,
            zIndex: 1,
            background: 'none',
            border: 0,
            textAlign: 'center',
            transition: 'opacity .15s ease',
            opacity: 0.5,
            cursor: 'pointer',
          }}
          onClick={slideToPrevItem}
        >
          <span
            aria-label="previous slide"
            style={{
              backgroundPosition: '50%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              display: 'inline-block',
              height: '2rem',
              width: '2rem',
              backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='${fill}' viewBox='0 0 16 16'%3E%3Cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3E%3C/svg%3E")`,
            }}
          ></span>
        </Box>
        <Box
          as="button"
          sx={{
            '&:hover': {
              opacity: 1,
            },
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: 0,
            bottom: 0,
            right: 0,
            zIndex: 1,
            background: 'none',
            border: 0,
            textAlign: 'center',
            transition: 'opacity .15s ease',
            opacity: 0.5,
            cursor: 'pointer',
          }}
          onClick={slideToNextItem}
        >
          <span
            aria-label="previous slide"
            style={{
              backgroundPosition: '50%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              display: 'inline-block',
              height: '2rem',
              width: '2rem',
              backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='${fill}' viewBox='0 0 16 16'%3E%3Cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E")`,
            }}
          ></span>
        </Box>
      </Flex>
    </Box>
  )
}
