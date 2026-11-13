import '../globals.css';
import RootShell, { rootMetadata, rootViewport } from '@/components/pages/RootShell';

// uruguay: /uruguay/, /uruguay/guias/, /uruguay/<slug>/ (content in content/pages/uy/).
export const metadata = rootMetadata('uy');
export const viewport = rootViewport;

export default function Layout({ children }) {
  return <RootShell cc="uy">{children}</RootShell>;
}
