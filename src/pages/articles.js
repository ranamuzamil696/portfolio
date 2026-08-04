import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import ReactCountryFlag from "react-country-flag";

const TestimonialCard = ({
  client,
  title,
  company,
  country,
  flag,
  services,
  videoSrc,
}) => {
  return (
    <article
      className="relative flex w-full flex-col justify-between rounded-3xl rounded-br-2xl border
      border-solid border-dark bg-light p-8 shadow-2xl dark:border-light dark:bg-dark 
      xs:rounded-2xl xs:rounded-br-3xl xs:p-5"
    >
      {/* Background Accent Card Graphic */}
      <div
        className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]"
      />

      {/* Video Container (Top) */}
      <div className="w-full overflow-hidden rounded-2xl border border-solid border-dark dark:border-light aspect-video shadow-lg mb-6">
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

      {/* Text Meta Content (Bottom) */}
      <div className="flex w-full flex-col justify-between">
        <div className="w-full">
          <div className="flex items-center justify-between gap-2">
            <span className="text-lg font-semibold uppercase tracking-wider text-primary dark:text-primaryDark xs:text-xs">
              Client Review
            </span>

            {/* Country & Flag Badge */}
            {country && (
              <div className="flex items-center gap-1.5 rounded-full bg-dark/5 dark:bg-light/10 border border-solid border-dark/10 dark:border-light/10 px-3 py-1 text-xs font-medium text-dark dark:text-light">
                {flag && (
                  <ReactCountryFlag
                    countryCode={flag}
                    svg
                    style={{
                      width: "1.5em",
                      height: "1.5em",
                      borderRadius: "2px",
                      display: "inline-block",
                    }}
                    title={country}
                  />
                )}
                <span>{country}</span>
              </div>
            )}
          </div>

          <h2 className="my-2 w-full text-left text-2xl font-bold tracking-tight text-dark dark:text-light xl:text-xl">
            {client}
          </h2>

          <p className="text-base font-medium text-dark/70 dark:text-light/70 xs:text-sm">
            {title} &mdash;{" "}
            <span className="italic font-semibold text-dark dark:text-light">
              {company}
            </span>
          </p>

          <hr className="my-4 w-full border-t border-dark/20 dark:border-light/20" />

          {/* Render Deliverable Tags */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-dark/50 dark:text-light/50 mb-2">
              Services Delivered:
            </h4>
            <div className="flex flex-wrap gap-2">
              {services.map((service, index) => (
                <span
                  key={index}
                  className="rounded-full bg-dark/5 px-3 py-1 text-xs font-medium text-dark border border-solid border-dark/10
                             dark:bg-light/10 dark:text-light dark:border-light/10"
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
          content="See what clients and founders say about working with me."
        />
      </Head>
      <TransitionEffect />
      <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="What Clients Say!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          {/* 2-Column Grid Layout */}
          <div className="grid grid-cols-2 gap-16 lg:grid-cols-1 w-full mt-8 gap-y-20">
            <TestimonialCard
              client="Rj Ahmed"
              title="Founder & Podcast Host (Interviews with Entrepreneurs)"
              company="Shopogenie Studios"
              country="Pakistan"
              flag="pk"
              services={["Meta Ads", "Paid Leads", "Podcast Studio Bookings"]}
              videoSrc="/videos/testimonial.mp4"
            />

            <TestimonialCard
              client="Dr Lindie"
              title="Founder & Ceo Beauty Salon"
              company="Her Studios"
              country="United States"
              flag="us"
              services={[
                "Social Media Marketing",
                "Website Creation",
                "Meta Ads",
                "Paid Leads",
              ]}
              videoSrc="/videos/testimonial-1.mp4"
            />
          </div>
        </Layout>
      </main>
    </>
  );
}
