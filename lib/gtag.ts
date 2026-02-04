// lib/gtag.ts
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config: Record<string, any>) => void;
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const pageview = (url: string) => {
  if (!GA_ID || typeof window === "undefined") return;

  window.gtag("config", GA_ID, {
    page_path: url,
  });
};
