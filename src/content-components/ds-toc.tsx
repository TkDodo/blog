import SeriesToc from "./series-toc";

type Props = {
  id?: string;
};

const items = [
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
] as const;

export function DsToc({ id }: Props) {
  return <SeriesToc id={id} items={items} />;
}
