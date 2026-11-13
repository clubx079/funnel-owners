import { GuidePage, guideMetadata, guideParams } from '@/components/pages/Routes';

export const dynamic = 'force-static';
export const dynamicParams = false;
export const generateStaticParams = () => guideParams('bo');
export async function generateMetadata({ params }) { return guideMetadata('bo', (await params).slug); }
export default async function Page({ params }) { return <GuidePage cc="bo" slug={(await params).slug} />; }
