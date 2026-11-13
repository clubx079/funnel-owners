import { GuidePage, guideMetadata, guideParams } from '@/components/pages/Routes';

export const dynamic = 'force-static';
export const dynamicParams = false;
export const generateStaticParams = () => guideParams('uy');
export async function generateMetadata({ params }) { return guideMetadata('uy', (await params).slug); }
export default async function Page({ params }) { return <GuidePage cc="uy" slug={(await params).slug} />; }
