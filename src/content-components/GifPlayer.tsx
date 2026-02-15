import { useState } from "react";

type Props = {
  gif: string;
  still?: string;
  alt?: string;
};

export default function GifPlayer({ gif, still, alt = "" }: Props) {
  const [playing, setPlaying] = useState(false);
  const stillSrc = still || gif;
  const src = playing ? gif : stillSrc;

  return (
    <figure className="my-4">
      <button
        type="button"
        onClick={() => setPlaying((prev) => !prev)}
        className="block border border-border rounded-lg p-0 overflow-hidden cursor-pointer bg-transparent"
        aria-label={playing ? "Pause animation" : "Play animation"}
      >
        <img src={`/${src}`} alt={alt} loading="lazy" />
      </button>
      <figcaption className="opacity-80 text-[0.9em]">
        {playing ? "Playing animation" : "Click image to play animation"}
      </figcaption>
    </figure>
  );
}
