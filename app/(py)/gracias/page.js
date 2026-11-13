import { GraciasPage, graciasMetadata } from '@/components/pages/Routes';

export const dynamic = 'force-static';
export const metadata = graciasMetadata;
export default function Page() { return <GraciasPage cc="py" />; }
