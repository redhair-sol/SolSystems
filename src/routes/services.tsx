import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "../components/pages/ServicesPage";
import { strings } from "../i18n/strings";

const t = strings.el.services;

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: t.metaTitle },
      { name: "description", content: t.metaDescription },
      { property: "og:title", content: t.metaTitle },
      { property: "og:description", content: t.metaDescription },
    ],
  }),
  component: ServicesPage,
});
