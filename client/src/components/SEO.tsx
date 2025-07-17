import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

export default function SEO({
  title = "Rise Remodeling Co | Kitchen & Bathroom Remodeling Rock Hill SC",
  description = "Professional kitchen and bathroom remodeling services in Rock Hill, SC. Expert home renovation, door installation, window replacement, and trim work. Free quotes, 5-star rated, 300+ projects completed.",
  keywords = "kitchen remodeling rock hill sc, bathroom remodeling rock hill sc, home renovation rock hill, door installation rock hill, window replacement rock hill, trim work rock hill, rise remodeling co, remodeling contractor rock hill",
  ogTitle,
  ogDescription,
  ogImage = "/favicon.ico",
  canonicalUrl = "https://riseremodeling.com",
  structuredData
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic SEO meta tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('robots', 'index, follow');
    updateMeta('author', 'Rise Remodeling Co');
    updateMeta('viewport', 'width=device-width, initial-scale=1');

    // Open Graph tags
    updateMeta('og:title', ogTitle || title, true);
    updateMeta('og:description', ogDescription || description, true);
    updateMeta('og:image', ogImage, true);
    updateMeta('og:url', canonicalUrl, true);
    updateMeta('og:type', 'website', true);
    updateMeta('og:site_name', 'Rise Remodeling Co', true);
    updateMeta('og:locale', 'en_US', true);

    // Twitter Card tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', ogTitle || title);
    updateMeta('twitter:description', ogDescription || description);
    updateMeta('twitter:image', ogImage);

    // Local Business tags
    updateMeta('geo.region', 'US-SC');
    updateMeta('geo.placename', 'Rock Hill');
    updateMeta('geo.position', '34.9249;-81.0251');
    updateMeta('ICBM', '34.9249, -81.0251');

    // Business info
    updateMeta('business:contact_data:street_address', 'Rock Hill, SC');
    updateMeta('business:contact_data:locality', 'Rock Hill');
    updateMeta('business:contact_data:region', 'SC');
    updateMeta('business:contact_data:country_name', 'USA');
    updateMeta('business:contact_data:phone_number', '(803) 203-8664');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // Structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    // Preload critical resources
    const preloadLink = (href: string, as: string, type?: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      if (type) link.type = type;
      document.head.appendChild(link);
    };

  }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonicalUrl, structuredData]);

  return null;
}