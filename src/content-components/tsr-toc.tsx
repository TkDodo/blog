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
        display: "flex",
        flexDirection: "column",
        listStyleType: "none",
        gap: "0.7rem",
        paddingTop: "0.5rem",
        paddingBottom: "1rem",
        paddingLeft: 0,
      }}
    >
      {mapping.map((item) => {
        if (item.id === id) {
          return (
            <li key={item.id}>
              <b>{item.title}</b>
            </li>
          );
        }

        return (
          <li key={item.id}>
            <a href={`./${item.id}`}>{item.title}</a>
          </li>
        );
      })}
    </ul>
  );
}
