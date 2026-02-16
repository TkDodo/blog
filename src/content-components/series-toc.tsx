type SeriesItem = {
  id: string;
  title: string;
};

type Props = {
  id?: string;
  items: ReadonlyArray<SeriesItem>;
};

export default function SeriesToc({ id, items }: Props) {
  if (!id) return null;

  return (
    <ul className="m-0 flex list-none flex-col gap-[0.125rem] pt-1 pb-2 pl-0">
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
  );
}
