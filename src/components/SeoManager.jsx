import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSeoByPath } from "../seo/routeSeo";

const ensureTag = (selector, createTag) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = createTag();
    document.head.appendChild(element);
  }
  return element;
};

function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const seo = getSeoByPath(location.pathname);

    document.title = seo.title;

    const description = ensureTag('meta[name="description"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      return meta;
    });
    description.setAttribute("content", seo.description);

    const robots = ensureTag('meta[name="robots"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "robots");
      return meta;
    });
    robots.setAttribute(
      "content",
      seo.noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    const canonical = ensureTag('link[rel="canonical"]', () => {
      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      return link;
    });
    canonical.setAttribute("href", seo.canonical);

    const ogTitle = ensureTag('meta[property="og:title"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:title");
      return meta;
    });
    ogTitle.setAttribute("content", seo.title);

    const ogDescription = ensureTag('meta[property="og:description"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:description");
      return meta;
    });
    ogDescription.setAttribute("content", seo.description);

    const ogUrl = ensureTag('meta[property="og:url"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:url");
      return meta;
    });
    ogUrl.setAttribute("content", seo.canonical);

    const ogImage = ensureTag('meta[property="og:image"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:image");
      return meta;
    });
    ogImage.setAttribute("content", seo.image);

    const twitterTitle = ensureTag('meta[name="twitter:title"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "twitter:title");
      return meta;
    });
    twitterTitle.setAttribute("content", seo.title);

    const twitterDescription = ensureTag('meta[name="twitter:description"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "twitter:description");
      return meta;
    });
    twitterDescription.setAttribute("content", seo.description);

    const twitterImage = ensureTag('meta[name="twitter:image"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "twitter:image");
      return meta;
    });
    twitterImage.setAttribute("content", seo.image);

    const jsonLd = ensureTag('script[data-seo-json-ld="true"]', () => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-json-ld", "true");
      return script;
    });
    jsonLd.textContent = JSON.stringify(
      seo.jsonLd || {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: seo.title,
        description: seo.description,
        url: seo.canonical,
      }
    );
  }, [location.pathname]);

  return null;
}

export default SeoManager;
