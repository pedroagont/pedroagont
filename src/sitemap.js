const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

const createSitemap = async (hostname, urls) => {
  // Create a stream to write to
  const stream = new SitemapStream({ hostname });

  // Resolve the XML string
  const sitemapIntance = await streamToPromise(
    Readable.from(urls).pipe(stream)
  );

  // Write sitemap.xml file
  fs.writeFileSync('./public/sitemap.xml', sitemapIntance.toString());
};

const hostname = 'https://pedroagont.com';
const urls = [
  {
    url: '/',
    priority: 1,
    changefreq: 'monthly',
  },
  {
    url: '/about',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    url: '/experience',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    url: '/education',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    url: '/projects',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    url: '/dev',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    url: '/contact',
    priority: 0.8,
    changefreq: 'monthly',
  },
];
createSitemap(hostname, urls);
