import type { SpeakConfig } from "qwik-speak";

export const config: SpeakConfig = {
  defaultLocale: {
    lang: "en-US",
    currency: "USD",
    timeZone: "America/Los_Angeles",
  },
  supportedLocales: [
    {
      lang: "ar-EG",
      currency: "USD",
      timeZone: "Africa/Cairo",
    },
    {
      lang: "en-US",
      currency: "USD",
      timeZone: "America/Los_Angeles",
    },
  ],
  // Translations available in the whole app
  assets: ["app", "nav"],
  runtimeAssets: [],
};
