import { GuidePage, guideMetadata, guideParams } from '@/components/pages/Routes';

export const dynamic = 'force-static';
export const dynamicParams = false;
export const generateStaticParams = () => guideParams('ve');
export async function generateMetadata({ params }) { return guideMetadata('ve', (await params).slug); }
export default async function Page({ params }) { return <GuidePage cc="ve" slug={(await params).slug} />; }
