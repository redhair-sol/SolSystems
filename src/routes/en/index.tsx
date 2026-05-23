import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "../../components/pages/HomePage";
import { strings } from "../../i18n/strings";

const t = strings.en.home;

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title: t.metaTitle },
      { name: "description", content: t.metaDescription },
      { property: "og:title", content: t.metaTitle },
      { property: "og:description", content: t.metaDescription },
    ],
  }),
  component: HomePage,
});
