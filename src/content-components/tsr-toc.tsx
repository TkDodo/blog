import SeriesToc from "./series-toc";

type Props = {
  id?: string;
};

const TSR_SERIES = [
  {
    id: "the-beauty-of-tan-stack-router",
    title: "The Beauty of TanStack Router",
  },
  {
    id: "context-inheritance-in-tan-stack-router",
    title: "Context Inheritance in TanStack Router",
  },
  {
    id: "fixing-prefetching-mismatches-in-tan-stack-router",
    title: "Fixing Prefetching Mismatches in TanStack Router",
  },
];

export function TsrToc({ id }: Props) {
  if (!id) return null;

  return (
    <SeriesToc
      title="TanStack Router Series"
      currentId={id}
      items={TSR_SERIES}
    />
  );
}
