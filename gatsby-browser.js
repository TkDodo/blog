/**
 * Implement Gatsby Browser APIs to handle chunk loading errors
 * This prevents the "loadPage is not a function" error when chunks fail to load
 * due to service worker caching issues during deployments
 */

// Handle route updates and chunk load errors
export const onRouteUpdate = ({ location, prevLocation }) => {
  // Track navigation for debugging
  if (prevLocation && prevLocation.pathname !== location.pathname) {
    console.log(`Navigated from ${prevLocation.pathname} to ${location.pathname}`)
  }
}

// Handle service worker updates
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}

// Catch and handle client-side errors, especially ChunkLoadError
export const onClientEntry = () => {
  // Add global error handler for unhandled promise rejections (chunk load errors often manifest here)
  window.addEventListener('unhandledrejection', (event) => {
    if (
      event.reason &&
      (event.reason.name === 'ChunkLoadError' ||
        event.reason.message?.includes('Loading chunk') ||
        event.reason.message?.includes('ChunkLoadError'))
    ) {
      console.error('ChunkLoadError detected, reloading page...', event.reason)
      event.preventDefault()
      window.location.reload()
    }
  })

  // Add global error handler for regular errors
  window.addEventListener('error', (event) => {
    if (
      event.error &&
      (event.error.name === 'ChunkLoadError' ||
        event.error.message?.includes('Loading chunk') ||
        event.error.message?.includes('ChunkLoadError'))
    ) {
      console.error('ChunkLoadError detected, reloading page...', event.error)
      event.preventDefault()
      window.location.reload()
    }
  })
}

// Handle route change errors (catches errors during navigation)
export const onRouteUpdateDelayed = () => {
  console.warn('Route update delayed - this may indicate a chunk loading issue')
}

// Implement shouldUpdateScroll to handle scroll restoration
export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const currentPosition = getSavedScrollPosition(location)
  const queriedPosition = getSavedScrollPosition({ pathname: `/random` })

  window.setTimeout(() => {
    if (currentPosition) {
      window.scrollTo(...currentPosition)
    } else {
      window.scrollTo(0, 0)
    }
  }, 0)

  return false
}