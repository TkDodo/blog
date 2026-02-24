interface Props {
  height?: string;
}

export function VerticalRuler({ height = "4rem" }: Props) {
  const heightClass =
    height === "15em" ? "h-[15em]" : height === "5em" ? "h-[5em]" : "h-16";

  return (
    <hr
      className={`w-1 ${heightClass} bg-primary my-[5em] mx-auto border-0 rounded-[5px]`}
    />
  );
}
