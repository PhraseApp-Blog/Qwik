import { component$ } from "@builder.io/qwik";
import { inlineTranslate } from "qwik-speak";
import LocLink from "../i18n/loc-link";
import LocaleSwitcher from "../i18n/locale-switcher";

export default component$(() => {
  const t = inlineTranslate();

  return (
    <header class="bg-black/30">
      <div class="mx-auto flex max-w-[600px] items-baseline  justify-between px-6 pb-3 pt-2">
        <nav class="flex items-baseline gap-6">
          <LocLink href="/">
            <span class="text-2xl font-thin">
              👾 {t("appTitle")}
            </span>
          </LocLink>
          <ul class="flex gap-4 text-sm font-light">
            <li>
              <LocLink href="/">
                {t("nav.latestProducts")}
              </LocLink>
            </li>
            <li>
              <LocLink href="/about">
                {t("nav.aboutUs")}
              </LocLink>
            </li>
          </ul>
        </nav>

        <LocaleSwitcher />
      </div>
    </header>
  );
});
