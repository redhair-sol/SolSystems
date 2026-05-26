import { createFileRoute } from "@tanstack/react-router";
import { ProductsPage } from "../../../components/pages/ProductsPage";
import { strings } from "../../../i18n/strings";

const t = strings.en.productsListing;

export const Route = createFileRoute("/en/products/")({
  head: () => ({
    meta: [
      { title: t.metaTitle },
      { name: "description", content: t.metaDescription },
      { property: "og:title", content: t.metaTitle },
      { property: "og:description", content: t.metaDescription },
    ],
  }),
  component: ProductsPage,
});
