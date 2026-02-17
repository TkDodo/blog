import SeriesToc from "./series-toc";
import { rqSeriesItems } from "./series-data";

type Props = {
  id?: string;
};

export function RqToc({ id }: Props) {
  return <SeriesToc id={id} items={rqSeriesItems} />;
}
