export function Presentation() {
  return (
    <div className="my-6">
      <iframe
        src="https://gitnation.com/contents/react-query-the-bad-parts"
        title="React Query - The Bad Parts"
        loading="lazy"
        className="w-full min-h-[70vh] border border-border rounded-lg"
      />
    </div>
  );
}

export function TheBadPartsPresentation() {
  return <Presentation />;
}
