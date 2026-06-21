import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url }) => {
  const siteTitle = title ? `${title} | Portfolio` : 'Portfolio | Software Engineer';
  const siteDescription = description || 'Showcasing production-ready mobile and web applications with premium UI/UX.';
  const siteImage = image || `${import.meta.env.BASE_URL}legacy/ecommerce snapshop App/snapshop logo.png`;
  const siteUrl = url || window.location.href;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={siteDescription} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={siteImage} />
    </Helmet>
  );
};

export default SEO;
