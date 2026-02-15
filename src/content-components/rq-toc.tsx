import SeriesToc from "./series-toc";

type Props = {
  id?: string;
};

const RQ_SERIES = [
  { id: "practical-react-query", title: "Practical React Query" },
  { id: "status-checks-in-react-query", title: "Status Checks in React Query" },
  { id: "testing-react-query", title: "Testing React Query" },
  { id: "react-query-and-type-script", title: "React Query and TypeScript" },
  { id: "effective-react-query-keys", title: "Effective React Query Keys" },
  { id: "react-query-fa-qs", title: "React Query FAQs" },
  {
    id: "mastering-mutations-in-react-query",
    title: "Mastering Mutations in React Query",
  },
  { id: "react-query-error-handling", title: "React Query Error Handling" },
  {
    id: "react-query-data-transformations",
    title: "React Query Data Transformations",
  },
  {
    id: "react-query-as-a-state-manager",
    title: "React Query as a State Manager",
  },
  {
    id: "react-query-meets-react-router",
    title: "React Query meets React Router",
  },
  { id: "inside-react-query", title: "Inside React Query" },
  {
    id: "placeholder-and-initial-data-in-react-query",
    title: "Placeholder and Initial Data",
  },
  { id: "the-query-options-api", title: "The Query Options API" },
  { id: "how-infinite-queries-work", title: "How Infinite Queries work" },
  { id: "seeding-the-query-cache", title: "Seeding the Query Cache" },
  {
    id: "automatic-query-invalidation-after-mutations",
    title: "Automatic Query Invalidation",
  },
  {
    id: "react-query-selectors-supercharged",
    title: "React Query Selectors, Supercharged",
  },
  {
    id: "concurrent-optimistic-updates-in-react-query",
    title: "Concurrent Optimistic Updates",
  },
];

export function RqToc({ id }: Props) {
  if (!id) return null;

  return (
    <SeriesToc title="React Query Series" currentId={id} items={RQ_SERIES} />
  );
}
