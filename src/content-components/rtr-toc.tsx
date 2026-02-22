import { rtrSeriesItems } from "./series-data";
import SeriesToc from "./series-toc";

interface Props {
  id?: string;
}

export function RtrToc({ id }: Props) {
  return <SeriesToc id={id} items={rtrSeriesItems} />;
}
