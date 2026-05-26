import { createFileRoute } from "@tanstack/react-router";
import { SolSuitePage } from "../../../components/pages/SolSuitePage";
import { strings } from "../../../i18n/strings";

const t = strings.en.solsuite;

export const Route = createFileRoute("/en/products/solsuite")({
  head: () => ({
    meta: [
      { title: t.metaTitle },
      { name: "description", content: t.metaDescription },
      { property: "og:title", content: t.metaTitle },
      { property: "og:description", content: t.metaDescription },
    ],
  }),
  component: SolSuitePage,
});
