import { usSeriesItems } from "./series-data";
import SeriesToc from "./series-toc";

interface Props {
  id?: string;
}

export function UsToc({ id }: Props) {
  return <SeriesToc id={id} items={usSeriesItems} />;
}
