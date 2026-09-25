import { DocSearch } from "@docsearch/react";
import "@docsearch/css";

export default function DocSearchReact() {
  return (
    <DocSearch
      appId={import.meta.env.PUBLIC_ALGOLIA_APP_ID}
      indices={["tkdodo"]}
      apiKey={import.meta.env.PUBLIC_ALGOLIA_API_KEY}
    />
  );
}
