import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";

const TestimonialCard = ({ client, title, company, services, videoSrc }) => {
  return (
    <article
      className="relative flex w-full items-center justify-between rounded-3xl rounded-br-2xl border
      border-solid border-dark bg-light p-12 shadow-2xl dark:border-light dark:bg-dark 
      xl:p-8 lg:flex-col lg:gap-10 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      {/* Background Accent Card Graphic */}
      <div
        className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]"
      />

      {/* Video Container Left Side */}
      <div className="w-1/2 overflow-hidden rounded-2xl border border-solid border-dark dark:border-light lg:w-full aspect-video shadow-lg">
        <video
          className="h-full w-full object-contain"
          controls
          preload="metadata"
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Text Meta Content Right Side */}
      <div className="flex w-1/2 flex-col items-start justify-between pl-10 lg:w-full lg:pl-0">
        <div className="w-full">
          <span className="text-xl font-semibold uppercase tracking-wider text-primary dark:text-primaryDark xs:text-sm">
            Client Review
          </span>

          <h2 className="my-2 w-full text-left text-4xl font-bold tracking-tight text-dark dark:text-light xl:text-3xl xs:text-2xl">
            {client}
          </h2>

          <p className="text-lg font-medium text-dark/70 dark:text-light/70 sm:text-base xs:text-sm">
            {title} &mdash;{" "}
            <span className="italic font-semibold text-dark dark:text-light">
              {company}
            </span>
          </p>

          <hr className="my-6 w-full border-t border-dark/20 dark:border-light/20" />

          {/* Render Deliverable Tags */}
          <div className="mt-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-dark/50 dark:text-light/50 mb-3">
              Services Delivered:
            </h4>
            <div className="flex flex-wrap gap-2">
              {services.map((service, index) => (
                <span
                  key={index}
                  className="rounded-full bg-dark/5 px-4 py-1.5 text-sm font-medium text-dark border border-solid border-dark/10
                           dark:bg-light/10 dark:text-light dark:border-light/10 xs:text-xs"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default function Testimonials() {
  return (
    <>
      <Head>
        <title>Client Testimonials | Marketing Portfolio</title>
        <meta
          name="description"
          content="See what clients and founders say about working with me. Read case highlights from Meta Ads, paid lead generation, and digital client growth strategies."
        />
      </Head>
      <TransitionEffect />
      <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="What Clients Say!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="flex flex-col gap-32 w-full mt-8">
            <TestimonialCard
              client="Rj Ahmed"
              title="Founder & Podcast Host (Interviews with Entrepreneurs)"
              company="Shopogenie Studios"
              services={["Meta Ads", "Paid Leads", "Podcast Studio Bookings"]}
              videoSrc="/videos/testimonial.mp4"
            />
          </div>
        </Layout>
      </main>
    </>
  );
}
