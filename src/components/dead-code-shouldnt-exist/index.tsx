import { PresentationCarousel } from "@components/presentation-carousel";
import * as React from "react";
import { Slide } from "./slide";
import { slides } from "./slides";

function getColorMode(): "light" | "dark" {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function useColorMode() {
  const [colorMode, setColorMode] = React.useState<"light" | "dark">(
    getColorMode,
  );

  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setColorMode(getColorMode());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return colorMode;
}

const transcript = slides.map(({ notes }) => (
  <>
    {notes
      .split(/\n\s*\n/)
      .filter(Boolean)
      .map((paragraph, index) => (
        <p key={index} className="whitespace-pre-line">
          {paragraph}
        </p>
      ))}
  </>
));

export function DeadCodePresentation() {
  const colorMode = useColorMode();

  return (
    <PresentationCarousel
      slides={transcript}
      slideIdPrefix="dead-code-shouldnt-exist-slide"
      renderSlide={(slide, index) => (
        <Slide
          index={index}
          colorMode={colorMode}
          alt={slides[index]?.alt ?? `Slide ${index + 1}`}
        >
          {slide}
        </Slide>
      )}
    />
  );
}
