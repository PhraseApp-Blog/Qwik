import { $, component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import {
  useSpeakLocale,
  type SpeakLocale,
} from "qwik-speak";
import { config } from "~/speak-config";
import locPath$ from "~/util/i18n/loc-path";

const langNames: Record<SpeakLocale["lang"], string> = {
  "en-US": "English",
  "ar-EG": "العربية (Arabic)",
};

export default component$(() => {
  const { lang: activeLang } = useSpeakLocale();
  const loc = useLocation();

  const changeLocale$ = $((evt: Event) => {
    const selectedLang = (evt.target as HTMLSelectElement)
      .value;
    window.location.href = locPath$(
      loc.url.pathname,
      selectedLang,
    );
  });

  return (
    <select
      onChange$={changeLocale$}
      class="cursor-pointer rounded-sm bg-green-900 px-2 py-1 text-yellow-50"
    >
      {config.supportedLocales.map((locale) => (
        <option
          key={locale.lang}
          value={locale.lang}
          selected={locale.lang === activeLang}
        >
          {langNames[locale.lang]}
        </option>
      ))}
    </select>
  );
});
