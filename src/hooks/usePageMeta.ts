import { useEffect } from "react";

const SITE_URL = "https://emporishealthcare.com";

interface PageMeta {
  title: string;
  description: string;
  /** Route path, e.g. "/embiotin". */
  path: string;
}

function setMeta(selector: string, attr: "content" | "href", value: string): void {
  document.querySelector(selector)?.setAttribute(attr, value);
}

/** Keeps the document title, description, canonical and Open Graph tags in step with the route. */
export function usePageMeta({ title, description, path }: PageMeta): void {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
  }, [title, description, path]);
}
