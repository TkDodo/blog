import * as React from "react";
import { useSpringCarousel } from "react-spring-carousel";

type PresentationCarouselProps = {
  slides: ReadonlyArray<React.ReactNode>;
  slideIdPrefix: string;
  renderSlide: (slide: React.ReactNode, index: number) => React.ReactNode;
  contentClassName?: string;
};

export function PresentationCarousel({
  slides,
  slideIdPrefix,
  renderSlide,
  contentClassName = "grow",
}: PresentationCarouselProps) {
  const activePage = React.useMemo(() => {
    if (typeof window === "undefined") return 1;
    const page = new URLSearchParams(window.location.search).get("page");
    return page ? Math.min(Math.max(Number(page), 1), slides.length) : 1;
  }, [slides.length]);

  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      items: slides.map((slide, index) => ({
        id: `${slideIdPrefix}-${index + 1}`,
        renderItem: renderSlide(slide, index),
      })),
      initialActiveItem: activePage - 1,
    });

  React.useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        slideToPrevItem();
      } else if (event.key === "ArrowRight") {
        slideToNextItem();
      }
    };
    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, [slideToPrevItem, slideToNextItem]);

  return (
    <div className="flex flex-col gap-2">
      <div className="relative flex flex-col overflow-hidden">
        <button
          type="button"
          className="absolute top-1/3 md:top-0 bottom-0 z-[1] flex items-start md:items-center justify-center bg-transparent border-0 text-center opacity-50 hover:opacity-100 transition-opacity duration-150 ease-in-out cursor-pointer text-text"
          onClick={slideToPrevItem}
        >
          <span aria-label="previous slide" className="inline-flex h-8 w-8">
            <svg
              viewBox="0 0 16 16"
              className="h-8 w-8 fill-current"
              aria-hidden="true"
            >
              <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-1/3 md:top-0 right-0 bottom-0 z-[1] flex items-start md:items-center justify-center bg-transparent border-0 text-center opacity-50 hover:opacity-100 transition-opacity duration-150 ease-in-out cursor-pointer text-text"
          onClick={slideToNextItem}
        >
          <span aria-label="next slide" className="inline-flex h-8 w-8">
            <svg
              viewBox="0 0 16 16"
              className="h-8 w-8 fill-current"
              aria-hidden="true"
            >
              <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </span>
        </button>
        <div className={contentClassName}>{carouselFragment}</div>
      </div>
    </div>
  );
}
