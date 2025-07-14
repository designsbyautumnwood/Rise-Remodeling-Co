import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEOHead({
  title = "Rise Remodeling Co. - Professional Home Renovation in Rock Hill, SC",
  description = "Transform your home with Rise Remodeling Co. Professional kitchen, bathroom, door, window, and trim services in Rock Hill, SC. Licensed, insured, and serving York County with 20+ years experience.",
  keywords = "home remodeling, kitchen renovation, bathroom remodel, Rock Hill SC, York County, doors, windows, trim, professional contractor, licensed insured",
  image = "/logo.png",
  url = window.location.href
}: SEOHeadProps) {
  
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = description;
      document.head.appendChild(newMeta);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'keywords';
      newMeta.content = keywords;
      document.head.appendChild(newMeta);
    }
    
    // Update Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Rise Remodeling Co.' }
    ];
    
    ogTags.forEach(tag => {
      let existingTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const newTag = document.createElement('meta');
        newTag.setAttribute('property', tag.property);
        newTag.setAttribute('content', tag.content);
        document.head.appendChild(newTag);
      }
    });
    
    // Update Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ];
    
    twitterTags.forEach(tag => {
      let existingTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const newTag = document.createElement('meta');
        newTag.setAttribute('name', tag.name);
        newTag.setAttribute('content', tag.content);
        document.head.appendChild(newTag);
      }
    });
    
    // Add structured data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Rise Remodeling Co.",
      "description": description,
      "url": url,
      "telephone": "(803) 203-8664",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rock Hill",
        "addressRegion": "SC",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "34.9249",
        "longitude": "-81.0252"
      },
      "openingHours": "Mo-Fr 08:00-17:00, Sa 08:00-16:00",
      "priceRange": "$$",
      "image": image,
      "servesCuisine": null,
      "serviceArea": {
        "@type": "Place",
        "name": "York County, SC"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Remodeling Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Kitchen Remodeling",
              "description": "Custom kitchen renovation and remodeling services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bathroom Renovation",
              "description": "Complete bathroom remodeling and renovation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Door Installation",
              "description": "Professional door installation and replacement"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Window Installation",
              "description": "Quality window installation and replacement"
            }
          }
        ]
      }
    };
    
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
  }, [title, description, keywords, image, url]);
  
  return null;
}