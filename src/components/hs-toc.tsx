import { hsSeriesItems } from "./series-data";
import SeriesToc from "./series-toc";

interface Props {
  id?: string;
}

export function HsToc({ id }: Props) {
  return <SeriesToc id={id} items={hsSeriesItems} />;
}
