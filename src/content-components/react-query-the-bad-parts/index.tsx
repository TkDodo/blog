import * as React from "react";
import { useSpringCarousel } from "react-spring-carousel";

import { Slide } from "./slide";

const slides: ReadonlyArray<React.ReactNode> = [
  <p>
    This is gonna be a quick one, almost a lightning talk really - because
    mostly,
  </p>,
  <p>
    ... React Query is just great ❤️. I think it's really loved by the community
    for providing a great Developer Experience and User Experience alike. Now I
    know that's a bold claim, but I have brought some data to back that up:
  </p>,
  <>
    <p>
      If we look at weekly download numbers on NPM, React Query has grown a lot
      this year - from 4 million to almost 6 million - a 50% increase.
    </p>
    <p>Now those are huge numbers, but let's compare that to React ...</p>
  </>,
  <>
    <p>
      which is also growing strong, sitting at 27M weekly downloads. Our curve
      doesn't look as impressive anymore, but it also kinda implies that React
      Query is used in more than 20% of all React applications, or in every 5th
      app.
    </p>
    <p>And some of those apps ...</p>
  </>,
  <>
    <p>
      ... have millions of users themselves, like sentry, bsky or chatGPT, so
      React Query really gets a lot of exposure.
    </p>
    <p>
      Now of course download numbers and usage aren't everything, just because
      something is used often doesn't necessarily mean it's liked.
    </p>
    <p>Maybe a better way is to look at surveys:</p>
  </>,
  <>
    <p>
      State of frontend 2024 is quite new, and they asked "which tools have you
      used to fetch data in the last year"?
    </p>
    <p>
      I'm not gonna nit pick that RQ isn't a data fetching solution like axios
      or fetch, but behind those, it comes with a very high positive sentiment:
      Only 2.8% of people who used it didn't like it.
    </p>
  </>,
  <>
    <p>
      State of React has a similar question around "Utilities for loading and
      managing data", and if we group that by positive sentiment, TanStack Query
      actually comes out at the top with just over 44%.
    </p>
    <p>So, I'm really happy that developers seem to like the library ...</p>
  </>,
  <>
    <p>... because I've been maintaining it for the last 4 years.</p>
    <p>
      My name is Dominik, I'm a Software Engineer living in Vienna, where I will
      be joining the Frontend Platform Team @ sentry next month. You can find me
      as TkDodo online almost everywhere, and I also have a blog where I write
      about React and TypeScript, and of course, React Query.
    </p>
    <p>
      I've written and talked a lot about why React Query is great, and it
      really is, but still:
    </p>
  </>,
  <p>
    everything is a tradeoff. Using any piece of technology is usually a good
    tradeoff if the thing we are getting in return is better for us (worth more)
    than what we are trading in.
  </p>,
  <p>
    I think React Query is really a good tradeoff for most situations, but of
    course there are cases where it might not be the best fit.
  </p>,
  <p>
    So today, I want to talk about these cases, but also debunk some myths I've
    heard about React Query that make it sound like it's bad when it probably
    isn't.
  </p>,
  <>
    <p>So maybe the talk is more like React Query - The Tradeoffs.</p>
    <p>So let's get started with the first point, the elephant in the room -</p>
  </>,
  <>
    <p>
      the bundle-size. React Query has a huge bundle size is something I hear
      often as it's largest drawback.
    </p>
    <p>Okay let's first establish what the "bundle size" isn't:</p>
  </>,
  <>
    <p>
      It’s not what you see on npm. That’s the size that gets shipped when
      developers install the library. Yes, it's over 700kb, but we also ship
      codemods and all the sources and source-maps for you to better debug the
      lib if necessary. It's definitely NOT what gets shipped to the customer.
    </p>
    <p>Okay, it's...</p>
  </>,
  <>
    <p>
      ...also not what you see on bundlephobia. It's a good site to get a quick
      overview, but it doesn't understand ESM properly (neither do I btw). We
      ship a special "legacy" build for older bundlers (👋 webpack 4) that isn’t
      as optimized, and that is what bundlephobia also picks up. (Any modern
      bundler like vite or webpack 5 will see the more modern ESM build). So no,
      that size is also too large.
    </p>
    <p>So where can we get the "correct" size then?</p>
  </>,
  <p>
    I like bundlejs because it builds what we export on-the-fly with esbuild and
    show its size impact.
  </p>,
  <p>
    If we export everything from React Query, we get to 12.4 kB minzipped. Now
    that's not nothing, but it’s also not a lot. If we care about size, we
    should probably use brotli compression instead of gzip -
  </p>,
  <>
    <p>that would get it down to 12 kb, nice.</p>
    <p>
      But that is when we really use every single feature the library has to
      offer, so it isn't the typical starting point. You'll usually get quite
      far with just a <code>QueryClient</code>, a{" "}
      <code>QueryClientProvider</code>,<code>useQuery</code> and{" "}
      <code>useMutation</code>.
    </p>
  </>,
  <>
    <p>That gets it to under 10kb - 9.63 kB to be exact.</p>
    <p>
      Don't get me wrong - bundle size is an important thing to look at before
      adding a dependency.
    </p>
  </>,
  <p>
    But the debate about what is "light-weight" and what isn't is not the most
    important one when it comes to a central tool like your async state manager
    - Especially because there's one metric that is easily left out - likely
    because it isn't easy to track:
  </p>,
  <>
    <p>and that is bundle size you save by code you don't have to write</p>
    <p>
      A library like react-query "pays for itself" because the more you use it,
      the more it saves you code that you would otherwise have to write
      yourself.
    </p>
    <p>
      So when checking bundle size of a library, it's important to not only
      think about the immediate size it adds, but also what it can save you in
      the long run. And on that scale, React Query is a clear and easy win for
      me. Most custom solutions would likely be larger or would fail in edge
      case, because caching and cache invalidation is hard.
    </p>
    <p>The next myth I would like to debunk is ...</p>
  </>,
  <p>
    the fact that React Query can't even fetch on a button click. I get that a
    lot. The argument is that it's hard for React Query to do imperative data
    fetching. And it's true - React Query is declarative by default.
  </p>,
  <>
    <p>
      We define a QueryKey and a QueryFunction for useQuery, and it runs
      automatically:
    </p>
    <p>
      This code will try to read tasks from the cache, and if they don't exist,
      it will go fetch and cache them for us. It will also do a background
      refetch if the data is considered stale.
    </p>
    <p>So far, so good. Now let’s try to add filtering to our Task List</p>
  </>,
  <>
    <p>
      We'll add a filter form that has an <code>onApply</code> callback, and
      when that gets called, we’d want to refetch the list with new filters:
    </p>
    <p>
      If we explore what <code>useQuery</code> returns, we might find the{" "}
      <code>refetch</code> method, and want to try passing ...
    </p>
  </>,
  <>
    <p>
      ... filters directly to <code>refetch</code>. Seems reasonable, except
      that <code>refetch</code> doesn't accept any arguments, so this won't
      work.
    </p>
    <p>
      I understand the frustration about this - but it's just not how React
      Query is designed to work. See, if we have a static key
    </p>
  </>,
  <>
    <p>
      like <code>['tasks']</code> and we'd refetch with different arguments for
      that static key, we would not only overwrite previously cached data, we
      would also run into race conditions that you'd get with fetching in{" "}
      <code>useEffect</code>.
    </p>
    <p>
      React Query has solved both of these problems with a declarative approach
      - by making your ...
    </p>
  </>,
  <>
    <p>
      "dependencies" (what you use inside the QueryFunction) part of the
      QueryKey. That means we have to store our <code>appliedFilters</code>
      somewhere, for example, in React State.
    </p>
    <p>
      When the applied filters change, the key changes and React Query will see
      a new cache entry and will get data for it, or read it from the cache.
    </p>
  </>,
  <>
    <p>
      This will get us from the imperative thinking: "If I click this button, I
      want to refetch" towards the declarative form of: "I want data that
      matches this state". How it changes is irrelevant.
    </p>
    <p>
      It's also irrelevant how / where we store the applied filters. With
      TanStack Router...
    </p>
  </>,
  <>
    <p>
      it's a pretty straight forward change to make a navigation with different
      search params instead of storing it in React State:
    </p>
    <p>
      This is of course type-safe depending on the search param schema defined
      on the route, and now, we get a bunch of things for free, like sharable
      urls or browser back button navigation 🎉
    </p>
  </>,
  <>
    <p>
      Another cool thing is that if you change filters back to something you've
      already fetched, you'll get an instant result. That's because React Query
      caches everything separately by its key. It's a simple document cache,
      which means the complete response will be stored under that key.
    </p>
    <p>
      So yeah, in this example, if a task is both <code>status: open</code> AND
      <code>priority: high</code>, it will be in both caches, because there is
      ...
    </p>
  </>,
  <>
    <p>
      ...no normalized caching in React Query. In a normalized cache, every
      piece of data is stored once, and other parts only reference it, to avoid
      data duplication.
    </p>
    <p>
      Dedicated solutions for GraphQL, like Apollo Client or urql, offer
      normalized caching because they are aware of the schema and the relations
      between the entities.
    </p>
    <p>
      React Query only knows Promises - it doesn't actually know what's inside
      the cache.
    </p>
  </>,
  <>
    <p>
      In the long feature comparison list from the docs page, Normalized Caching
      is pretty much the only thing React Query flat out doesn't support. It's a
      pretty hard problem to solve and can add a lot of complexity, so the
      tradeoff we've chosen is to not support it. I think that for most
      applications, refetching upon invalidation works well and is easier to
      understand too.
    </p>
    <p>
      So yeah, if you're using GraphQL and need normalized caching, React Query
      might not be the right choice for you.
    </p>
  </>,
  <>
    <p>
      There is however a community tool I want to highlight called
      <code>normy</code>. It tries to bring automatic normalization and data
      updates to data fetching libraries, and it has integrations for React
      Query, swr and rtk-query, so you might want to check that out if it sounds
      interesting to you.
    </p>
    <p>
      Okay, so we don't do normalized caching because we try to keep things
      simple, yet...
    </p>
  </>,
  <>
    <p>
      I still hear that React Query is complex and has a steep learning curve.
    </p>
    <p>
      If something is "easy to understand" for someone is always subjective -
      Things that are straight-forward for you might be a total mystery to me.
    </p>
    <p>
      But it's undeniable that React Query, like any concept worth applying, has
      a learning curve, and it also has an API surface that isn't particularly
      small.
    </p>
  </>,
  <>
    <p>
      I went into a lot of details about React Query's API design in my talk at
      the React Advanced Conference earlier this year, so definitely check that
      one out if you want an in-depth look at this topic.
    </p>
    <p>
      Just to touch on it - Tanner has a great tweet summarising the
      design-goals of React Query, where he says that ...
    </p>
  </>,
  <>
    <p>
      @Tan_Stack Query's API is actually medium sized when you unpack it all,
      but the most important part is that you can understand and learn how to
      use it by starting with a single function that provides 80% of the entire
      value proposition first try. From there, the rest of its API can be
      gradually learned if needed.
    </p>
    <p>
      So while Query's API might seem overwhelming at first, you don't need to
      learn everything at once.
    </p>
  </>,
  <p>
    You can start with <code>useQuery</code> with the minimal required options,
    which will already give you a ton of things:
  </p>,
  <p>
    Caching, Request Deduplication, stale-while-revalidate background updates,
    global state management, automatic garbage collection, handling loading
    states, error states + retries, the list goes on ...
  </p>,
  <p>
    Then you might add a <code>useMutation</code> for performing updates and
    tying them to queries with query invalidation; that's already a bit more
    code, but you can really get very far with just those two (
    <code>useQuery</code> and <code>useMutation</code>).
  </p>,
  <p>
    And as your app complexity grows, you might want to look deeper into what
    React Query has to offer.
  </p>,
  <p>
    Maybe you want to add an optimistic update, or an infinite query - those are
    certainly a bit more involved.
  </p>,
  <>
    <p>
      And all the way on the right side of the scale, we have our Persister
      Plugins and fine-grained direct cache subscriptions, which are really
      powerful & flexible. We e.g. use them to build our devtools.
    </p>
    <p>
      Once you reach a certain application complexity, you are probably happy
      that those exist, but ...
    </p>
  </>,
  <>
    <p>...the Query API is absolutely designed to evolve with you.</p>
    <p>
      So don't believe that it's necessary to learn everything from the start if
      that feels overwhelming. Yes, there's a lot to learn, but you can get
      there incrementally.
    </p>
    <p>
      Okay so once you've learned the API and you're thinking that it's actually
      great...
    </p>
  </>,
  <p>
    ... you might want to start managing ALL your state with it. But since React
    Query is bad...
  </p>,
  <p>
    it really doesn't want you to do that. React Query is really designed to
    work with async state - it's...
  </p>,
  <p>
    an Async State manager that knows about the need of server state. It knows
    that the data we're seeing is only a snapshot of the source of truth, which
    lives on the server. It revalidates it and keeps what we see up-to-date, ...
  </p>,
  <>
    <p>
      because it's also a data synchronization tool. It also makes assumptions
      about your connectivity status and potentially retries getting that state.
    </p>
    <p>
      This is what we love about React Query, but those are all things you don't
      need when you're storing something synchronous like a side-bar-state
      toggle....
    </p>
  </>,
  <>
    <p>
      IF I had to write that with React Query, this is probably what it would
      look like, which is far from ideal.
    </p>
    <p>We need to:</p>
  </>,
  <p>
    1) come up with a unique key like <code>sidebarState</code> that can't
    collide with anything else
  </p>,
  <p>
    2) we don't actually need a <code>queryFn</code> because there is no async
    work to be done. We just pass <code>initialData</code> and update that with{" "}
    <code>setQueryData</code>.
  </p>,
  <>
    <p>
      3) and we need to turn of a bunch of configs to stop React Query from
      doing what it does best - managing and synchronizing async state.
    </p>
    <p>
      This isn't easy to get right, it's verbose and it's not very efficient
      either.
    </p>
    <p>
      The split in client state and server state is very much on purpose,
      because they have different needs. So let's use the right tool for the
      right job. There are plenty of solutions available to manage client state,
      for example:
    </p>
  </>,
  <>
    <p>
      <code>zustand</code> - it's minimal, efficient and un-opinionated. We
      define a store with our state and actions to update that state. I've then
      created a custom hook to keep the same API as the previous implementation.
    </p>
    <p>
      A quite similar solution I also really like is <code>xstate/store</code>
    </p>
  </>,
  <>
    <p>because it works a bit better in TypeScript and is event driven.</p>
    <p>
      But the thing is, there are no surprises with either one, they are both
      perfectly capable of efficiently managing that client state for us, so
      they are definitely better choices than using React Query for everything.
    </p>
    <p>
      Okay, so finally, the last thing I'm often hearing is quite funny: Why do
      I even need a 3rd party library to do something as basic as data fetching
      - why{" "}
    </p>
  </>,
  <>
    <p>why isn't this built into React?</p>
    <p>
      I can't really answer that because I don't work on React, but I've
      certainly felt the frustration myself that we don't have a first class
      async primitive built into React ...
    </p>
  </>,
  <>
    <p>
      like for example
      <code>createResource</code> in solidJs
    </p>
    <p>
      But I think the reason could be that the React team really wants to get an
      API right before they ship it. As an example,
    </p>
  </>,
  <>
    <p>
      we're still wondering why they didn't ship context selectors - something
      that a lot of people have been requesting to get fine-grained
      subscriptions to a context.
    </p>
    <p>
      In this example, we'd have a <code>SettingsContext</code> that contains a
      bunch of settings, but <code>useTheme</code> is only interested in updates
      to the theme value, and <code>useColor</code> should only re-render if
      color has changed.
    </p>
    <p>
      The change itself would probably not be hard to implement - but they
      aren't doing it because the React team has a different vision - a place
      where ...
    </p>
  </>,
  <>
    <p>
      we can call the new <code>use</code> operator inside <code>useMemo</code>,
      and React will bail out of rendering if we return the same values.
    </p>
    <p>
      Now this already composes a lot better than selectors, and eventually,
      this might lead to a place where we can just write ...
    </p>
  </>,
  <>
    <p>
      that code without <code>useMemo</code> thanks to the React Compiler.
    </p>
    <p>
      This is a great vision, but it takes time to get there (so this doesn't
      exist yet), and I think with data fetching, it's a similar story. Everyone
      "just wants useQuery", but the React Team thinks bigger.
    </p>
  </>,
  <>
    <p>
      Suspense is a beautiful architecture where your components get de-coupled
      from handling loading and error states. It works so well with TypeScript
      too because data can’t be <code>undefined</code>.
    </p>
    <p>And of course, the vision goes beyond client-side data fetching.</p>
  </>,
  <p>
    To solve problems at a scale, React now spans to the server as well thanks
    to Server Components. I wish I had a quote but I couldn't find a good one
    from the React team, so I'm just gonna say it:
  </p>,
  <p>
    Suspense and Server Components ARE the async primitive we've been waiting
    for. And if you're able to work with a framework that supports Server
    Components, please use them, and until then - <code>useQuery</code>.
  </p>,
  <p>That's al I got, thank you 🙇‍♂️</p>,
];

