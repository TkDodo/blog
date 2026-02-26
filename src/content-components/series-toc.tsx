interface SeriesItem {
  id: string;
  title: string;
}

interface Props {
  id?: string;
  items: ReadonlyArray<SeriesItem>;
}

export default function SeriesToc({ id, items }: Props) {
  if (!id) return null;

  return (
    <div className="rounded-lg bg-(--color-ic-bg) p-4">
      <ul className="!my-2 flex list-none flex-col gap-[0.125rem] !p-0">
        {items.map((item) => {
          if (item.id === id) {
            return (
              <li key={item.id} className="!m-0">
                <span className="block leading-relaxed font-bold">
                  {item.title}
                </span>
              </li>
            );
          }

          return (
            <li key={item.id} className="!m-0">
              <span className="block leading-relaxed">
                <a href={`./${item.id}`}>{item.title}</a>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
