import SeriesToc from "./series-toc";
import { hsSeriesItems } from "./series-data";

type Props = {
  id?: string;
};

export function HsToc({ id }: Props) {
  return <SeriesToc id={id} items={hsSeriesItems} />;
}
