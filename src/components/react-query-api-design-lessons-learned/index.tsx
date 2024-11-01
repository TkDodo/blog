import * as React from 'react'
import { Flex, Box } from '@theme-ui/components'
import { useLocation } from '@reach/router'
import { useColorMode } from 'theme-ui'
import { useSpringCarousel } from 'react-spring-carousel'

import { Slide } from './slide'

const slides: ReadonlyArray<React.ReactNode> = [
  <p>
    Hello everyone 👋 I'm super excited to be here today, because this
    is the first time that I'm giving a live talk at an in-person
    conference, and I'm very happy that it's happening at React
    Advanced in London today.
  </p>,
  <p>
    My name is Dominik, and I'm a Software Engineer from Vienna, where
    I work as a frontend tech lead at Adverity. You can find me as
    TkDodo online almost everywhere, and for the last three and a half
    years,
  </p>,
  <p>
    I have maintained a quite popular open source React Library React
    Query
  </p>,
  <>
    <p>sorry, TanStack React Query as we call it these days.</p>
    <p>
      Quick question, raise your hands - who of you has heard about
      react query? Who has worked with it?
    </p>
    <p>
      That's great - it means you might know some of the APIs I'm
      gonna talk about, because today, I want to...
    </p>
  </>,
  <p>
    ... walk you through some of the API design choices that we made
    in React Query, tell some stories about things that went well, but
    also highlight tradeoffs and mistakes that we made, and what
    lessons we can all learn from those. And I want to talk about
    that, mainly for two reasons:
  </p>,
  <p>1. API Design is hard.</p>,
  <p>
    If you don't believe me, Julius said it. Very smart guy, he
    maintains tRPC, also contributes to React Query. If he says it,
    it's probably right.
  </p>,
  <>
    <p>
      and 2. I think React Query has a really really sweet API, which
      I think is part of why React Query has become so successful in
      the last couple of years.
    </p>
    <p>
      Now of course I can't take credit for that - Tanner Linsley made
      the library and designed most APIs, and he has a very good tweet
      summarizing the goal:
    </p>
  </>,
  <>
    <p>
      @Tan_Stack Query's API is actually medium sized when you unpack
      it all, but the most important part is that you can understand
      and learn how to use it by starting with a single function that
      provides 80% of the entire value proposition first try. From
      there, the rest of its API can be gradually learned if needed.
    </p>
    <p>
      And I think that's what it takes for a library to become popular
      -
    </p>
  </>,
  <p>
    It needs to be both minimal and intuitive as well as powerful and
    flexible. Now for any given API...
  </p>,
  <p>
    ... those two things are usually at the opposite side of the same
    scale.
  </p>,
  <p>
    Take <code>Array.join</code> for example: very good example for a
    minimal API that does one thing very well, no surprises, super
    intuitive.
  </p>,
  <p>
    On the other side of the spectrum, I'd see
    <code>Array.reduce</code>, which is very powerful (you can
    implement all array functions with reduce) and flexible, but can
    be hard to understand and if that's the only API we have
    available, we'd also not be happy.
  </p>,
  <p>
    So the missing part is the second scale, which is usually "app
    complexity". As app complexity grows, your APIs should likely
    become more powerful & flexible.
  </p>,
  <p>
    So on that scale, <code>useQuery</code> would be right about here
    (bottom left) if you pass the minimal required options to it:
  </p>,
  <p>Simple API, easy to use, but it gives you a ton of things:</p>,
  <p>
    Caching, Request Deduplication, stale-while-revalidate background
    updates, global state management, automatic garbage collection,
    handling loading states, error states + retries, the list goes
    on...
  </p>,
  <>
    <p>
      Then you might add a useMutation for performing updates and
      tying them to queries with query invalidation; that's already a
      bit more code, but you can really get very far with just those
      two (useQuery and useMutation).
    </p>
    <p>And as your app complexity grows,</p>
  </>,
  <p>
    ...so does the flexibility of the Query APIs that you are using.
    You might want to add an optimistic update, or an infinite query -
    those are certainly a bit more involved.
  </p>,
  <>
    <p>
      And all the way on the right side of the scale, we have our
      Persister Plugins and fine-grained direct cache subscriptions
      (which we e.g. use to build the devtools). Now you don't need to
      learn those when you're starting out, but once you reach a
      certain app complexity, you are probably happy that those exist.
    </p>
    <p>Okay, so we got to this API that evolves with you ...</p>
  </>,
  <p>
    ...through careful planning, lots of iteration and a couple of
    major versions. So that gets me right to my first learning I had
    as an open source maintainer
  </p>,
  <p>
    I'm no longer excited about major versions (and probably neither
    should you).
  </p>,
  <p>
    I think API design is especially hard in open source because
    whatever we decide - we can't easily revert it.
  </p>,
  <p>
    At adverity, we used to distribute our design-system via a private
    npm registry. Now we have a monorepo so we don't need to anymore,
    but we adhered to semantic versioning, and do you know what the
    latest version of that was?
  </p>,
  <>
    <p>
      <code>105.2.0</code>
    </p>
    <p>
      Nobody cared. It's just numbers going up. Most projects would
      just update, see that the "major change" was either affecting a
      component they weren't using at all, or was a tiny change, fixed
      it an moved on. It just wasn't a big deal.
    </p>
    <p>But in open source, we cannot do breaking changes lightly,</p>
  </>,
  <>
    <p>
      it has to be a marketing event really. We need announcement
      tweets and videos and blogposts and everything
    </p>
    <p>
      Users hear about a new "major" version. Major sounds "huge", and
      "good", so the immediate question is always:
    </p>
  </>,
  <>
    <p>What are the new features?</p>
    <p>
      The problem is: major versions are not about features. They are
      about breaking existing APIs. Features mostly go in minors.
    </p>
  </>,
  <>
    <p>
      Remember hooks? They came in 16.8. React Router added route
      loaders in 6.4, and bun added windows support in 1.1
    </p>
    <p>
      That's because adding features rarely needs to break an existing
      API. Of course there are exceptions, e.g. when you re-design
      something from the ground up that enables some new features. But
      usually, features come in minors.
    </p>
  </>,
  <>
    <p>
      So when I got asked about the new features in React Query v5, I
      started to sweat. We basically wanted to break a lot of APIs and
      rename things, and there weren't any features planned.
    </p>
    <p>
      So we added some things that honestly, we could've also
      backported to v4. This is by no means great because we're
      withholding features from users just to have some kind of
      "marketing event" and "great new version".
    </p>
  </>,
  <p>
    If it were up to me, I'd want a better system. Something where we
    decouple "breaking changes" from "marketing events". Anthony Fu
    had a great suggestion:
  </p>,
  <>
    <p>
      to do 4-digit semver, so you can have an epoch number before
      major that you can use for big overhauls or for marketing. I
      think it's a nice idea. I doubt it will happen though - just
      something to think about.
    </p>
    <p>
      And maybe, when a new version comes out - don't think about
      what's new - ask what's breaking instead.
    </p>
  </>,
  <p>
    Okay, So I'm no longer excited about major versions, but what I am
    still excited about, even more than before I started with open
    source, is TYPESCRIPT.
  </p>,
  <p>
    Don't worry - we're not gonna go into library level typescript
    today, but if you're building something, I think it helps
    tremendously to think about types from the beginning and
  </p>,
  <>
    <p>design your APIs with types in mind.</p>
    <p>
      Now there are lots of people who say that you should "just make
      it work" first and you can figure out the types later. I think
      they're wrong. When working with JavaScript, we can come up with
      all sorts of cute and dynamic constructs that work at runtime,
      but are very hard to type.
    </p>
  </>,
  <>
    <p>
      Sure, almost everything is doable with enough magic, but
      usually, the price for that is type complexity and maintenance
      burden.
    </p>
    <p>Not sure who said it, but this phrase stuck with me:</p>
  </>,
  <>
    <p>
      If something is hard for a compiler to figure out, it's also
      hard for humans to understand. So if we are having troubles
      expressing what we want to the compiler, maybe the API we've
      chosen isn't the best.
    </p>
    <p>
      One of the "cute and dynamic" constructs we had in React Query
      from when it started out (where it had no types), was was
      actually <code>useQuery</code>, because you could call it 3
      different ways:
    </p>
  </>,
  <p>
    with different positional arguments. There's no good way to make
    this work in TypeScript except with overloads, which is what we
    did. Overloads are problematic because they are a lot of overhead
    and error messages aren't good.
  </p>,
  <p>
    TypeScript will try all overloads and then show an error for the
    last one it tried, which might be completely misleading. Also, we
    had to do some runtime checks to transform different version into
    the same structure. And really, who needs three ways to achieve
    the same thing?
  </p>,
  <>
    <p>
      So since v5, you can only call useQuery with the options syntax.
      With that, we reduced lines of types on useQuery by 80% - from
      125 to just 25 lines of types.
    </p>
    <p>
      Had we started with types in mind from the beginning, I think
      this is where we would've landed right away. Okay enough about
      TypeScript already, there's one thing that always comes up once
      a library reaches a certain threshold of usage:
    </p>
  </>,
  <>
    <p>Users want more features!</p>
    <p>
      And to be honest, managing a demanding user base is one of the
      more tricky things in open source. On the one hand, if you want
      to gain adoption, you need to listen to user feedback and meet
      their expectations, help them fix their problems etc. On the
      other hand, the more you add to your library the more bloated
      the API becomes, adding complexity and thus reducing adoption
      again. We have to balance this somehow.
    </p>
  </>,
  <>
    <p>
      My advice here would be to just take your time before adding
      anything. Users can be very demanding, and in that relationship
      between user and maintainer, it's their job to tell you all
      about their use-case and how important it is for them and their
      deadlines
    </p>
    <p>
      But it's the maintainer's job to have the bigger picture in
      mind. Will this work for everybody? What about cases that the
      original requester hasn't considered because they don't even
      know about them… Remember: once an API is added, we can't change
      it without a new major release.
    </p>
  </>,
  <>
    <p>
      An example where I got this wrong was the refetchPage API for
      infinite queries. For context, infinite queries are our way to
      make building doom-scrolling pages simple - sorry about that.
      But technically, an infinite query is just one cache entry that
      is chunked up into multiple pages, where each page is built upon
      the previous one.
    </p>
    <p>
      Now quite a lot of people complained that whenever a refetch
      occurs, React Query would refetch all pages that are currently
      in the cache and wanted a way to only refetch a single page,
      e.g. after updating a specific entry on that page.
    </p>
  </>,
  <>
    <p>
      This sounded reasonable at first, so we added a new field to
      some existing APIs like invalidateQueries.
    </p>
    <p>
      Now, instead of refetching all pages, you could return false to
      have a specific page not refetch. That API was a mistake for a
      couple of reasons:
    </p>
  </>,
  <>
    <p>
      The API is weird and confusing. refetchPage now exists on
      invalidateQueries, but invalidateQueries doesn't know about the
      type of a query. If there is a match for tasks that is a
      non-infinite query, the param does nothing.
    </p>
    <p>
      We only added this API to imperative methods because of
      technical constraints. If an automatic refetch occurs that was
      triggered by React Query, you would still refetch all pages.
    </p>
    <p>
      Correctness is the main reason why we invalidate all pages per
      default. Each page builds upon the next like a linked-list. If
      you only refetch a page in the middle and one entry was deleted
      by someone else in the meantime, your UI can get weirdly out of
      sync.
    </p>
  </>,
  <p>
    So we took a step back and asked people that used it what their
    main motivation was, and it was always the same: If the user
    scrolls down a lot, and I have 100 pages in the cache, I don't
    want to spam my server. That's fair, so we tried to find an API
    that solves that problem instead. Eventually,
  </p>,
  <>
    <p>
      we settled on a new option on useInfiniteQuery - maxPages, which
      simply allows you to limit how many pages you have in your
      cache.
    </p>
    <p>
      This API is a lot better because it solves the problem
      holistically (from a different point of view), for all kinds of
      refetches, and also speeds up rendering when you navigate to a
      page that has cached entries. We shipped in v5 and removed
      refetchPages completely.
    </p>
    <p>
      My takeaway here is that I landed on a suboptimal API decision
      too quickly, and had I given myself more time to really
      understand the problem we're trying to solve, I could've come up
      with something better.
    </p>
  </>,
  <p>
    The only alternative really is to ship new APIs with an unstable
    or experimental name, which can work but might lead to users not
    really wanting to use it. We did this for some APIs, and these are
    the messages I get, so I'm not sure if that's really better.
  </p>,
  <p>
    Another API that also gets requested often is to be able to
    debounce API calls. You would want that for example when having a
    search field and you want to auto-filter.
  </p>,
  <>
    <p>
      Unless you want to fetch on every keystroke, you likely want
      some way of debouncing that. This is a very good example for a
      feature that will not make it into React Query because it's not
      its responsibility. There are a lot of ways to do debouncing in
      different ways, and it likely needs more than just a number as
      an option. This can get complicated fast, and also adds more
      bundle size.
    </p>
    <p>
      The good news is that you can relatively easily implement this
      in user-land
    </p>
  </>,
  <p>
    You can use your favourite <code>useDebounce</code>{' '}
    implementation, write one yourself,
  </p>,
  <p>
    or just <code>useDeferredValue</code> from React. The way this
    works is that filter will contain the current user input to
    display, and debouncedFilter has the debounced value that you pass
    to React Query.
  </p>,
  <>
    <p>
      This "Inversion of Control" is a great way to give users the
      flexibility to implement features on their own and still keep a
      small API surface.
    </p>
    <p>
      Now the QueryKey is quite special here, but we can get inversion
      of control on other options as well by simply making them a
      function.
    </p>
  </>,
  <p>
    On example is a discussion I had with a user who felt that
    refetches on window focus, which are turned on by default via
    refetchOnWindowFocus: true aren't great when the Query is in error
    state, which I agree might not be what you want. But to add a
    separate option just for that case is not a great API. So instead,
    what we did was make it accept a callback function:
  </p>,
  <>
    <p>
      The function always gets the query passed, and you can derive
      from that what you want. That makes it very easy to implement
      that and similar feature in user-land. So by now, we've made
      almost all options accept callback functions. It's a cheap trick
      to allow users to implement certain behaviours for different
      states of the Query.
    </p>
    <p>
      Okay lastly, even if we keep all these points in mind, no matter
      how well we try to design an API, some people will be unhappy
      with it.
    </p>
  </>,
  <p>
    And they will usually be the loudest. And open source maintainers
    are not immune to making errors, so chances are that eventually,
    we'll release an API that isn't well received. I learned that
    lesson the hard way in v4 of React Query, where we made some
    changes to our primary states.
  </p>,
  <p>
    Let's take that search example from before again and see what
    happens if we handle loading and error states in v4 with the
    derived boolean flags isLoading and isError.
  </p>,
  <p>
    This worked fine in v3, but in v4, it would just render a spinner
    for all eternity.
  </p>,
  <p>
    That's because queries that start in a disabled state are also in
    "isLoading" state. Now there are of course reasons for this, and
    it didn't sound as bad when I thought about it, but objectively,
    when you zoom out a bit and have no knowledge about React Query
    and you see this code and how it behaves - it's a very bad API.
    Absolutely horrible, no excuses. Turns out, a lot of people felt
    that way:
  </p>,
  <>
    <p>
      And I agree - that's messed up. Btw, that counter is still going
      up even though we've since fixed this in v5. But we got those
      reports right AFTER we had released the v4 major version. That
      feedback would've been very good a couple of days earlier.
    </p>
    <p>
      What stuck with me is the user expectation that maintainers get
      everything right in their APIs while at the same time, the
      willingness to try out beta versions and report feedback is
      limited.
    </p>
    <p>
      So if there's one thing that you take away from this talk, I
      want it to be this:
    </p>
  </>,
  <>
    <p>
      Please help out maintainers of open source libraries you are
      using by trying out a beta version and report feedback. I
      guarantee you it's the best time to be heard.
    </p>
    <p>
      Without that early feedback, mistakes might make it into the
      "stable" release. But "stable" doesn't mean bug-free or
      battle-tested - it just means we can't change our APIs anymore -
      it's now set in stone.
    </p>
    <p>
      Open source is a two-way street, and this is one of the best
      ways to help while also getting the most in return.
    </p>
  </>,
  <p>That's all I got, thank you 🙏</p>,
]

export const ApiDesignPresentation = () => {
  const location = useLocation()

  const page = new URLSearchParams(location.search).get('page')
  const activePage = page
    ? Math.min(Math.max(Number(page), 1), slides.length)
    : 1

  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      items: slides.map((slide, index) => ({
        id: `react-query-api-design-lessons-learned-slide-${
          index + 1
        }`,
        renderItem: <Slide index={index}>{slide}</Slide>,
      })),
      initialActiveItem: activePage - 1,
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
