import { cookies } from 'next/headers';
import { getTranslations } from '@/lib/getTranslations';
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "Home | Next App",
};


export default async function Home() {
    const cookieStore = await cookies();
    const language = await cookieStore.get('language')?.value || 'en';

    const translations = await getTranslations(language);
    console.log("translations --->", language, translations)
    return (
        <div className={"contentPage"}>
            <h1>{translations["welcome"] || "Welcome!"}</h1>
        </div>
    );
}
