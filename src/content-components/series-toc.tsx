import * as React from "react";

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

  const currentIndex = items.findIndex((item) => item.id === id);
  if (currentIndex === -1) return null;

  const itemsAsViewModel = items.map((item, i, { length }): ItemViewModel => {
    return {
      ...item,
      diff: i - currentIndex,
      edgeType: i === 0 ? "start" : i === length - 1 ? "end" : undefined,
    };
  });

  const currentEdgeType = itemsAsViewModel[currentIndex]!.edgeType;

  // always pick up 3 items around current one.
  const itemsInWindow = itemsAsViewModel.filter(({ diff }) => {
    if (currentEdgeType) return Math.abs(diff) <= 2;
    return Math.abs(diff) <= 1;
  });

  // non-component function. how view-model in array should be rendered
  function renderItem(item: ItemViewModel) {
    const { id, title } = item;
    const latest = item.edgeType === "end";
    if (item.diff === 0) {
      return <ListItemCurrent key={id} title={title} latest={latest} />;
    }
    const href = `./${id}`;
    return (
      <ListItemClickable key={id} title={title} href={href} latest={latest} />
    );
  }

  return (
    <div className="rounded-lg bg-ic-bg/45 border border-border">
      {/* Maybe you can give a title to the series and display it here */}

      <div className="px-4 py-2">
        <List>
          {itemsInWindow[0].edgeType !== "start" && (
            <ListItemEllipsis srText="Earlier parts of the series are hidden" />
          )}
          {itemsInWindow.map(renderItem)}
          {itemsInWindow.at(-1)?.edgeType !== "end" && (
            <ListItemEllipsis srText="Later parts of the series are hidden" />
          )}
        </List>
      </div>

      {itemsAsViewModel.length > itemsInWindow.length && (
        <details className="border-t-2 border-border">
          <summary className="px-4 py-2 leading-relaxed text-subtle cursor-pointer transition-colors duration-200 hover:bg-ic-bg">
            All {itemsAsViewModel.length} parts in the series
          </summary>
          <div className="px-4 pb-2">
            <List indented>{itemsAsViewModel.map(renderItem)}</List>
          </div>
        </details>
      )}
    </div>
  );
}

// #region internal helpers

/**
 * Item data type with extra info for rendering logic.
 */
interface ItemViewModel extends SeriesItem {
  /**
   * difference in the formula: `{this item's index} - {current item's index}`.
   * 
   * - positive: later (especially, 1 means the next one)
   * - zero: current
   * - negative: earlier (especially, -1 means the previous one)
   */
  diff: number;
  /**
   * - `"start"`: the first item of series
   * - `"end"`: the last item of series
   * - undefined otherwise
   */
  edgeType: "start" | "end" | undefined;
}

interface ListProps {
  indented?: boolean;
  children: React.ReactNode;
}

function List({ indented = false, children }: ListProps) {
  return (
    <ul
      className={cn(
        "!my-2 flex list-none flex-col gap-[0.125rem]",
        indented ? "!py-0 !px-2" : "!p-0",
      )}
    >
      {children}
    </ul>
  );
}

function ListItemEllipsis({ srText }: { srText: React.ReactNode }) {
  return (
    <li className="!m-0 !p-0">
      <div className="leading-relaxed text-faded">
        <span aria-hidden="true" className="inline-block px-4">
          &#8942;
        </span>
        <span className="sr-only">{srText}</span>
      </div>
    </li>
  );
}

interface ListItemProps {
  title: string;
  latest?: boolean;
}

function ListItemCurrent({ title, latest = false }: ListItemProps) {
  return (
    <li className="!m-0 !p-0">
      <span className="block leading-relaxed font-bold">
        <span>{title}</span>
        <Marker>Current</Marker>
        {latest && <Marker>Latest</Marker>}
      </span>
    </li>
  );
}

function ListItemClickable({
  title,
  href,
  latest = false,
}: ListItemProps & { href: string }) {
  return (
    <li className="!m-0 !p-0">
      <span className="block leading-relaxed">
        <a href={href}>
          <span>{title}</span>
          {latest && <Marker>Latest</Marker>}
        </a>
      </span>
    </li>
  );
}

/**
 * Use at the tail of the `ListItem`s.
 */
function Marker({ children }: { children: React.ReactNode }) {
  return (
    <span className="ml-2 text-xs md:text-sm text-faded uppercase font-bold">
      {children}
    </span>
  );
}

// TODO: meybe need to use Tailwind-dedicated class concat utility like twmerge
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
