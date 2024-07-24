import { component$ } from "@builder.io/qwik";
import { inlineTranslate } from "qwik-speak";

export default component$(() => {
  const t = inlineTranslate();

  return (
    <footer class="mt-12 bg-black/30 text-sm text-white">
      <div class="mx-auto max-w-[600px] px-6 py-3">
        <p
          class="text-center"
          dangerouslySetInnerHTML={t("footerText")}
        ></p>
      </div>
    </footer>
  );
});
