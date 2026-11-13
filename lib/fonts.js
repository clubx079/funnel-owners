import { Newsreader, Atkinson_Hyperlegible_Next } from 'next/font/google';

// Headings: Newsreader (sober text serif). Reading: Atkinson Hyperlegible Next (made for low-vision readers).
export const display = Newsreader({ subsets: ['latin', 'latin-ext'], variable: '--font-display', display: 'swap', style: ['normal', 'italic'], axes: ['opsz'] });
export const text = Atkinson_Hyperlegible_Next({ subsets: ['latin', 'latin-ext'], variable: '--font-text', display: 'swap', adjustFontFallback: false }); // next/font has no fallback metrics for this family
