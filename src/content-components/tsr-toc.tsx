import SeriesToc from "./series-toc";

type Props = {
  id?: string;
};

const items = [
  {
    id: "the-beauty-of-tan-stack-router",
    title: "#1: The Beauty of TanStack Router",
  },
  {
    id: "context-inheritance-in-tan-stack-router",
    title: "#2: Context Inheritance in TanStack Router",
  },
] as const;

export function TsrToc({ id }: Props) {
  return <SeriesToc id={id} items={items} />;
}
