import { createFileRoute } from "@tanstack/react-router";
import { ProductDetailPage } from "../../../components/pages/ProductDetailPage";
import { strings } from "../../../i18n/strings";

const t = strings.en.solstatus;

export const Route = createFileRoute("/en/products/solstatus")({
  head: () => ({
    meta: [
      { title: t.metaTitle },
      { name: "description", content: t.metaDescription },
      { property: "og:title", content: t.metaTitle },
      { property: "og:description", content: t.metaDescription },
    ],
  }),
  component: () => <ProductDetailPage productKey="solstatus" />,
});
