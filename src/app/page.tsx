import { SectionBanner } from "./components/SectionBanner";

export default function Home() {
  return (
    <main className="max-w-[1440px] w-[calc(min(1352px,94vw)-2rem)] m-auto grid grid-cols-11">
      <SectionBanner />
    </main>
  );
}
