export function Presentation() {
  return (
    <div style={{ margin: "1.5rem 0" }}>
      <iframe
        src="https://gitnation.com/contents/react-query-the-bad-parts"
        title="React Query - The Bad Parts"
        loading="lazy"
        style={{
          width: "100%",
          minHeight: "70vh",
          border: "1px solid var(--color-border)",
          borderRadius: "0.5rem",
        }}
      />
    </div>
  );
}

export function TheBadPartsPresentation() {
  return <Presentation />;
}
