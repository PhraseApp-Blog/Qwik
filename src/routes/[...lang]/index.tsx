import { $, component$ } from "@builder.io/qwik";
import {
  routeLoader$,
  type DocumentHead,
} from "@builder.io/qwik-city";
import {
  inlinePlural,
  inlineTranslate,
  useFormatDate,
  useFormatNumber,
  type Translation,
} from "qwik-speak";
import LocLink from "~/components/i18n/loc-link";
import retroHardware, {
  type Product,
} from "~/data/retro-hardware";

export const useProducts = routeLoader$<
  Readonly<Product[]>
>((requestEvent) => {
  const t = inlineTranslate();
  const localizedConditions = t<Translation>(
    "productConditions",
    {},
    requestEvent.locale(),
  );

  const localizedProducts =
    retroHardware[
      requestEvent.locale() as keyof typeof retroHardware
    ];
  const withMappedTitles = localizedProducts.map(
    (product) => {
      return {
        ...product,
        title: `${product.title} (${localizedConditions[product.condition]})`,
      };
    },
  );
  return withMappedTitles;
});

const toShortDate$ = $(function (
  dateString: string,
): string {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(
    2,
    "0",
  ); // Months are zero-based, add 1 and pad with zero
  const day = String(date.getDate()).padStart(2, "0"); // Pad with zero
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
});

export default component$(() => {
  const t = inlineTranslate();
  const p = inlinePlural();
  const fn = useFormatNumber();
  const fd = useFormatDate();
  const productsS = useProducts();

  return (
    <>
      <div class="flex items-baseline justify-between">
        <h1 class="mb-4 text-2xl font-semibold">
          {p(productsS.value.length, "latestProducts")}
        </h1>

        <p>{t("userGreeting", { name: "Hannah" })}</p>
      </div>

      <section class="flex gap-3">
        {productsS.value.map((product) => (
          <LocLink
            href={`products/${product.id}`}
            key={product.id}
          >
            <article class="flex-1 overflow-hidden rounded-md bg-green-900 shadow-md">
              <h3 class="bg-black/10 px-2 py-1.5 text-sm font-semibold uppercase">
                {product.title}
              </h3>
              <img
                width={600}
                height={600}
                alt={product.title}
                class="block aspect-square w-full"
                src={`/product-img/${product.imageUrl}`}
              />
              <div class="flex justify-between bg-black/20 px-2 py-1 text-sm font-light">
                <p>
                  {fn(
                    (product.priceInCents / 100.0).toFixed(
                      2,
                    ),
                    {
                      style: "currency",
                    },
                  )}
                </p>
                <p>
                  {fd(product.publishedAt, {
                    dateStyle: "short",
                  })}
                </p>
              </div>
              <p class="p-2 text-xs">
                {product.description.slice(0, 65)}...
              </p>
            </article>
          </LocLink>
        ))}
      </section>
    </>
  );
});

export const head: DocumentHead = ({ params }) => {
  const t = inlineTranslate();

  return {
    title: t("app.meta.title", {}, params.lang),
    meta: [
      {
        name: "description",
        content: t("app.meta.description", {}, params.lang),
      },
    ],
  };
};
