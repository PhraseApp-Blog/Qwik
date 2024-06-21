import { $, component$ } from "@builder.io/qwik";
import {
  routeLoader$,
  type DocumentHead,
} from "@builder.io/qwik-city";
import LocLink from "~/components/i18n/loc-link";
import retroHardware, {
  type Product,
} from "~/data/retro-hardware";

export const useProducts = routeLoader$<
  Readonly<Product[]>
>(() => {
  return retroHardware;
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
  const productsS = useProducts();

  return (
    <>
      <h1 class="mb-4 text-2xl font-semibold">
        Latest products
      </h1>

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
                <p>${product.priceInCents / 100.0}</p>
                <p>{toShortDate$(product.publishedAt)}</p>
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

export const head: DocumentHead = {
  title: "Etttro | Retro Hardware Marketplace",
  meta: [
    {
      name: "description",
      content:
        "Etttro is your community second-hand market for all retro electronics.",
    },
  ],
};
