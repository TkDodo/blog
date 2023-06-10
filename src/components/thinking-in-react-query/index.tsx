import * as React from 'react'
import { Flex, Box, Link } from '@theme-ui/components'
import { useLocation } from '@reach/router'
import { useColorMode } from 'theme-ui'
import { useSpringCarousel } from 'react-spring-carousel'

import { Slide } from './slide'

const slides: ReadonlyArray<React.ReactNode> = [
  <p>
    Hello everyone 👋, thanks for being here with me today, where I want
    to talk about...
  </p>,
  <>
    <p>...tying your shoes correctly.</p>
    <p>
      Most people don't know that there is a right and a wrong way to
      tie your shoes. Both ways look very similar at first glance, but
      one knot is stable and the other loosens as you walk. It's a
      little difference that might change your life. Stay tuned until
      the end where I'll show you that trick.
    </p>
  </>,
  <p>
    When working with React Query, we might face similar situations,
    where a small tweak can make a huge difference.
  </p>,
  <>
    <p>
      I discovered this when I started my open source journey back in
      2020, where I was mostly helping out by engaging with the
      community.
    </p>
    <p>
      I answered A LOT of questions on different platforms, which was a
      great way for me to get started in open source. Turns out, people
      are really happy and grateful if you help them solve their
      problem, and I also learned a lot by having to look at situations
      I haven't encountered myself yet.
    </p>
  </>,
  <p>
    With that, I got to know React Query pretty well, and that's when I
    realized a common pattern among those questions. A lot of them
    showed an underlying misconception of what React Query is or does,
    and would probably answer themselves with a little shift in
    thinking.
  </p>,
  <p>
    My name is Dominik, and I'm a Software Engineer from Vienna. I go by
    the name TkDodo online almost everywhere, I work as a Frontend Tech
    Lead at Adverity, and I've also had the privilege to maintain the
    open source library React Query for the past two years.
  </p>,
  <p>
    So today, what I really want to talk about is showing you 3 simple
    ways on how to approach react query with a better mindset. Similar
    to tying your shoes correctly, once you know it, it hopefully makes
    a lot of sense and is quite simple to follow.
  </p>,
  <p>
    So let's take a look at what it takes to be "Thinking in React
    Query"
  </p>,
  <p>
    The first point might surprise you, but it's true: Even though it is
    often described as "the missing piece for data fetching in React",
    React Query is NOT a data fetching library. It doesn't do any data
    fetching for you, because if we take a quick look
  </p>,
  <p>
    at a standard react query example: we can see that we need to
    provide two things to <code>useQuery</code>:
  </p>,
  <p>
    A unique <code>queryKey</code> where React Query will store the data
    for us,
  </p>,
  <p>
    and a <code>queryFn</code> that will be executed whenever data
    should be retrieved.
  </p>,
  <p>
    We can then of course use that hook in a component to render data
    and the various states the query can be in, but if we take a quick
    look at the <code>queryFn</code> again...
  </p>,
  <p>
    we can see that in this example, it is implemented with axios,
    because, why not? But the point is: THAT is your data-fetching
    library. React Query doesn't care how you do it.
  </p>,
  <>
    <p>
      The only thing it cares about is if we are returning a{' '}
      <code>fulfilled</code> or <code>rejected</code> Promise.
    </p>
    <p>
      In fact (and this is probably me talking as a library maintainer),
      if you're filing an issue telling me you can't show a reproduction
      because your API is private, I'll likely be telling you that this
      is the simplest way to implement the <code>queryFn</code> - no
      data fetching at all:
    </p>
  </>,
  <>
    <p>
      All we are doing is - return a resolved Promise. Of course, React
      Query goes very well <i>with</i> data fetching libraries like
      axios, fetch or graphql-request because they all produce Promises.
    </p>
    <p>
      Once we understand that React Query doesn't fetch data, it
      hopefully becomes clear that a whole class of questions around
      data fetching just disappear. Questions like:
    </p>
  </>,
  <>
    <p>
      All questions around data fetching usually have the same answer:
    </p>
    <ul>
      <li>How can I define a baseURL with React Query ?</li>
      <li>How can I access response headers with React Query?</li>
      <li>How can I make graphQL requests with React Query?</li>
    </ul>
  </>,
  <>
    <p>
      React Query doesn't care! Just somehow return a Promise, please.
    </p>
    <p>Right, once we've got that, it's only fair to ask:</p>
  </>,
  <p>
    If React Query is no data fetching library, what is it? My answer to
    this question has always been:
  </p>,
  <p>
    An Async State Manager. Now it's important to understand what we
    mean by "Async State”.
  </p>,
  <>
    <p>
      Tanner Linsley, the creator of React Query, gave a great talk in
      May 2020 called:{' '}
      <Link
        href="https://www.youtube.com/watch?v=seU46c6Jz7E"
        target="_blank"
        rel="noreferrer noopener"
      >
        It's Time to Break up with your "Global State"
      </Link>
      .
    </p>
    <p>
      The talk is still very relevant today, please watch it if you
      haven't already.
    </p>
  </>,
  <p>
    The gist of it is that we have, for the longest time, sliced our
    state into <i>where</i> we need it to live. Do we only need it in
    one component? We'll probably start out by using local state. Do we
    need it available higher up the tree?
  </p>,
  <p>
    Then we move it up and potentially pass data down again as props. Do
    we need it even higher, or on a much broader scale?
  </p>,
  <p>
    We'd likely move it to a "global state manager" like redux or
    zustand, which lives outside of React and then distributes it
    globally to our application.
  </p>,
  <>
    <p>
      And we've been doing this for all kinds of state - no matter if
      it's the toggle button we're clicking in our app or the list of
      issues or profile data we have to fetch over the network. We've
      treated them all exactly the same.
    </p>
    <p>
      The shift in thinking comes when we split state differently - not
      <i>where</i> it is used but by <i>what kind of state</i> it is.
    </p>
  </>,
  <p>
    Because state we own completely and that is synchronously available
    (like, when I click that dark mode toggle button) has totally
    different needs than state that is persisted remotely and
    asynchronously available, like a list of issues.
  </p>,
  <>
    <p>
      With async state or "server state”, we only see a snapshot in time
      of when we fetched it. It can get out of date, because we are not
      the only owner of that state. The backend, probably our database
      owns it. We have just borrowed it to display that snapshot.
    </p>
    <p>
      You might notice this when you leave a browser tab open for half
      an hour, and then come back to it. Wouldn't it be nice to
      automatically see fresh and accurate data? That means WE have to
      keep it up-to-date, because other users can make changes in the
      meantime as well. And because state is not synchronously
      available, meta-information around that state, like loading and
      error states, need to be managed as well.
    </p>
  </>,
  <p>
    So, keeping your data up-to-date automatically and managing async
    lifecycles isn't something you would get or need from a traditional,
    all-purpose state manager. But since we have a tool that is geared
    towards async state, we can make all that happen, and more. We just
    need to use the right tool for the right job.
  </p>,
  <p>
    The second part we need to understand is what a "state manager" is,
    and why React Query is one. What state managers usually do is making
    your state available in your app efficiently. The important part
    here is <i>efficiently</i>, put another way, I would frame it as:
  </p>,
  <>
    <p>We want updates please, but not too many.</p>
    <p>
      If too many updates weren't a problem, we'd all just stick our
      state in React Context. But it is a real problem, and a lot of
      libraries try to solve this in various ways, some more magically
      than others. Redux and zustand - two popular state management
      solutions - both offer a selector based api:
    </p>
  </>,
  <p>
    Those make sure that our components are only subscribed to parts of
    the state they are interested in. If other parts of the store
    update, those components don't care. And the principle is that we
    can call those hooks anywhere in our App to get access to that
    state, because the libraries make it globally available.
  </p>,
  <>
    <p>
      And with React Query, it's really not that different. Except that
      the part or slice you're subscribing to is defined by the QueryKey
    </p>
    <p>
      Now wherever we call our <code>useIssues()</code> custom hook,
      we'll get updates if something changed in the <code>issues</code>{' '}
      slice of the Query Cache. And if that isn't enough, we can take
      this a step further, because ReactQuery has selectors as well:
    </p>
  </>,
  <>
    <p>
      Now we're talking "fine-grained" subscriptions, where components
      are only interested in computed or derived results of what is
      stored. If we toggle one issue from "opened" to "closed", the
      component that uses the <code>useIssueCount</code> hook won't
      re-render because the length hasn't changed.
    </p>
    <p>
      And just like with other state managers, we can (and very likely
      should) call <code>useQuery</code> wherever we need to, to get
      access to that data.
    </p>
  </>,
  <>
    <p>
      This makes all solutions that try certain things like calling
      <code>useEffect</code> to sync data from React Query somewhere
      else or setting data into local state in the (already deprecated){' '}
      <code>onSuccess</code> callback anti-patterns.
    </p>
    <p>
      All of these are forms of state syncing that take away the single
      source of truth, and are unnecessary because React Query is
      already a state manager, so we don't need to put that state into
      another one.
    </p>
  </>,
  <p>
    Okay okay you might be thinking, now I'm doing this, and I'm calling
    useQuery wherever I want to / need to. 3 components, 3x{' '}
    <code>useIssues()</code>. But if some of our components are rendered
    conditionally, like when opening a Dialog or because we have
    dependent queries, we might start to see a lot of fetches to the
    same endpoint.
  </p>,
  <p>
    You might be thinking: ugh, I just fetched this like 2 seconds ago,
    why is it already fetching again?? So you turn to the docs...
  </p>,
  <>
    <p>
      and start to turn off everything, everywhere, all at once, just to
      not spam your backend that much. Maybe we should've put our data
      in redux after all...
    </p>
    <p>
      Bear with me for a second, because there is some logic to this
      madness. Why is React Query making all those requests?
    </p>
  </>,
  <>
    <p>
      It brings us back all the way to the needs of async state: It can
      be outdated, so we want to update it at some point in time, and
      React Query does this by certain triggers: window focus, component
      mount, regaining network connection and QueryKey change.
    </p>
    <p>
      Whenever one of these events occurs, React Query will refetch that
      query automatically.
    </p>
    <p>
      But that's not the whole story. The thing is: React Query will not
      do this for all Queries - only for Queries that are considered
      <code>stale</code>. And this brings us to the second important
      takeaway of the day:
    </p>
  </>,
  <p>
    <code>staleTime</code> is your best friend
  </p>,
  <>
    <p>
      React Query is also a data synchronization tool, but that doesn't
      mean it'll blindly refetch all queries in the background. This
      behaviour can be adjusted by <code>staleTime</code>, which defines
      "the time until data goes stale". The opposite of{' '}
      <code>stale</code> is <code>fresh</code>, so put another way, as
      long as data is considered <code>fresh</code>, it will be given to
      us from the cache only, without a refetch. Otherwise, we'll get
      cached data AND a refetch.
    </p>
  </>,
  <>
    <p>
      So only stale queries will be updated automatically, but the thing
      is: staleTime defaults to zero
    </p>
    <p>
      Yep, zero as in zero milliseconds, so React Query marks everything
      as stale instantly. That's certainly aggressive and can lead to
      overfetching, but instead of erroring on the side of minimizing
      network requests, React Query errors on the side of keeping things
      up-to-date.
    </p>
  </>,
  <>
    <p>
      Now defining <code>staleTime</code> is up to you - it highly
      depends on your resource and your needs. There is also no
      "correct" value for <code>staleTime</code>.
    </p>
    <p>
      If you are querying config settings that will only change when the
      server restarts, <code>staleTime: Infinity</code> can be a good
      choice.
    </p>
    <p>
      On the other hand, if you have a highly collaborative tool where
      multiple users update things at the same time, you might be happy
      with <code>staleTime: 0</code>.
    </p>
  </>,
  <p>
    So a very important part of working with React Query evolves around
    defining <code>staleTime</code>. Again, there is no correct value,
    what I like to do is set a default globally and then potentially
    overwrite it when needed.
  </p>,
  <>
    <p>
      Okay, let's quickly go back to the needs of async state one more
      time. We know that React Query keeps our cache up-to-date if data
      is considered stale and one of those events occur.
    </p>
    <p>
      The one event that is probably the most important of all and that
      I want to focus on is the QueryKey change event.
    </p>
    <p>
      When would that event mostly occur? Well, that brings us to the
      last point:
    </p>
  </>,
  <>
    <p>We should treat parameters as dependencies.</p>
    <p>
      I really want to emphasize on this, even though it's already
      outlined in the docs and I have written{' '}
      <Link href="practical-react-query#treat-the-query-key-like-a-dependency-array">
        a separate blogpost
      </Link>{' '}
      about it.
    </p>
  </>,
  <p>
    If you have parameters, like the filters in this example, that you
    want to use inside your <code>queryFn</code> to make a request, you
    have to add them to the <code>queryKey</code>.
  </p>,
  <>
    <p>
      This ensures a lot of things that make React Query great to work
      with: For one, it makes sure that entries are cached separately
      depending on their input, so if we have different filters, we
      store them under different keys in the cache, which avoids race
      conditions.
    </p>
    <p>
      It also enables automatic refetches when <code>filters</code>{' '}
      changes, because we go from one cache entry to the other. And it
      avoids problems with stale closures, which are usually pretty hard
      to debug.
    </p>
  </>,
  <p>
    It's so important that we've released our own eslint plugin. It can
    check if you’re using something inside the <code>queryFn</code> and
    tells you to add it to the key. It's also auto fixable, and I can
    highly recommend using it.
  </p>,
  <>
    <p>
      If you want, you can think about the <code>queryKey</code> like
      the dependency Array for <code>useEffect</code>, but without the
      drawbacks, because we don't have to think about referential
      stability.
    </p>
    <p>
      There's no need for <code>useMemo</code> or{' '}
      <code>useCallback</code> to get involved here - not for the
      <code>queryFn</code> and not for the <code>queryKey</code>.
    </p>
  </>,
  <p>
    Now lastly, this might introduce a new problem: We're now using
    <code>useQuery</code> wherever we need to, at any level in our App,
    but now we have dependencies to our Query that only exists in a
    certain part of the screen: What if I don't have access to{' '}
    <code>filters</code>
    when I want to call <code>useIssues</code> ? Where is it coming
    from?
  </p>,
  <>
    <p>
      The answer, again, is: React Query doesn't care. It's a pure
      <i>client state management</i> problem. Because that applied
      filter is
      <i>client state</i>. And how you manage that is up to you.
    </p>
    <p>
      It's still totally fine to use local state or global state
      managers for that as you see fit. Storing <code>filters</code> in
      the url is often a good idea, too.
    </p>
    <p>
      As an example, let's take a look at how this could look if we've
      put the filters into a state manager like <code>zustand</code>:
    </p>
  </>,
  <>
    <p>
      The only thing we’ve changed is, instead of passing{' '}
      <code>filters</code> as input to our custom hook, we are getting
      it from the store directly. This shows the power of composition
      when writing custom hooks.
    </p>
    <p>
      And we can see the clear separation between server state, managed
      by <code>useQuery</code>, and client state, in this case, managed
      by <code>useStore</code>. Every time we update{' '}
      <code>filters</code> in the store - no matter where - the query
      will automatically run or read the latest data from the cache if
      available.
    </p>
    <p>
      This pattern will enable us to use React Query as a true async
      state manager.
    </p>
  </>,
  <>
    <p>In summary:</p>
    <ol>
      <li>
        React Query is NOT a data fetching library - it’s an async state
        manager.
      </li>
      <li>
        <code>staleTime</code> is your best friend - but you have to set
        it up to your needs.
      </li>
      <li>
        Treat parameters as dependencies, and use our lint rule to
        enforce this.
      </li>
    </ol>
    <p>
      If we change our thinking to follow these three points, we’ll have
      an even better time working with React Query, much like a small
      tweak to how we tie our shoes can be a great quality of life
      improvement.
    </p>
  </>,
  <>
    <p>
      Now I still owe you the solution to tying your shoes correctly.
    </p>
    <p>
      It's really quite simple. When creating the loop, make sure to
      pull the shoelace toward yourself first, then pull it through the
      gap.
    </p>
  </>,
  <>
    <p>
      This small difference will result in a knot that will stay
      horizontal and won't come loose as easily.
    </p>
    <p>
      There is also{' '}
      <Link
        href="https://www.youtube.com/watch?v=JeXAe4qv22s"
        target="_blank"
        rel="noreferrer noopener"
      >
        a youtube video
      </Link>{' '}
      if you wanna go watch that.
    </p>
  </>,
  <p>
    So, that's all I got, thanks for listening. Be sure to follow me on{' '}
    <Link
      href="https://twitter.com/tkdodo"
      target="_blank"
      rel="noreferrer noopener"
    >
      twitter
    </Link>
    , and subscribe to my{' '}
    <Link
      href="https://tkdodo.eu"
      target="_blank"
      rel="noreferrer noopener"
    >
      blog
    </Link>
    . React Query v5 is just around the corner and that is a good way to
    keep up-to-date. Thanks!
  </p>,
]

