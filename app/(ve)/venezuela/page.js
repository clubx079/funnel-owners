import { GuidePage, guideMetadata } from '@/components/pages/Routes';

export const dynamic = 'force-static';
export const generateMetadata = () => guideMetadata('ve', '');
export default function Page() { return <GuidePage cc="ve" slug="" />; }
