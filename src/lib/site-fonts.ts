/**
 * Single source of truth for how the astrologer's two font design tokens map
 * to real CSS font stacks.
 *
 * The Customize tab exposes exactly two font selectors, and they own two
 * disjoint buckets of text:
 *
 *   `displayFont` -> "Headings & Buttons". Every h1-h4, the site name, the
 *                   full-screen menu links, pull quotes and the labels on
 *                   CTA / auth buttons.
 *   `bodyFont`    -> "Body Text". Paragraphs, sub-text under a heading,
 *                   captions, form and data labels, and interactive controls
 *                   (tabs, slots, inputs) whose text is data rather than a
 *                   heading.
 *
 * Anything that resolves a font stack for the rendered site
 * (`designVars()` in site-render.tsx, scoped to `.wx-page`) or for the
 * dashboard pages (`applySiteTheme()` in theme.ts, scoped to `<html>`) reads
 * from here, so a font picked in the editor resolves identically everywhere.
 */

/** Self-hosted template faces for the two built-in categories. */
const CATEGORY_STACKS: Record<string, string> = {
  serif: '"eschaton", Georgia, serif',
  sans: '"futura-lt-w01-book", Futura, "Century Gothic", system-ui, sans-serif',
};

/** Category used when a token is missing or blank. */
const DEFAULT_DISPLAY_CATEGORY = "serif";
const DEFAULT_BODY_CATEGORY = "sans";

function isCategory(value: string): boolean {
  return value === "serif" || value === "sans";
}

function readFamily(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

/**
 * A category token resolves to the self-hosted template face; anything else is
 * treated as a Google Font family name. `defaultCategory` is used when the
 * token is missing or blank.
 */
export function fontStack(value: unknown, defaultCategory: string): string {
  const family = readFamily(value);
  if (!family) return CATEGORY_STACKS[defaultCategory] as string;
  if (isCategory(family)) return CATEGORY_STACKS[family] as string;
  return `"${family}", system-ui, sans-serif`;
}

/** Stack for the "Headings & Buttons" bucket. */
export function displayFontStack(value: unknown): string {
  return fontStack(value, DEFAULT_DISPLAY_CATEGORY);
}

/** Stack for the "Body Text" bucket. */
export function bodyFontStack(value: unknown): string {
  return fontStack(value, DEFAULT_BODY_CATEGORY);
}

const loadingFonts = new Map<string, Promise<void>>();

/**
 * Inject the Google Fonts stylesheet for a family so it is actually available
 * when the stack referencing it renders. Categories are self-hosted and no-op.
 */
export function ensureFont(value: unknown): void {
  const family = readFamily(value);
  if (!family || isCategory(family)) return;
  if (typeof document === "undefined") return;
  if (loadingFonts.has(family)) return;

  const id = `gf-${family.replace(/[^a-zA-Z0-9]/g, "-")}`;
  if (document.getElementById(id)) {
    loadingFonts.set(family, Promise.resolve());
    return;
  }

  const pending = (async () => {
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
      family,
    )}:wght@400;500;600;700&display=swap`;
    document.head.appendChild(link);
    try {
      await document.fonts.load(`16px "${family}"`);
    } catch {
      /* family unavailable - the stack falls back to the generic tail */
    }
  })();
  loadingFonts.set(family, pending);
}

/**
 * The `--site-display` / `--site-body` pair for a design token object. Reading
 * both keys here guarantees the two selectors can never drift apart.
 */
export function fontVars(design: Record<string, unknown> | null | undefined): Record<string, string> {
  const dv = design ?? {};
  const displayFont = readFamily(dv["displayFont"]);
  const bodyFont = readFamily(dv["bodyFont"]);
  ensureFont(displayFont);
  ensureFont(bodyFont);
  return {
    "--site-display": displayFontStack(displayFont),
    "--site-body": bodyFontStack(bodyFont),
  };
}
