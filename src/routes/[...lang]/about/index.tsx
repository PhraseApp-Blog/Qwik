import { component$ } from "@builder.io/qwik";
import { inlineTranslate } from "qwik-speak";

export default component$(() => {
  const t = inlineTranslate();

  return (
    <article>
      <h1 class="mb-2 text-2xl font-semibold">
        {t("about.title")}
      </h1>
      <p>{t("about.content")}</p>
    </article>
  );
});
