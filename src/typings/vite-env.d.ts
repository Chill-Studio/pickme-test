/// <reference types="vite/client" />
// This allow you to type process.env.REACT_APP variables
declare namespace NodeJS {
  export type ProcessEnv = ImportMetaEnv;
}

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
