/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONVERTKIT_API_KEY: string
  readonly VITE_CONVERTKIT_FORM_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
