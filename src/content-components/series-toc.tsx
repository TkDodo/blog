interface SeriesItem {
  id: string;
  title: string;
}

/**
 * for internal logic only.
 */
interface ItemViewModel extends SeriesItem {
  /**
   * - positive: later (especially, 1 means the next one)
   * - zero: current
   * - negative: earlier (especially, -1 means the previous one)
   */
  diff: number;
}

interface Props {
  id?: string;
  items: ReadonlyArray<SeriesItem>;
}

export default function SeriesToc({ id, items }: Props) {
  if (!id) return null;

  const currentIndex = items.findIndex((item) => item.id === id);
  if (currentIndex === -1) return null;

  const itemsAsViewModel = items.map(
    (item, i): ItemViewModel => ({ ...item, diff: i - currentIndex }),
  );

  return (
    <div className="rounded-lg bg-(--color-ic-bg) p-4">
      <ul className="!my-2 flex list-none flex-col gap-[0.125rem] !p-0">
        {itemsAsViewModel.map((item) => {
          if (item.diff === 0) {
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
