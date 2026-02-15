type Props = {
  id?: string;
};

const mapping = [
  {
    id: "the-beauty-of-tan-stack-router",
    title: "#1: The Beauty of TanStack Router",
  },
  {
    id: "context-inheritance-in-tan-stack-router",
    title: "#2: Context Inheritance in TanStack Router",
  },
];

export function TsrToc({ id }: Props) {
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
