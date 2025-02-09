import { component$ } from "@builder.io/qwik";
import {
  routeLoader$,
  type DocumentHead,
} from "@builder.io/qwik-city";
import {
  inlineTranslate,
  useFormatDate,
  useFormatNumber,
} from "qwik-speak";
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
  const t = inlineTranslate();
  const fn = useFormatNumber();
  const fd = useFormatDate();
  const product = useProduct().value;

  if (!product) {
    return <p>{t("productDetails.notFound")}</p>;
  }

  return (
    <article>
      <h1 class="mb-2 text-2xl font-semibold">
        {product.title}
      </h1>
      <div class="flex justify-between rounded-sm bg-black/20 px-3 py-2">
        <p>
          {fn((product.priceInCents / 100.0).toFixed(2), {
            style: "currency",
          })}
        </p>
        <p>
          {fd(product.publishedAt, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
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

export const head: DocumentHead = ({
  resolveValue,
  params,
}) => {
  const t = inlineTranslate();
  const product = resolveValue(useProduct);

  if (!product) {
    return {
      title: t(
        "productDetails.meta.notFound",
        {},
        params.lang,
      ),
    };
  }

  return {
    title: t(
      "productDetails.meta.title",
      { productTitle: product.title },
      params.lang,
    ),
    meta: [
      {
        name: "description",
        content: product.description,
      },
    ],
  };
};
