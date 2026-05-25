import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { TanStackRouterQueryToc } from "./tan-stack-router-query-toc";

describe("TanStackRouterQueryToc", () => {
  it("renders the dual series as tabs", () => {
    const markup = renderToStaticMarkup(<TanStackRouterQueryToc />);

    expect(markup).toContain("TanStack Router");
    expect(markup).toContain("React Query");
    expect(markup).toContain('type="radio"');
    expect(markup).toContain(":focus-visible");
    expect(markup).toContain("#3: TanStack Router and Query");
    expect(markup).toContain("#32: TanStack Router and Query");
  });
});
