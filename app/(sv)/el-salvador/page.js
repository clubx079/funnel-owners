import { GuidePage, guideMetadata } from '@/components/pages/Routes';

export const dynamic = 'force-static';
export const generateMetadata = () => guideMetadata('sv', '');
export default function Page() { return <GuidePage cc="sv" slug="" />; }