export const TheBadPartsPresentation = () => {
  const activePage = React.useMemo(() => {
    if (typeof window === "undefined") return 1;
    const page = new URLSearchParams(window.location.search).get("page");
    return page ? Math.min(Math.max(Number(page), 1), slides.length) : 1;
  }, []);

  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      items: slides.map((slide, index) => ({
        id: `react-query-the-bad-parts-${index + 1}`,
        renderItem: <Slide index={index}>{slide}</Slide>,
      })),
      initialActiveItem: activePage - 1,
    });

  React.useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        slideToPrevItem();
      } else if (event.key === "ArrowRight") {
        slideToNextItem();
      }
    };
    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, [slideToPrevItem, slideToNextItem]);

  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col gap-2">
      <div ref={ref} className="relative flex flex-col overflow-hidden">
        <button
          type="button"
          className="absolute top-1/3 md:top-0 bottom-0 z-[1] flex items-start md:items-center justify-center bg-transparent border-0 text-center opacity-50 hover:opacity-100 transition-opacity duration-150 ease-in-out cursor-pointer text-text"
          onClick={slideToPrevItem}
        >
          <span aria-label="previous slide" className="inline-flex h-8 w-8">
            <svg
              viewBox="0 0 16 16"
              className="h-8 w-8 fill-current"
              aria-hidden="true"
            >
              <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-1/3 md:top-0 right-0 bottom-0 z-[1] flex items-start md:items-center justify-center bg-transparent border-0 text-center opacity-50 hover:opacity-100 transition-opacity duration-150 ease-in-out cursor-pointer text-text"
          onClick={slideToNextItem}
        >
          <span aria-label="next slide" className="inline-flex h-8 w-8">
            <svg
              viewBox="0 0 16 16"
              className="h-8 w-8 fill-current"
              aria-hidden="true"
            >
              <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </span>
        </button>
        <div className="grow">{carouselFragment}</div>
      </div>
    </div>
  );
};
