import SeriesToc from "./series-toc";
import { rcSeriesItems } from "./series-data";

type Props = {
  id?: string;
};

export function RcToc({ id }: Props) {
  return <SeriesToc id={id} items={rcSeriesItems} />;
}
