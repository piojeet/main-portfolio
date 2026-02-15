const SITE_URL = "https://priyajeetmajhi.netlify.app";
const DEFAULT_IMAGE = `${SITE_URL}/vite.svg`;

const ROUTE_SEO = {
  "/": {
    title: "Priyajeet Majhi | Web Design, Frontend & Branding",
    description:
      "Priyajeet Majhi is a digital-first creative studio offering branding, website design, frontend design, and design support for modern brands.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Priyajeet Majhi",
      url: `${SITE_URL}/`,
      areaServed: "Worldwide",
      serviceType: ["Branding", "Website Design", "Frontend Design", "Design Support"],
    },
  },
  "/projects": {
    title: "Projects | Priyajeet Majhi Portfolio",
    description:
      "Explore selected web design, branding, and frontend projects by Priyajeet Majhi.",
  },
  "/work-personation": {
    title: "Work Personation | Priyajeet Majhi",
    description:
      "See featured project personation and creative execution by Priyajeet Majhi.",
  },
  "/about": {
    title: "About Priyajeet Majhi | Creative Studio",
    description:
      "Learn about Priyajeet Majhi, a digital-first creative professional focused on branding, web design, and frontend experiences.",
  },
  "/services": {
    title: "Services | Priyajeet Majhi",
    description:
      "Discover branding, website design, frontend design, and ongoing design support services.",
  },
  "/branding": {
    title: "Branding Services | Priyajeet Majhi",
    description:
      "Brand strategy and visual identity services to help modern brands stand out online.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Branding",
      provider: {
        "@type": "Person",
        name: "Priyajeet Majhi",
      },
      areaServed: "Worldwide",
    },
  },
  "/website-design": {
    title: "Website Design Services | Priyajeet Majhi",
    description:
      "Responsive, high-performance website design services crafted for growth-focused businesses.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Website Design",
      provider: {
        "@type": "Person",
        name: "Priyajeet Majhi",
      },
      areaServed: "Worldwide",
    },
  },
  "/frontend-design": {
    title: "Frontend Design Services | Priyajeet Majhi",
    description:
      "Frontend design and UI implementation services built for smooth, user-focused web experiences.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Frontend Design",
      provider: {
        "@type": "Person",
        name: "Priyajeet Majhi",
      },
      areaServed: "Worldwide",
    },
  },
  "/design-support": {
    title: "Design Support Services | Priyajeet Majhi",
    description:
      "Flexible design support for ongoing creative and product needs, from one-off tasks to monthly retainers.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Design Support",
      provider: {
        "@type": "Person",
        name: "Priyajeet Majhi",
      },
      areaServed: "Worldwide",
    },
  },
  "/privacy": {
    title: "Privacy Policy | Priyajeet Majhi",
    description:
      "Read the privacy policy and data handling practices for priyajeetmajhi.netlify.app.",
  },
  "/contact": {
    title: "Contact | Priyajeet Majhi",
    description:
      "Get in touch with Priyajeet Majhi for branding, website design, frontend design, and design support enquiries.",
  },
};

const NOT_FOUND_SEO = {
  title: "Page Not Found | Priyajeet Majhi",
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
