import { GuidePage, guideMetadata, guideParams } from '@/components/pages/Routes';

export const dynamic = 'force-static';
export const dynamicParams = false;
export const generateStaticParams = () => guideParams('sv');
export async function generateMetadata({ params }) { return guideMetadata('sv', (await params).slug); }
export default async function Page({ params }) { return <GuidePage cc="sv" slug={(await params).slug} />; }
