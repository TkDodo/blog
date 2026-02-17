import SeriesToc from "./series-toc";
import { tsrSeriesItems } from "./series-data";

type Props = {
  id?: string;
};

export function TsrToc({ id }: Props) {
  return <SeriesToc id={id} items={tsrSeriesItems} />;
}
