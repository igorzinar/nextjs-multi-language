import { Metadata } from "next";
import {cookies} from "next/headers";
import {getTranslations} from "@/lib/getTranslations";

export const metadata: Metadata = {
  title: "About | Next App",
};

export default async function About() {
  const cookieStore = await cookies();
  const language = await cookieStore.get('language')?.value || 'en';

  // Fetch the translations based on the language
  const translations = await getTranslations(language);
  return <div className={"contentPage"}> <h1>{translations["about"] || "About!"}</h1></div>

}
