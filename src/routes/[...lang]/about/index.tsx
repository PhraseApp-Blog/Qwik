import { component$ } from "@builder.io/qwik";
import { useSpeak } from "qwik-speak";
import AboutInner from "./about-inner";

export default component$(() => {
  // Lazy-load the about translation asset
  useSpeak({ assets: ["about"] });

  return <AboutInner />;
});
