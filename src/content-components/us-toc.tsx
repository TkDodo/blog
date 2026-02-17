import SeriesToc from "./series-toc";
import { usSeriesItems } from "./series-data";

type Props = {
  id?: string;
};

export function UsToc({ id }: Props) {
  return <SeriesToc id={id} items={usSeriesItems} />;
}
