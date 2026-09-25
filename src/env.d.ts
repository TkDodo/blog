/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_ALGOLIA_APP_ID: string;
  readonly PUBLIC_ALGOLIA_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace astroHTML.JSX {
  interface HTMLAttributes {
    value?: string;
  }
}

declare let AtmbThemeProvider: {
  updatePickers: (theme?: string) => void;
};

interface Window {
  AtmbThemeProvider?: {
    updatePickers: (theme?: string) => void;
  };
}
