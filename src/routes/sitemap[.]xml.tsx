import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://solsystems.gr";

type LocalizedPath = { el: string; en: string };

const pages: Array<{
  paths: LocalizedPath;
  changefreq: "weekly" | "monthly";
  priority: string;
}> = [
  { paths: { el: "/", en: "/en" }, changefreq: "weekly", priority: "1.0" },
  { paths: { el: "/services", en: "/en/services" }, changefreq: "weekly", priority: "0.8" },
  { paths: { el: "/products", en: "/en/products" }, changefreq: "weekly", priority: "0.9" },
  { paths: { el: "/products/solsuite", en: "/en/products/solsuite" }, changefreq: "monthly", priority: "0.8" },
  { paths: { el: "/products/solstatus", en: "/en/products/solstatus" }, changefreq: "monthly", priority: "0.8" },
  { paths: { el: "/about", en: "/en/about" }, changefreq: "monthly", priority: "0.7" },
  { paths: { el: "/contact", en: "/en/contact" }, changefreq: "monthly", priority: "0.7" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = pages.flatMap((page) =>
          (["el", "en"] as const).map((locale) => {
            const loc = `${BASE_URL}${page.paths[locale]}`;
            const altLines = (["el", "en"] as const).map(
              (alt) => `    <xhtml:link rel="alternate" hreflang="${alt}" href="${BASE_URL}${page.paths[alt]}"/>`,
            );
            const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${page.paths.el}"/>`;
            return [
              `  <url>`,
              `    <loc>${loc}</loc>`,
              ...altLines,
              xDefault,
              `    <changefreq>${page.changefreq}</changefreq>`,
              `    <priority>${page.priority}</priority>`,
              `  </url>`,
            ].join("\n");
          }),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
