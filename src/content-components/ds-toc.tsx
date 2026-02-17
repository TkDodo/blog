import SeriesToc from "./series-toc";
import { dsSeriesItems } from "./series-data";

type Props = {
  id?: string;
};

export function DsToc({ id }: Props) {
  return <SeriesToc id={id} items={dsSeriesItems} />;
}
