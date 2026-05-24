import { memoSeriesItems } from "./series-data";
import SeriesToc from "./series-toc";

interface Props {
  id?: string;
}

export function MemoToc({ id }: Props) {
  return <SeriesToc id={id} items={memoSeriesItems} />;
}
