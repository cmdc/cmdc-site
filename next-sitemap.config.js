/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://cmdc.it",
  generateRobotsTxt: true, // (optional)
  // ...other options
  exclude: ["/QR_REDIRECT", "/QR_REDIRECT/*"],
};