export const Presentation = () => {
  const location = useLocation()

  const page = new URLSearchParams(location.search).get('page')
  const activePage = page
    ? Math.min(Math.max(Number(page), 1), slides.length)
    : 1

  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    useListenToCustomEvent,
  } = useSpringCarousel({
    items: slides.map((slide, index) => ({
      id: `slide-${index + 1}`,
      renderItem: <Slide index={index}>{slide}</Slide>,
    })),
    initialActiveItem: activePage - 1,
  })

  useListenToCustomEvent((event) => {
    // Triggered when the slide animation is completed
    if (event.eventName === 'onSlideChange') {
      const searchParams = new URLSearchParams(window.location.search)
      searchParams.set('page', String(event.currentItem.index + 1))
      window.history.replaceState(
        null,
        '',
        '?' + searchParams.toString()
      )
    }
  })

  React.useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        slideToPrevItem()
      } else if (event.key === 'ArrowRight') {
        slideToNextItem()
      }
    }
    document.addEventListener('keydown', listener)
    return () => document.removeEventListener('keydown', listener)
  }, [slideToPrevItem, slideToNextItem])

  const ref = React.useRef()
  const [colorMode] = useColorMode()
  const fill =
    colorMode === 'dark'
      ? 'rgba(255, 255, 255, 0.87)'
      : 'rgba(0, 0, 0, 0.87)'

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Flex
        ref={ref}
        sx={{
          position: 'relative',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <Box
          as="button"
          sx={{
            '&:hover': {
              opacity: 1,
            },
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: ['flex-start', 'center'],
            top: ['33%', 0],
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
            alignItems: ['flex-start', 'center'],
            top: ['33%', 0],
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
        <Box sx={{ flexGrow: 1 }}>{carouselFragment}</Box>
      </Flex>
    </Box>
  )
}
