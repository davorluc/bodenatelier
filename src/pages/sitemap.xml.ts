import type { APIRoute } from "astro";

// Add new public page paths here when expanding the site.
const pagePaths = ["/"];

export const GET: APIRoute = ({ site }) => {
  const urls = pagePaths.map((path) => {
    const url = new URL(path, site).href;
    const escapedURL = url.replace(/&/g, "&amp;").replace(/</g, "&lt;");
    return `  <url><loc>${escapedURL}</loc></url>`;
  });

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
