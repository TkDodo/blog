import SeriesToc from "./series-toc";

type Props = {
  id?: string;
};

const items = [
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
] as const;

export function UsToc({ id }: Props) {
  return <SeriesToc id={id} items={items} />;
}
