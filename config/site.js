module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Prototype | {{ dev.Chops }}', // Navigation and Site Title
  titleAlt: 'Prototype | {{ dev.Chops }}', // Title for JSONLD
  description: 'Prototype | {{ dev.Chops }}',
  url: 'https://devchops.netlify.com', // Domain of your site. No trailing slash!
  siteUrl: 'https://devchops.netlify.com', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: '{{dev.Chops}}', // shortname for manifest. MUST be shorter than 12 characters
  author: 'jetsetPanda', // Author for schemaORGJSONLD
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
  twitter: '@jetsetpanda', // Twitter Username
};
