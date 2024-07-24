import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { useQwikSpeak } from "qwik-speak";
import { RouterHead } from "./components/router-head/router-head";
import { config } from "./speak-config";
import { translationFn } from "./speak-functions";

import "./global.css";

export default component$(() => {
  useQwikSpeak({ config, translationFn });

  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body class="min-h-screen bg-green-950 text-yellow-50">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
