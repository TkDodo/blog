import * as React from "react";
import type { PresentationCarouselProps } from "./presentation-carousel-types";

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
