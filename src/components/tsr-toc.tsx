import { tsrSeriesItems } from "./series-data";
import SeriesToc from "./series-toc";

interface Props {
  id?: string;
}

export function TsrToc({ id }: Props) {
  return <SeriesToc id={id} items={tsrSeriesItems} />;
}
