import type * as React from "react";

export interface PresentationCarouselProps {
  slides: ReadonlyArray<React.ReactNode>;
  slideIdPrefix: string;
  renderSlide: (slide: React.ReactNode, index: number) => React.ReactNode;
  contentClassName?: string;
}
