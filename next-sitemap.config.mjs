/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://solarpanelvic.netlify.app/',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 1000,
  // optional
  robotsTxtOptions: {
    additionalSitemaps: [

    ],
  },
}

export default config