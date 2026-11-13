import { GuidePage, guideMetadata, guideParams } from '@/components/pages/Routes';

export const dynamic = 'force-static';
export const dynamicParams = false; // only the pages that exist as content files; anything else is a 404
export const generateStaticParams = () => guideParams('py');
export async function generateMetadata({ params }) { return guideMetadata('py', (await params).slug); }
export default async function Page({ params }) { return <GuidePage cc="py" slug={(await params).slug} />; }
