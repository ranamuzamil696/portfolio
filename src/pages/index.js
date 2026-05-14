import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";

const lightBulb = "/images/svgs/miscellaneous_icons_1.svg";
const profilePic = "/images/about.png";


export default function Home() {
  
  return (
    <>
      <Head>
        <title>Rana Muzamil - Marketing Manager Portfolio</title>
        <meta
          name="description"
          content="Explore Rana Muzamil's marketing portfolio and discover expertise in digital growth systems, strategy, and performance-driven marketing that delivers real business results."
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between gap-10 md:flex-col">
            <div className="w-full max-w-[420px] lg:hidden md:inline-block md:w-full sm:mx-auto">
              <Image
                src={profilePic}
                alt="Rana Muzamil"
                className="h-auto w-full max-h-[520px] rounded-[2rem] object-cover"
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, 420px"
                priority
              />
            </div>
            <div className="flex w-full max-w-[560px] flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Brands Into Scalable Growth Engines"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
              I help brands turn ideas into scalable digital growth systems. Explore my work focused on strategy, execution, and performance driven marketing that delivers real business results.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center gap-4">
                <Link
                  href="/contact"
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                >
                  Discuss a Project
                </Link>

                <Link
                  href="/projects"
                  className="text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                >
                  Case Studies
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            className="relative h-auto w-full"
            src={lightBulb}
            alt="Codebucks"
          />
        </div>
      </article>
    </>
  );
}
