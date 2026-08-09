import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/about_profile_pic.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value],
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Head>
        <title>RM Portfolio | About Page</title>
        <meta
          name="description"
          content="Learn more about CodeBucks, a Next.js developer with a passion for 
        creating innovative solutions. Discover tips for building a developer portfolio and insights on 
        full-stack development, front-end development, and back-end development."
        />
      </Head>
      <TransitionEffect />
      <main
        className={`flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium ">
                Hi, I&apos;m <strong>Rana Muzamil</strong>, a Marketing Manager
                at Oporto, focused on building scalable digital growth systems
                for modern brands. With over 6 years of hands-on experience, I
                specialize in turning ideas into measurable business results
                through structured strategy and execution.
              </p>
              <p className="my-4 font-medium">
                I believe effective marketing is not about chasing trends, but
                about understanding audiences, solving real business challenges,
                and creating systems that drive sustainable growth and long-term
                value.
              </p>
              <p className="font-medium">
                Whether I&apos;m leading marketing efforts for a brand or
                collaborating on new projects, I bring clarity, ownership, and a
                results-focused mindset to everything I do. I look forward to
                working with brands and teams that are serious about growth.
              </p>
            </div>

            {/* IMAGE CONTAINER */}
            {/* Set to w-[85%] to make it perfectly mid-sized without being tiny */}
            <div
              className="relative col-span-3 h-max w-[105%] mx-auto rounded-2xl border-2 border-solid border-dark 
            bg-light p-6 dark:border-light dark:bg-dark
            xl:col-span-4 xl:w-full md:col-span-8 md:order-1
            "
            >
              <div
                className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light "
              />
              <Image
                className="h-auto w-full rounded-2xl"
                src={profile}
                alt="Rana Muzamil"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>

            {/* STATS CONTAINER */}
            <div
              className="col-span-2 flex flex-col items-end justify-center 
  xl:col-span-8 xl:flex-row xl:items-center xl:justify-around md:order-3
  
  /* Increased gap-y to 12 to give them clean vertical breathing room */
  gap-y-12 xl:gap-y-0"
            >
              {/* Stat Block 1 */}
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={200} />+
                </span>
                <h2
                  className="mb-0 xl:mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  satisfied clients
                </h2>
              </div>

              {/* Stat Block 2 */}
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={249} />+
                </span>
                <h2
                  className="mb-0 xl:mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  projects completed
                </h2>
              </div>

              {/* Stat Block 3 */}
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={8} />+
                </span>
                <h2
                  className="mb-0 xl:mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}
