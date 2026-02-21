import { rqSeriesItems } from "./series-data";
import SeriesToc from "./series-toc";

interface Props {
  id?: string;
}

export function RqToc({ id }: Props) {
  return <SeriesToc id={id} items={rqSeriesItems} />;
}
