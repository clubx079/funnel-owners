import { GuidePage, guideMetadata } from '@/components/pages/Routes';

export const dynamic = 'force-static';
export const generateMetadata = () => guideMetadata('py', '');
export default function Page() { return <GuidePage cc="py" slug="" />; }
