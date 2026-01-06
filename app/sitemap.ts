import type { MetadataRoute } from "next";
import { blogPosts, services, siteUrl } from "../lib/site-data";

const staticRoutes = ["/", "/services", "/blog"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const baseEntries = staticRoutes.map((path) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  const serviceEntries = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...baseEntries, ...serviceEntries, ...blogEntries];
}
