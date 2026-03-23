import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title, description }) => {
  const defaultTitle = 'Mohit Kumar';
  const defaultDescription =
    'Mohit Kumar is a software engineer and CS student at AIT Pune focused on backend systems, scalable web applications, distributed systems, and real-time infrastructure.';

  return (
    <Helmet
      title={title || defaultTitle}
      defaultTitle={defaultTitle}
      titleTemplate={`%s | ${defaultTitle}`}>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://wreckurring.github.io" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default Head;
