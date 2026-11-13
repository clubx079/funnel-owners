import '../globals.css';
import RootShell, { rootMetadata, rootViewport } from '@/components/pages/RootShell';

// Paraguay: the root of the site (/, /guias/, /<slug>/).
export const metadata = rootMetadata('py');
export const viewport = rootViewport;

export default function Layout({ children }) {
  return <RootShell cc="py">{children}</RootShell>;
}
