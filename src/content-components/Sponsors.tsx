type Sponsor = {
  name: string;
  url: string;
  image: string;
  tier: string;
  imageAlt?: string;
};

const sponsors: Sponsor[] = [
  {
    name: "Tanner Linsley",
    url: "https://tanstack.com/",
    image: "https://avatars.githubusercontent.com/u/5580297?s=400",
    tier: "💍 Platinum",
  },
  {
    name: "Workleap",
    url: "https://www.workleap.com",
    image: "https://avatars.githubusercontent.com/u/53535748?s=400",
    tier: "💎 Diamond",
  },
  {
    name: "wevm",
    url: "https://wevm.dev/",
    image: "https://avatars.githubusercontent.com/u/109633172?s=400",
    tier: "🥇 Gold",
  },
  {
    name: "React Bricks",
    url: "https://reactbricks.com/",
    image: "/images/reactbricks.svg",
    tier: "🥉 Bronze",
  },
  {
    name: "WorkflowGen",
    url: "https://www.workflowgen.com/",
    image: "/images/workflowgen.png",
    tier: "🥳 Sponsor",
  },
  {
    name: "Jonas Daniels",
    url: "https://github.com/jnsdls",
    image: "https://avatars.githubusercontent.com/u/8204858?s=400",
    tier: "🥳 Sponsor",
  },
  {
    name: "MonoLisa",
    url: "https://www.monolisa.dev/?ref=dominik",
    image: "/images/monolisa.jpeg",
    tier: "🥳 Sponsor",
  },
  {
    name: "Nadav Lebovitch",
    url: "https://github.com/nadavl",
    image: "https://avatars.githubusercontent.com/u/5332234?s=400",
    tier: "🥳 Sponsor",
  },
  {
    name: "Jeremy Brown",
    url: "https://github.com/jlbmagic",
    image: "https://avatars.githubusercontent.com/u/20194907?s=400",
    tier: "🥳 Sponsor",
  },
  {
    name: "deliver.media",
    url: "https://deliver.media/",
    image: "https://avatars.githubusercontent.com/u/120005519?s=400",
    tier: "🥳 Sponsor",
  },
  {
    name: "Matt Sutkowski",
    url: "https://github.com/msutkowski",
    image: "https://avatars.githubusercontent.com/u/784953?s=400",
    tier: "🎗 Supporter",
  },
  {
    name: "Thomas Ballinger",
    url: "https://ballingt.com",
    image: "/images/ballingt.jpg",
    tier: "🎗 Supporter",
  },
  {
    name: "Robin Wieruch",
    url: "https://www.robinwieruch.de/",
    image: "https://avatars.githubusercontent.com/u/2479967?s=400",
    tier: "🎗 Supporter",
  },
  {
    name: "Venue Ink",
    url: "https://www.venue.ink/",
    image: "https://avatars.githubusercontent.com/u/67328248?s=400",
    tier: "🎗 Supporter",
  },
  {
    name: "nuqs",
    url: "https://nuqs.dev/",
    image: "https://avatars.githubusercontent.com/u/43356325?s=400",
    imageAlt: "47ng",
    tier: "🪙 Custom",
  },
];

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

const withBasePath = (url: string) =>
  url.startsWith("/") ? `${basePath}${url}` : url;

export default function Sponsors() {
  return (
    <div>
      <a
        href="https://github.com/sponsors/TkDodo"
        target="_blank"
        rel="noreferrer noopener"
        className="text-primary hover:underline"
      >
        <h3 className="text-2xl font-semibold">🎗 Sponsor me on Github 🎗</h3>
      </a>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {sponsors.map((sponsor) => (
          <article
            key={sponsor.name}
            className="w-full max-w-[28rem] lg:max-w-none mx-auto rounded-lg border border-border bg-bg p-4"
          >
            <a
              href={sponsor.url}
              target="_blank"
              rel="noreferrer noopener"
              className="block hover:no-underline"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-text">
                {sponsor.name}
              </h2>
              <img
                src={withBasePath(sponsor.image)}
                alt={sponsor.imageAlt ?? sponsor.name}
                height={300}
                loading="lazy"
                className="mt-3 w-full h-auto rounded-md bg-white"
              />
            </a>
            <p className="mt-3 text-subtle">{sponsor.tier}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
