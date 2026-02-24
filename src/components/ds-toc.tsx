import { dsSeriesItems } from "./series-data";
import SeriesToc from "./series-toc";

interface Props {
  id?: string;
}

export function DsToc({ id }: Props) {
  return <SeriesToc id={id} items={dsSeriesItems} />;
}
