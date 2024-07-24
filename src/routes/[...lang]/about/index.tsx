import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { inlineTranslate, useSpeak } from "qwik-speak";
import AboutInner from "./about-inner";

export default component$(() => {
  // Lazy-load the about translation asset
  useSpeak({ assets: ["about"] });

  return <AboutInner />;
});

export const head: DocumentHead = ({ params }) => {
  const t = inlineTranslate();

  return {
    title: t("about.meta.title", {}, params.lang),
    meta: [
      {
        name: "description",
        content: t(
          "about.meta.description",
          {},
          params.lang,
        ),
      },
    ],
  };
};
