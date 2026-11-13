import '../globals.css';
import RootShell, { rootMetadata, rootViewport } from '@/components/pages/RootShell';

// el-salvador: /el-salvador/, /el-salvador/guias/, /el-salvador/<slug>/ (content in content/pages/sv/).
export const metadata = rootMetadata('sv');
export const viewport = rootViewport;

export default function Layout({ children }) {
  return <RootShell cc="sv">{children}</RootShell>;
}
