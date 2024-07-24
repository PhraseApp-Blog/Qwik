import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import retroHardware, {
  type Product,
} from "~/data/retro-hardware";

export const useProduct = routeLoader$<
  Readonly<Product> | undefined
>((requestEvent) => {
  const localizedProducts =
    retroHardware[
      requestEvent.locale() as keyof typeof retroHardware
    ];
  const product = localizedProducts.find(
    (p) => p.id === +requestEvent.params.id,
  );

  if (!product) {
    requestEvent.status(404);
  }

  return product;
});

export default component$(() => {
  const product = useProduct().value;

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <article>
      <h1 class="mb-2 text-2xl font-semibold">
        {product.title}
      </h1>
      <div class="flex justify-between rounded-sm bg-black/20 px-3 py-2">
        <p>${product.priceInCents / 100}</p>
        <p>{product.publishedAt}</p>
      </div>
      <img
        width={600}
        height={600}
        alt={product.title}
        src={`/product-img/${product.imageUrl}`}
        class="my-4 block aspect-square w-96 rounded-md"
      />
      <p>{product.description}</p>
    </article>
  );
});
