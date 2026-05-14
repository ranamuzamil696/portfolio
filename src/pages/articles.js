import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
const testimonialVideo = "/images/testimonial.mp4";

import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";

export default function Articles() {
  return (
    <>
      <Head>
        <title>Let them speak | Testimonials</title>
        <meta name="description" content="Hear from clients who worked with Rana Muzamil on marketing growth, paid ads, and brand performance campaigns." />
      </Head>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Let them speak"
            className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="space-y-8">
              <div className="rounded-3xl bg-light p-10 shadow-lg dark:bg-dark dark:shadow-black/20">
                <p className="text-base leading-8 text-dark/80 dark:text-light/80">
                  Client: Rj Ahmed
                </p>
                <p className="text-base leading-8 text-dark/80 dark:text-light/80 mt-4">
                  Job Title: Founder of Shopogenie Studios
                </p>
                <p className="text-base leading-8 text-dark/80 dark:text-light/80 mt-4">
                  Podcast Host: Interviews with Entrepreneurs podcast
                </p>
                <p className="text-base leading-8 text-dark/80 dark:text-light/80 mt-4">
                  Services Given: Meta Ads | Paid Leads | Podcast Studio Bookings
                </p>
              </div>
            </section>

            <section className="space-y-10">
              <div className="rounded-3xl overflow-hidden bg-light shadow-lg dark:bg-dark dark:shadow-black/20">
                <video controls playsInline preload="metadata" className="w-full h-auto bg-black">
                  <source src={testimonialVideo} type="video/quicktime" />
                  Your browser does not support this video format.
                </video>
              </div>
            </section>
          </div>
        </Layout>
      </main>
    </>
  );
}
