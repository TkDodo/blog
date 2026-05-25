import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import SeriesToc from "./series-toc";

describe("SeriesToc", () => {
  it("renders a title and marks the current item", () => {
    const markup = renderToStaticMarkup(
      <SeriesToc
        id="second-post"
        title="Example Series"
        items={[
          { id: "first-post", title: "#1: First Post" },
          { id: "second-post", title: "#2: Second Post" },
        ]}
      />,
    );

    expect(markup).toContain("Example Series");
    expect(markup).toContain("#2: Second Post");
    expect(markup).toContain("Current");
  });

  it("can render without its own frame", () => {
    const markup = renderToStaticMarkup(
      <SeriesToc
        framed={false}
        id="second-post"
        items={[
          { id: "first-post", title: "#1: First Post" },
          { id: "second-post", title: "#2: Second Post" },
        ]}
      />,
    );

    expect(markup).not.toContain("rounded-lg border");
    expect(markup).toContain("#2: Second Post");
  });
});
