const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
const withBasePath = (url: string) =>
  url.startsWith("/") ? `${basePath}${url}` : url;

export function QueryGG() {
  return (
    <a href="https://query.gg/?s=dom" target="_blank" rel="noopener noreferrer">
      <img
        src={withBasePath("/images/query-gg.jpg")}
        alt="Query.gg - The official React Query course"
        loading="lazy"
        className="w-full rounded-lg"
      />
    </a>
  );
}
