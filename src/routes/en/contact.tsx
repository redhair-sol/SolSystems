import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "../../components/pages/ContactPage";
import { strings } from "../../i18n/strings";

const t = strings.en.contact;

export const Route = createFileRoute("/en/contact")({
  head: () => ({
    meta: [
      { title: t.metaTitle },
      { name: "description", content: t.metaDescription },
      { property: "og:title", content: t.metaTitle },
      { property: "og:description", content: t.metaDescription },
    ],
  }),
  component: ContactPage,
});
