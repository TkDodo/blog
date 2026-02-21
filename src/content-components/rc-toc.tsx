import { rcSeriesItems } from "./series-data";
import SeriesToc from "./series-toc";

interface Props {
  id?: string;
}

export function RcToc({ id }: Props) {
  return <SeriesToc id={id} items={rcSeriesItems} />;
}
