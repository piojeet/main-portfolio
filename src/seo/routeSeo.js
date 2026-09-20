const SITE_URL = "https://priyjeetmanjhi.netlify.app";
const DEFAULT_IMAGE = `${SITE_URL}/vite.svg`;

const ROUTE_SEO = {
  "/": {
    title: "Priyjeet Manjhi | Web Design, Frontend & Branding",
    description:
      "Priyjeet Manjhi is a digital-first creative studio offering branding, website design, frontend design, and design support for modern brands.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Priyjeet Manjhi",
      url: `${SITE_URL}/`,
      areaServed: "Worldwide",
      serviceType: ["Branding", "Website Design", "Frontend Design", "Design Support"],
    },
  },
  "/projects": {
    title: "Projects | Priyjeet Manjhi Portfolio",
    description:
      "Explore selected web design, branding, and frontend projects by Priyjeet Manjhi.",
  },
  "/work-personation": {
    title: "Work Personation | Priyjeet Manjhi",
    description:
      "See featured project personation and creative execution by Priyjeet Manjhi.",
  },
  "/about": {
    title: "About Priyjeet Manjhi | Creative Studio",
    description:
      "Learn about Priyjeet Manjhi, a digital-first creative professional focused on branding, web design, and frontend experiences.",
  },
  "/services": {
    title: "Services | Priyjeet Manjhi",
    description:
      "Discover branding, website design, frontend design, and ongoing design support services.",
  },
  "/branding": {
    title: "Branding Services | Priyjeet Manjhi",
    description:
      "Brand strategy and visual identity services to help modern brands stand out online.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Branding",
      provider: {
        "@type": "Person",
        name: "Priyjeet Manjhi",
      },
      areaServed: "Worldwide",
    },
  },
  "/website-design": {
    title: "Website Design Services | Priyjeet Manjhi",
    description:
      "Responsive, high-performance website design services crafted for growth-focused businesses.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Website Design",
      provider: {
        "@type": "Person",
        name: "Priyjeet Manjhi",
      },
      areaServed: "Worldwide",
    },
  },
  "/frontend-design": {
    title: "Frontend Design Services | Priyjeet Manjhi",
    description:
      "Frontend design and UI implementation services built for smooth, user-focused web experiences.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Frontend Design",
      provider: {
        "@type": "Person",
        name: "Priyjeet Manjhi",
      },
      areaServed: "Worldwide",
    },
  },
  "/design-support": {
    title: "Design Support Services | Priyjeet Manjhi",
    description:
      "Flexible design support for ongoing creative and product needs, from one-off tasks to monthly retainers.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Design Support",
      provider: {
        "@type": "Person",
        name: "Priyjeet Manjhi",
      },
      areaServed: "Worldwide",
    },
  },
  "/privacy": {
    title: "Privacy Policy | Priyjeet Manjhi",
    description:
      "Read the privacy policy and data handling practices for priyjeetmanjhi.netlify.app.",
  },
  "/contact": {
    title: "Contact | Priyjeet Manjhi",
    description:
      "Get in touch with Priyjeet Manjhi for branding, website design, frontend design, and design support enquiries.",
  },
};

const NOT_FOUND_SEO = {
  title: "Page Not Found | Priyjeet Manjhi",
  description: "The page you are looking for does not exist.",
  noindex: true,
};

const normalizePath = (pathname) => {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
};

const getSeoByPath = (pathname) => {
  const normalizedPath = normalizePath(pathname);
  const routeSeo = ROUTE_SEO[normalizedPath] || NOT_FOUND_SEO;

  const canonicalPath = normalizedPath === "/" ? "/" : normalizedPath;
  return {
    ...routeSeo,
    canonical: `${SITE_URL}${canonicalPath}`,
    image: DEFAULT_IMAGE,
  };
};

export { SITE_URL, getSeoByPath };
