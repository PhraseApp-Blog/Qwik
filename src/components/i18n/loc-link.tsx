import { Slot, component$ } from "@builder.io/qwik";
import {
  Link,
  useLocation,
  type LinkProps,
} from "@builder.io/qwik-city";
import locPath from "~/util/i18n/loc-path";

type LocLinkProps = LinkProps & { href: string };

export default component$(
  ({ href, ...props }: LocLinkProps) => {
    const {
      params: { lang },
    } = useLocation();
    const localizedHref = locPath(href, lang);

    return (
      <Link href={localizedHref} {...props}>
        <Slot />
      </Link>
    );
  },
);
