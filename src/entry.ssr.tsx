/**
 * WHAT IS THIS FILE?
 *
 * SSR entry point, in all cases the application is rendered outside the browser, this
 * entry point will be the common one.
 *
 * - Server (express, cloudflare...)
 * - npm run start
 * - npm run preview
 * - npm run build
 *
 */
import { isDev } from "@builder.io/qwik/build";
import {
  renderToStream,
  type RenderOptions,
  type RenderToStreamOptions,
} from "@builder.io/qwik/server";
import { manifest } from "@qwik-client-manifest";
import rtlDetect from "rtl-detect";
import Root from "./root";
import { config } from "./speak-config";

/**
 * Determine the base URL to use for loading the chunks in the browser.
 * The value set through Qwik 'locale()' in 'plugin.ts' is saved by Qwik in 'serverData.locale' directly.
 * Make sure the locale is among the 'supportedLocales'
 */
export function extractBase({
  serverData,
}: RenderOptions): string {
  if (!isDev && serverData?.locale) {
    return "/build/" + serverData.locale;
  } else {
    return "/build";
  }
}

export default function (opts: RenderToStreamOptions) {
  const lang =
    opts.serverData?.locale || config.defaultLocale.lang;

  return renderToStream(<Root />, {
    manifest,
    ...opts,
    base: extractBase,
    // Use container attributes to set attributes on the html tag.
    containerAttributes: {
      lang,
      dir: rtlDetect.getLangDir(lang),
      ...opts.containerAttributes,
    },
    serverData: {
      ...opts.serverData,
    },
  });
}
