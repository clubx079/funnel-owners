import { GuiasPage, guiasMetadata } from '@/components/pages/Routes';

export const dynamic = 'force-static';
export const generateMetadata = () => guiasMetadata('sv');
export default function Page() { return <GuiasPage cc="sv" />; }
