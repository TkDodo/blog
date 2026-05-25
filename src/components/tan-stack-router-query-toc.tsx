import { rqSeriesItems, tsrSeriesItems } from "./series-data";
import SeriesToc from "./series-toc";

const postId = "tan-stack-router-and-query";
const routerTabId = "tan-stack-router-and-query-toc-router";
const queryTabId = "tan-stack-router-and-query-toc-query";

export function TanStackRouterQueryToc() {
  return (
    <div className="dual-series-toc bg-ic-bg/45 border-border rounded-lg border">
      <style>{`
        .dual-series-toc__input {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }

        .dual-series-toc__panel {
          display: none;
        }

        #${routerTabId}:checked ~ .dual-series-toc__tabs label[for="${routerTabId}"],
        #${queryTabId}:checked ~ .dual-series-toc__tabs label[for="${queryTabId}"] {
          background: var(--color-ic-bg);
          color: var(--color-text);
          font-weight: 700;
        }

        #${routerTabId}:focus-visible ~ .dual-series-toc__tabs label[for="${routerTabId}"],
        #${queryTabId}:focus-visible ~ .dual-series-toc__tabs label[for="${queryTabId}"] {
          outline: 2px solid var(--color-primary);
          outline-offset: 2px;
          box-shadow: 0 0 0 4px color-mix(in srgb, var(--color-primary) 24%, transparent);
        }

        #${routerTabId}:checked ~ .dual-series-toc__panels .dual-series-toc__panel--router,
        #${queryTabId}:checked ~ .dual-series-toc__panels .dual-series-toc__panel--query {
          display: block;
        }
      `}</style>

      <input
        className="dual-series-toc__input"
        defaultChecked
        id={routerTabId}
        name="tan-stack-router-and-query-toc"
        type="radio"
      />
      <input
        className="dual-series-toc__input"
        id={queryTabId}
        name="tan-stack-router-and-query-toc"
        type="radio"
      />

      <div className="dual-series-toc__tabs border-border flex border-b p-1">
        <label
          className="text-subtle hover:bg-ic-bg grow cursor-pointer rounded px-3 py-2 text-center text-sm font-bold tracking-wide uppercase transition-colors duration-200"
          htmlFor={routerTabId}
        >
          TanStack Router
        </label>
        <label
          className="text-subtle hover:bg-ic-bg grow cursor-pointer rounded px-3 py-2 text-center text-sm font-bold tracking-wide uppercase transition-colors duration-200"
          htmlFor={queryTabId}
        >
          React Query
        </label>
      </div>

      <div className="dual-series-toc__panels">
        <div className="dual-series-toc__panel dual-series-toc__panel--router">
          <SeriesToc framed={false} id={postId} items={tsrSeriesItems} />
        </div>
        <div className="dual-series-toc__panel dual-series-toc__panel--query">
          <SeriesToc framed={false} id={postId} items={rqSeriesItems} />
        </div>
      </div>
    </div>
  );
}
