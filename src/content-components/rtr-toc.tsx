import SeriesToc from "./series-toc";
import { rtrSeriesItems } from "./series-data";

type Props = {
  id?: string;
};

export function RtrToc({ id }: Props) {
  return <SeriesToc id={id} items={rtrSeriesItems} />;
}
