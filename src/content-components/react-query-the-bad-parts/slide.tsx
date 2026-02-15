import type { ReactNode } from "react";

type SlideProps = {
  children: ReactNode;
  index: number;
};

export function Slide({ children, index }: SlideProps) {
  const src = `${import.meta.env.BASE_URL}images/react-query-the-bad-parts/${index + 1}.png`;

  return (
    <div className="grow cursor-grab flex flex-col">
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className="h-[300px] md:h-[400px] lg:h-[500px] w-full object-contain object-center"
      />
      <hr className="my-4 border-border" />
      <div className="text-text">{children}</div>
    </div>
  );
}
