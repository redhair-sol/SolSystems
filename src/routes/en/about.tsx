import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "../../components/pages/AboutPage";
import { strings } from "../../i18n/strings";

const t = strings.en.about;

export const Route = createFileRoute("/en/about")({
  head: () => ({
    meta: [
      { title: t.metaTitle },
      { name: "description", content: t.metaDescription },
      { property: "og:title", content: t.metaTitle },
      { property: "og:description", content: t.metaDescription },
    ],
  }),
  component: AboutPage,
});
