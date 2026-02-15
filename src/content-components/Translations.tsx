import type { ReactNode } from "react";

type Translation = {
  language?: string;
  url?: string;
};

type Props = {
  children?: ReactNode;
};

function isTranslation(input: unknown): input is Translation {
  if (!input || typeof input !== "object") return false;
  const entry = input as Translation;
  return typeof entry.language === "string" && typeof entry.url === "string";
}

function extractTranslations(input: unknown): Translation[] {
  if (isTranslation(input)) {
    return [input];
  }

  if (Array.isArray(input)) {
    return input.flatMap(extractTranslations);
  }

  return [];
}

export default function Translations({ children }: Props) {
  const links = extractTranslations(children);

  return (
    <div className="not-prose my-4 md:my-[1.125rem] rounded-lg bg-(--color-ic-bg) p-4 md:p-[1.125rem]">
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {links.length > 0 ? (
          links.map((entry) => (
            <li
              key={entry.url}
              style={{
                border: "1px solid var(--color-primary)",
                borderRadius: "8px",
              }}
            >
              <a
                href={entry.url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-block px-6 py-3 text-primary no-underline hover:underline"
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
        <li>
          <a
            href="https://github.com/TkDodo/blog/blob/main/CONTRIBUTING.md#translations"
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary no-underline hover:underline"
          >
            Add translation
          </a>
        </li>
      </ul>
    </div>
  );
}
