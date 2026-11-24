import Link from "next/link";
import Image from "next/image";
import TechText from "@/app/components/animated/TechText";
import { LaserFooter } from "@/app/components/LaserFooter";
import SplashCursor from "@/app/components/animated/SplashCursor";
import GlassSurface from "@/app/components/animated/GlassSurface";
import { RegisterForm } from "@/app/components/register/form/RegisterForm";

const headline = "Every great story\nbegins with a name.\nLet this be the start\nof yours.";

const Home = () => {
  return (
    <div className="isolate mx-auto flex min-h-screen w-full max-w-344 flex-col px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <SplashCursor colors={["#9955ff", "#ce96ff", "#7b72ff"]} rainbow={false} quality="low" glow={0.35} intro={false} zIndex={-1} style={{ opacity: 0.8 }} />
      <header className="relative z-1 flex items-center border-b border-[#cab0ef24] py-2 lg:py-4">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight">
          <span className="grid text-[#211030] bg-[#c5a6ff] rounded-xl size-8 place-items-center">
            <Image src="/icon.svg" alt="" width={32} height={32} />
          </span>
          Astra
        </Link>
      </header>

      <main className="mx-auto grid min-h-0 w-full max-w-152 flex-1 grid-cols-1 content-center gap-2 py-3 sm:py-5 lg:max-w-304 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-8 xl:gap-20">
        <section className="relative z-10">
          <h1 className="h-48 w-full text-[#faf5ff] sm:h-56 md:h-64 lg:h-80 xl:h-96 2xl:h-112">
            <TechText
              align="left"
              intro="type"
              fontSize={88}
              sweep={false}
              labels={false}
              text={headline}
              fontWeight={500}
              introDuration={2.8}
              accentColor="#e6baff"
              letterSpacing={-0.045}
              fontFamily="Georgia, serif"
            />
          </h1>
          <p className="mx-[5%] mt-2 hidden max-w-[31ch] leading-relaxed text-[#cfc2df] lg:block">
            Create your Astra profile in three steps. Your progress is saved each time you select Continue.
          </p>
        </section>

        <div className="flex min-w-0 flex-col justify-center">
          <GlassSurface width="100%" height="auto" contentClassName="h-auto flex-col items-stretch p-0">
            <RegisterForm />
          </GlassSurface>
        </div>
      </main>

      {/* <LaserFooter year={new Date().getFullYear()} /> */}
    </div>
  );
};

export default Home;
