interface SeriesItem {
  id: string;
  title: string;
}

export const rqSeriesItems = [
  { id: "practical-react-query", title: "#1: Practical React Query" },
  {
    id: "react-query-data-transformations",
    title: "#2: React Query Data Transformations",
  },
  {
    id: "react-query-render-optimizations",
    title: "#3: React Query Render Optimizations",
  },
  {
    id: "status-checks-in-react-query",
    title: "#4: Status Checks in React Query",
  },
  { id: "testing-react-query", title: "#5: Testing React Query" },
  {
    id: "react-query-and-type-script",
    title: "#6: React Query and TypeScript",
  },
  {
    id: "using-web-sockets-with-react-query",
    title: "#7: Using WebSockets with React Query",
  },
  {
    id: "effective-react-query-keys",
    title: "#8: Effective React Query Keys",
  },
  {
    id: "leveraging-the-query-function-context",
    title: "#8a: Leveraging the Query Function Context",
  },
  {
    id: "placeholder-and-initial-data-in-react-query",
    title: "#9: Placeholder and Initial Data in React Query",
  },
  {
    id: "react-query-as-a-state-manager",
    title: "#10: React Query as a State Manager",
  },
  {
    id: "react-query-error-handling",
    title: "#11: React Query Error Handling",
  },
  {
    id: "mastering-mutations-in-react-query",
    title: "#12: Mastering Mutations in React Query",
  },
  { id: "offline-react-query", title: "#13: Offline React Query" },
  {
    id: "react-query-and-forms",
    title: "#14: React Query and Forms",
  },
  { id: "react-query-fa-qs", title: "#15: React Query FAQs" },
  {
    id: "react-query-meets-react-router",
    title: "#16: React Query meets React Router",
  },
  {
    id: "seeding-the-query-cache",
    title: "#17: Seeding the Query Cache",
  },
  { id: "inside-react-query", title: "#18: Inside React Query" },
  {
    id: "type-safe-react-query",
    title: "#19: Type-safe React Query",
  },
  {
    id: "you-might-not-need-react-query",
    title: "#20: You Might Not Need React Query",
  },
  {
    id: "thinking-in-react-query",
    title: "#21: Thinking in React Query",
  },
  {
    id: "react-query-and-react-context",
    title: "#22: React Query and React Context",
  },
  {
    id: "why-you-want-react-query",
    title: "#23: Why You Want React Query",
  },
  {
    id: "the-query-options-api",
    title: "#24: The Query Options API",
  },
  {
    id: "automatic-query-invalidation-after-mutations",
    title: "#25: Automatic Query Invalidation after Mutations",
  },
  {
    id: "how-infinite-queries-work",
    title: "#26: How Infinite Queries work",
  },
  {
    id: "react-query-api-design-lessons-learned",
    title: "#27: React Query API Design - Lessons Learned",
  },
  {
    id: "react-query-the-bad-parts",
    title: "#28: React Query - The Bad Parts",
  },
  {
    id: "concurrent-optimistic-updates-in-react-query",
    title: "#29: Concurrent Optimistic Updates in React Query",
  },
  {
    id: "react-query-selectors-supercharged",
    title: "#30: React Query Selectors, Supercharged",
  },
] as const satisfies ReadonlyArray<SeriesItem>;

export const dsSeriesItems = [
  {
    id: "designing-design-systems",
    title: "#1: Designing Design Systems",
  },
  {
    id: "tooltip-components-should-not-exist",
    title: "#2: Tooltip Components Should Not Exist",
  },
  {
    id: "building-type-safe-compound-components",
    title: "#3: Building Type-Safe Compound Components",
  },
] as const satisfies ReadonlyArray<SeriesItem>;

export const usSeriesItems = [
  { id: "dont-over-use-state", title: "#1: Don't over useState" },
  { id: "putting-props-to-use-state", title: "#2: Putting props to useState" },
  {
    id: "things-to-know-about-use-state",
    title: "#3: Things to know about useState",
  },
  {
    id: "use-state-for-one-time-initializations",
    title: "#4: useState for one-time initializations",
  },
  { id: "use-state-vs-use-reducer", title: "#5: useState vs. useReducer" },
] as const satisfies ReadonlyArray<SeriesItem>;

export const tsrSeriesItems = [
  {
    id: "the-beauty-of-tan-stack-router",
    title: "#1: The Beauty of TanStack Router",
  },
  {
    id: "context-inheritance-in-tan-stack-router",
    title: "#2: Context Inheritance in TanStack Router",
  },
] as const satisfies ReadonlyArray<SeriesItem>;

export const hsSeriesItems = [
  {
    id: "hooks-dependencies-and-stale-closures",
    title: "#1: Hooks, Dependencies and Stale Closures",
  },
  {
    id: "refs-events-and-escape-hatches",
    title: "#2: Refs, Events and Escape Hatches",
  },
] as const satisfies ReadonlyArray<SeriesItem>;

export const rcSeriesItems = [
  {
    id: "avoiding-use-effect-with-callback-refs",
    title: "#1: Avoiding useEffect with callback refs",
  },
  {
    id: "ref-callbacks-react-19-and-the-compiler",
    title: "#2: Ref Callbacks, React 19 and the Compiler",
  },
] as const satisfies ReadonlyArray<SeriesItem>;

export const rtrSeriesItems = [
  {
    id: "road-to-refactoring",
    title: "#1: Don't mix refactorings with hotfixes",
  },
  {
    id: "always-provide-customer-value",
    title: "#2: Always provide customer value",
  },
  {
    id: "use-urgency",
    title: "#3: Use urgency",
  },
  {
    id: "refactor-impactfully",
    title: "#4: Refactor impactfully",
  },
] as const satisfies ReadonlyArray<SeriesItem>;

export const seriesByToc = {
  RqToc: rqSeriesItems,
  DsToc: dsSeriesItems,
  UsToc: usSeriesItems,
  TsrToc: tsrSeriesItems,
  HsToc: hsSeriesItems,
  RcToc: rcSeriesItems,
  RtrToc: rtrSeriesItems,
} as const;

export type TocName = keyof typeof seriesByToc;
