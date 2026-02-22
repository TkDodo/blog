import EthicalAds from "components/EthicalAds";

interface Translation {
  language?: string;
  url?: string;
}

interface Props {
  translations?: Translation[];
}

function isTranslation(input: unknown): input is Translation {
  if (!input || typeof input !== "object") return false;
  const entry = input as Translation;
  return typeof entry.language === "string" && typeof entry.url === "string";
}

export default function Translations({ translations = [] }: Props) {
  const links = translations.filter(isTranslation);

  return (
    <>
      <div className="not-prose my-4 md:my-[1.125rem] rounded-lg bg-(--color-ic-bg) p-4 md:p-[1.125rem]">
        <ul className="m-0 flex list-none flex-wrap items-center gap-4 md:gap-[1.125rem] p-0 text-base lg:text-[1.125rem] leading-normal">
          {links.length > 0 ? (
            links.map((entry) => (
              <li key={entry.url} className="rounded-lg border border-primary">
                <a
                  href={entry.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-block px-6 py-1 font-normal text-primary no-underline hover:underline leading-normal"
                >
                  {entry.language}
                </a>
              </li>
            ))
          ) : (
            <li className="text-subtle">
              <i>No translations available.</i>
            </li>
          )}
          <li className="flex">
            <a
              href="https://github.com/TkDodo/blog/blob/main/CONTRIBUTING.md#translations"
              target="_blank"
              rel="noreferrer noopener"
              className="font-normal text-primary no-underline hover:underline leading-normal"
            >
              Add translation
            </a>
          </li>
        </ul>
      </div>
      <EthicalAds />
    </>
  );
}
