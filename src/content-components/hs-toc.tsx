import SeriesToc from "./series-toc";

type Props = {
  id?: string;
};

const items = [
  {
    id: "hooks-dependencies-and-stale-closures",
    title: "#1: Hooks, Dependencies and Stale Closures",
  },
  {
    id: "refs-events-and-escape-hatches",
    title: "#2: Refs, Events and Escape Hatches",
  },
] as const;

export function HsToc({ id }: Props) {
  return <SeriesToc id={id} items={items} />;
}
