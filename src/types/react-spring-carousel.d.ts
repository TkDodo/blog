declare module "react-spring-carousel" {
  import type * as React from "react";

  export type SpringCarouselItem = {
    id: string;
    renderItem: React.ReactNode;
  };

  export type SpringCarouselEvent = {
    eventName: string;
    currentItem: {
      index: number;
    };
  };

  export function useSpringCarousel(options: {
    items: SpringCarouselItem[];
    initialActiveItem?: number;
  }): {
    carouselFragment: React.ReactNode;
    slideToPrevItem: () => void;
    slideToNextItem: () => void;
    useListenToCustomEvent: (callback: (event: SpringCarouselEvent) => void) => void;
  };
}
