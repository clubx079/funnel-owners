import '../globals.css';
import RootShell, { rootMetadata, rootViewport } from '@/components/pages/RootShell';

// bolivia: /bolivia/, /bolivia/guias/, /bolivia/<slug>/ (content in content/pages/bo/).
export const metadata = rootMetadata('bo');
export const viewport = rootViewport;

export default function Layout({ children }) {
  return <RootShell cc="bo">{children}</RootShell>;
}
