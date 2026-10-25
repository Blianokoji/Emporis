/**
 * Emporis Image Asset & Media Library
 * 
 * Provides centralized curated imagery, SVG placeholder generation,
 * responsive srcset helpers, and domain-specific visual assets for Claude Design.
 */

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  aspectRatio?: string;
  blurDataUrl?: string;
}

/**
 * Curated Unsplash CDN photography with optimized compression & WebP format.
 * Sourced for clinical research, biotech, neurology, and premium healthcare aesthetics.
 */
export const CURATED_IMAGERY = {
  laboratory: {
    hero: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1600&q=80",
    microscope: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    researchers: "https://images.unsplash.com/photo-1579165466791-788226ab77b6?auto=format&fit=crop&w=1200&q=80",
    cleanroom: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80",
  },
  neurology: {
    neuralNetwork: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80",
    cellularBio: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80",
    dnaStructure: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1200&q=80",
  },
  wellness: {
    vitality: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    activeLiving: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    healthyLifestyle: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
  },
  abstract: {
    biotechWave: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
    molecularGlow: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    deepPlumCanvas: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
  }
} as const;

/**
 * Generates an ultra-lightweight SVG placeholder Data URI.
 * Eliminates layout shifts (CLS) and guarantees zero broken images during prototype exploration.
 */
export function getSvgPlaceholder(
  width = 600,
  height = 400,
  text = "Asset Loading...",
  bgStart = "#42104F",
  bgEnd = "#263D99"
): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bgStart}" stop-opacity="0.8" />
        <stop offset="100%" stop-color="${bgEnd}" stop-opacity="0.9" />
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#g)" />
    <circle cx="${width / 2}" cy="${height / 2 - 12}" r="28" fill="rgba(255,255,255,0.15)" />
    <path d="M${width / 2 - 12} ${height / 2 - 4} L${width / 2 + 12} ${height / 2 - 4} M${width / 2} ${height / 2 - 16} L${width / 2} ${height / 2 + 8}" stroke="rgba(255,255,255,0.4)" stroke-width="2" stroke-linecap="round" />
    <text x="50%" y="${height / 2 + 36}" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.75)" text-anchor="middle">${text}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/**
 * Builds responsive srcset strings for Unsplash images across standard screen widths.
 */
export function getResponsiveSrcSet(baseUrl: string, widths = [640, 768, 1024, 1280, 1536]): string {
  const cleanUrl = baseUrl.split("&w=")[0].split("?w=")[0];
  const separator = cleanUrl.includes("?") ? "&" : "?";
  return widths
    .map((w) => `${cleanUrl}${separator}auto=format&fit=crop&w=${w}&q=80 ${w}w`)
    .join(", ");
}
