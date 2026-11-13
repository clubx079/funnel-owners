import { GuiasPage, guiasMetadata } from '@/components/pages/Routes';

export const dynamic = 'force-static';
export const generateMetadata = () => guiasMetadata('bo');
export default function Page() { return <GuiasPage cc="bo" />; }
