import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://phec.astreak.in/",
      lastModified: new Date(),
      // changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://phec.astreak.in/name-ai",
      lastModified: new Date(),
      // changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://phec.astreak.in/lp/best-software-solutions-company",
      lastModified: new Date(),
      // changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://phec.astreak.in/lp/best-website-solutions-company",
      lastModified: new Date(),
      // changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://phec.astreak.in/lp/best-ecommerce-solutions",
      lastModified: new Date(),
      // changeFrequency: "monthly",
      priority: 0.8,
    },{
      url: "https://phec.astreak.in/lp/crm-solutions-for-mid-size-businesses",
      lastModified: new Date(),
      // changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
