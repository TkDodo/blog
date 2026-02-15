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

export default function Translations({ children }: Props) {
  const links = Array.isArray(children) ? children.filter(isTranslation) : [];

  return (
    <div
      style={{
        margin: "1rem 0",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      }}
    >
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
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
                style={{ display: "inline-block", padding: "0.5rem 0.9rem" }}
              >
                {entry.language}
              </a>
            </li>
          ))
        ) : (
          <li>
            <i>No translations available.</i>
          </li>
        )}
        <li>
          <a
            href="https://github.com/TkDodo/blog/blob/main/CONTRIBUTING.md#translations"
            target="_blank"
            rel="noreferrer noopener"
          >
            Add translation
          </a>
        </li>
      </ul>
    </div>
  );
}
