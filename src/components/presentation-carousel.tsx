import type { PresentationCarouselProps } from "./presentation-carousel-types";
import * as React from "react";

export function PresentationCarousel(props: PresentationCarouselProps) {
  const [ClientCarousel, setClientCarousel] =
    React.useState<React.ComponentType<PresentationCarouselProps> | null>(null);

  React.useEffect(() => {
    let mounted = true;
    import("./presentation-carousel-client").then((module) => {
      if (mounted) {
        setClientCarousel(() => module.PresentationCarouselClient);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (!ClientCarousel) return null;
  return <ClientCarousel {...props} />;
}
