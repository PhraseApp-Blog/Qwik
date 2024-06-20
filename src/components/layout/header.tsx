import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { inlineTranslate } from "qwik-speak";

export default component$(() => {
  const t = inlineTranslate();

  return (
    <header class="bg-black/30">
      <nav class="mx-auto flex max-w-[600px] items-baseline gap-6 px-6 pb-3 pt-2">
        <Link href="/">
          <span class="text-2xl font-thin">
            👾 {t("appTitle")}
          </span>
        </Link>

        <ul class="flex gap-4 text-sm font-light">
          <li>
            <Link href="/">Latest products</Link>
          </li>
          <li>
            <Link href="/about">About us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});
