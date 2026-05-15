import HomeClient from "./HomeClient";
import { generateMetadata, getPageKeywords } from "@/utils/seo";

export const metadata = generateMetadata({
  title: "Pravaaha Digital | Custom Website & App Development",
  description:
    "Professional web development, app development, and custom digital solutions. Based in Kalna, WB.",
  keywords: getPageKeywords("home"),
});

export default function Page() {
  return <HomeClient />;
}