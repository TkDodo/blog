import type { ReactNode } from "react";

interface SlideProps {
  children: ReactNode;
  index: number;
  colorMode: "light" | "dark";
}

export function Slide({ children, index, colorMode }: SlideProps) {
  const baseUrl = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const src = `${baseUrl}images/react-query-api-design-lessons-learned/${colorMode}/${index + 1}.png`;

  return (
    <div className="flex grow cursor-grab flex-col">
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className="h-[300px] w-full object-contain object-center md:h-[400px] lg:h-[500px]"
      />
      <hr className="border-border my-4" />
      <div className="text-text">{children}</div>
    </div>
  );
}
