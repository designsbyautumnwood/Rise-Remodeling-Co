// Local Business Schema for Rise Remodeling Co
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://riseremodeling.com/#business",
  "name": "Rise Remodeling Co",
  "alternateName": "Rise Remodeling Company",
  "description": "Professional kitchen and bathroom remodeling services in Rock Hill, SC. Expert home renovation, door installation, window replacement, and trim work.",
  "slogan": "Born to Last, Built to Belong",
  "url": "https://riseremodeling.com",
  "telephone": "(803) 203-8664",
  "email": "info@riseremodeling.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rock Hill",
    "addressRegion": "SC",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "34.9249",
    "longitude": "-81.0251"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Rock Hill",
      "containedInPlace": {
        "@type": "State",
        "name": "South Carolina"
      }
    },
    {
      "@type": "City", 
      "name": "Charlotte",
      "containedInPlace": {
        "@type": "State",
        "name": "North Carolina"
      }
    },
    {
      "@type": "City",
      "name": "Fort Mill",
      "containedInPlace": {
        "@type": "State", 
        "name": "South Carolina"
      }
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "34.9249",
      "longitude": "-81.0251"
    },
    "geoRadius": "50 mi"
  },
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Check, Financing Available",
  "openingHours": "Mo-Fr 08:00-17:00, Sa 09:00-15:00",
  "image": "https://riseremodeling.com/logo.png",
  "logo": "https://riseremodeling.com/logo.png",
  "sameAs": [
    "https://www.facebook.com/riseremodeling",
    "https://www.instagram.com/riseremodeling",
    "https://www.linkedin.com/company/rise-remodeling-co"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sarah Johnson"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Amazing kitchen transformation! The team was professional, on time, and delivered exactly what we envisioned. Highly recommend Rise Remodeling Co!"
    },
    {
      "@type": "Review", 
      "author": {
        "@type": "Person",
        "name": "Michael Davis"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Outstanding bathroom remodel. Quality workmanship and attention to detail. They transformed our outdated bathroom into a beautiful, modern space."
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Remodeling Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kitchen Remodeling",
          "description": "Complete kitchen renovation including cabinets, countertops, appliances, and fixtures",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Rise Remodeling Co"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Bathroom Remodeling",
          "description": "Full bathroom renovation including tile, fixtures, vanities, and plumbing",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Rise Remodeling Co"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Door Installation",
          "description": "Professional door installation and replacement services",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Rise Remodeling Co"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Window Replacement", 
          "description": "Energy-efficient window replacement and installation",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Rise Remodeling Co"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Trim Work",
          "description": "Custom trim installation and finishing carpentry",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Rise Remodeling Co"
          }
        }
      }
    ]
  }
};

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://riseremodeling.com/#website",
  "url": "https://riseremodeling.com",
  "name": "Rise Remodeling Co",
  "description": "Professional remodeling services in Rock Hill, SC",
  "publisher": {
    "@type": "LocalBusiness",
    "name": "Rise Remodeling Co"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://riseremodeling.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://riseremodeling.com/#organization",
  "name": "Rise Remodeling Co",
  "alternateName": "Rise Remodeling Company",
  "url": "https://riseremodeling.com",
  "logo": "https://riseremodeling.com/logo.png",
  "image": "https://riseremodeling.com/logo.png",
  "description": "Professional remodeling and renovation company serving Rock Hill, SC and surrounding areas",
  "slogan": "Born to Last, Built to Belong",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rock Hill",
    "addressRegion": "SC",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "(803) 203-8664",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.facebook.com/riseremodeling",
    "https://www.instagram.com/riseremodeling",
    "https://www.linkedin.com/company/rise-remodeling-co"
  ]
};

// Breadcrumb Schema
export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://riseremodeling.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://riseremodeling.com#services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Contact",
      "item": "https://riseremodeling.com#contact"
    }
  ]
};

// FAQ Schema
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you provide free quotes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide free quotes for all our services. Contact us today to schedule your free consultation and quote."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve Rock Hill, SC and surrounding areas including Charlotte, NC, Fort Mill, SC, and the greater Charlotte metro area."
      }
    },
    {
      "@type": "Question",
      "name": "Are you licensed and insured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Rise Remodeling Co is fully licensed and insured. We carry comprehensive liability insurance and workers' compensation coverage."
      }
    },
    {
      "@type": "Question",
      "name": "How long do remodeling projects take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Project timelines vary based on scope and complexity. Kitchen remodels typically take 2-4 weeks, while bathroom remodels take 1-2 weeks. We'll provide a detailed timeline during your consultation."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer financing options?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer flexible financing options to help make your remodeling project affordable. Contact us to discuss available financing plans."
      }
    }
  ]
};

// Combined Schema
export const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    localBusinessSchema,
    websiteSchema,
    organizationSchema,
    breadcrumbSchema,
    faqSchema
  ]
};