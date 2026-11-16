/**
 * Site-wide theme application for the public site.
 *
 * The astrologer's design tokens are normally scoped to the rendered site
 * (`designVars()` on `.wx-page` in site-render.tsx). This module lifts the same
 * tokens onto <html> so the whole public site — client dashboard / questions /
 * bookings pages, portaled modals, floating buttons — matches the astrologer's
 * theme. The last-visited astrologer's design is persisted in localStorage so
 * those pages keep the theme on a fresh visit.
 *
 * The font half of the tokens is resolved by site-fonts.ts, which both this
 * module and the rendered site share, so a font picked in the Customize tab
 * resolves to the same stack on both.
 */

import { fontVars } from "./site-fonts";

const THEME_VAR_KEYS = [
  "--site-maroon",
  "--site-pink",
  "--site-white",
  "--site-dark",
  "--site-display",
  "--site-body",
  "--site-scale",
] as const;

const STORAGE_KEY = "supertalks:site-theme";

function str(value: unknown, fallback: string): string {
  return typeof value === "string" && value !== "" ? value : fallback;
}

function num(value: unknown, fallback: number): number | null {
  return typeof value === "number" ? value : null;
}

export function siteDesignVars(design: Record<string, unknown>): Record<string, string> {
  const dv = design ?? {};
  const vars: Record<string, string> = {
    "--site-maroon": str(dv["primaryColor"], "#771609"),
    "--site-pink": str(dv["panelColor"], "#fff4f3"),
    "--site-white": str(dv["backgroundColor"], "#fffcfc"),
    "--site-dark": str(dv["darkColor"], "#253039"),
    ...fontVars(dv),
  };
  const scale = num(dv["scale"], 1);
  if (scale !== null) vars["--site-scale"] = String(scale);
  return vars;
}

export function applySiteTheme(design: Record<string, unknown> | null | undefined): void {
  const root = document.documentElement;
  if (!root) return;
  for (const key of THEME_VAR_KEYS) root.style.removeProperty(key);
  if (!design) return;
  const vars = siteDesignVars(design);
  for (const [key, value] of Object.entries(vars)) root.style.setProperty(key, value);
}

export function saveSiteTheme(design: Record<string, unknown> | null | undefined): void {
  try {
    if (design) localStorage.setItem(STORAGE_KEY, JSON.stringify(design));
    else localStorage.removeItem(STORAGE_KEY);
  } catch {
    // storage may be unavailable (private mode)
  }
}

export function loadSiteTheme(): Record<string, unknown> | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}

export function applyStoredSiteTheme(): void {
  applySiteTheme(loadSiteTheme());
}