import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import Footer from "~/components/layout/footer";
import Header from "~/components/layout/header";
import { config } from "~/speak-config";

export const onGet: RequestHandler = async ({
  cacheControl,
  params,
  send,
}) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });

  if (
    !config.supportedLocales.find(
      (loc) => loc.lang === params.lang,
    )
  ) {
    send(404, "Not Found");
  }
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <>
      <Header />
      <main class="mx-auto mt-3 max-w-[600px] px-6">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
