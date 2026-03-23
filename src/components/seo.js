import React from 'react';

const Seo = ({ title, description, pathname = '/' }) => {
  const defaultTitle = 'Mohit Kumar | Data Flow Architect';
  const defaultDescription =
    'Software engineer building scalable backends, real-time data flow, and resilient full-stack systems.';
  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;

  return (
    <>
      <html lang="en" />
      <title>{pageTitle}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://wreckurring.github.io${pathname}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </>
  );
};

export default Seo;
