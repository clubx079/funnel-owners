import '../globals.css';
import RootShell, { rootMetadata, rootViewport } from '@/components/pages/RootShell';

// venezuela: /venezuela/, /venezuela/guias/, /venezuela/<slug>/ (content in content/pages/ve/).
export const metadata = rootMetadata('ve');
export const viewport = rootViewport;

export default function Layout({ children }) {
  return <RootShell cc="ve">{children}</RootShell>;
}
