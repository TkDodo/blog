type Props = {
  id?: string;
};

const mapping = [
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
];

export function DsToc({ id }: Props) {
  if (!id) return null;

  return (
    <ul
      style={{
        listStyleType: "none",
        margin: 0,
        paddingTop: "0.5rem",
        paddingBottom: "1rem",
        paddingLeft: "0.75rem",
        fontSize: "1rem",
        lineHeight: "1.625",
      }}
    >
      {mapping.map((item) => {
        if (item.id === id) {
          return (
            <li key={item.id} style={{ margin: 0 }}>
              <b>{item.title}</b>
            </li>
          );
        }

        return (
          <li key={item.id} style={{ margin: 0 }}>
            <a href={`./${item.id}`}>{item.title}</a>
          </li>
        );
      })}
    </ul>
  );
}
