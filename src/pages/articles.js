import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Image from "next/image";
const oportoImage = "/images/projects/oporto.jpeg";
const shopogenieImage = "/images/projects/shopogenie.jpeg";
const instructorImage = "/images/projects/instructor.jpeg";
const doctorImage = "/images/projects/doctor-on-call.jpeg";
const testimonialVideo = "/images/testimonial.MOV";

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

          <div className="grid gap-10 lg:grid-cols-2">
            <section className="space-y-8">
              <div className="rounded-3xl bg-light p-8 shadow-lg dark:bg-dark dark:shadow-black/20">
                <h2 className="text-3xl font-bold mb-4">Oporto</h2>
                <p className="text-base leading-8 text-dark/80 dark:text-light/80">
                  For the past eight months, I have been working onsite in Dubai as the Marketing Manager for Oporto, an Australian F&B brand with 275+ branches globally. I manage the complete A to Z organic marketing ecosystem including content creation, campaigns, delivery growth, PR, influencers, and digital platforms. In my first month, I increased revenue from 450K AED to 735K AED, marking the highest sales milestone in Dubai operations. I scaled daily delivery orders from 7–8 to a peak of 58 and now consistently maintain 45+ orders per day. Through structured organic strategies, I stabilized revenue above 535K AED monthly and sold 14,000 burgers in my first month alone.
                </p>
              </div>

              <div className="rounded-3xl bg-light p-8 shadow-lg dark:bg-dark dark:shadow-black/20">
                <h2 className="text-3xl font-bold mb-4">Shopogenie Studios</h2>
                <p className="text-base leading-8 text-dark/80 dark:text-light/80">
                  I am currently working remotely with Shopogenie Studios, a Pakistan based podcast studio, as a Meta Ads lead generation specialist. With a focused targeting strategy and minimal budget, I consistently generate an average of 7 high quality and fully relevant leads per day, maintaining a 98% success score with zero irrelevant inquiries. This is an ongoing part time freelance role where I efficiently manage and optimize campaigns within one dedicated hour daily, ensuring consistent and performance-driven results.
                </p>
              </div>

              <div className="rounded-3xl bg-light p-8 shadow-lg dark:bg-dark dark:shadow-black/20">
                <h2 className="text-3xl font-bold mb-4">Instructor</h2>
                <p className="text-base leading-8 text-dark/80 dark:text-light/80">
                  I currently work remotely with a Dubai based IT Expert and Instructor, managing his website and social media while creating AI driven content to strengthen his digital presence. Alongside handling strategy and optimization, I also conduct two weekly sessions with his marketing students, where I guide them through practical techniques and real campaign challenges. My focus is always on improving performance, fixing media buying mistakes, and introducing smarter, results driven marketing strategies.
                </p>
              </div>

              <div className="rounded-3xl bg-light p-8 shadow-lg dark:bg-dark dark:shadow-black/20">
                <h2 className="text-3xl font-bold mb-4">Doctor On Call</h2>
                <p className="text-base leading-8 text-dark/80 dark:text-light/80">
                  I currently work remotely with a Dubai based IT Expert and Instructor, managing his website and social media while creating AI driven content to strengthen his digital presence. Alongside handling strategy and optimization, I also conduct two weekly sessions with his marketing students, where I guide them through practical techniques and real campaign challenges. My focus is always on improving performance, fixing media buying mistakes, and introducing smarter, results driven marketing strategies.
                </p>
              </div>
            </section>

            <section className="space-y-10">
              <div className="rounded-3xl overflow-hidden bg-light shadow-lg dark:bg-dark dark:shadow-black/20">
                <video
                  src={testimonialVideo}
                  controls
                  className="w-full h-auto"
                />
                <div className="p-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-primary dark:text-primaryDark">Client</p>
                  <h2 className="text-3xl font-bold mt-3">Rj Ahmed</h2>
                  <p className="text-base text-dark/70 dark:text-light/70 mt-4">
                    Founder of Shopogenie Studios
                  </p>
                  <p className="text-base text-dark/70 dark:text-light/70">
                    Podcast Host: Interviews with Entrepreneurs podcast
                  </p>
                  <p className="text-base text-dark/70 dark:text-light/70 mt-4">
                    Services Given: Meta Ads | Paid Leads | Podcast Studio Bookings
                  </p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl overflow-hidden bg-light shadow-lg dark:bg-dark dark:shadow-black/20">
                  <Image src={oportoImage} alt="Oporto" className="w-full h-56 object-cover" width={600} height={360} />
                </div>
                <div className="rounded-3xl overflow-hidden bg-light shadow-lg dark:bg-dark dark:shadow-black/20">
                  <Image src={shopogenieImage} alt="Shopogenie" className="w-full h-56 object-cover" width={600} height={360} />
                </div>
                <div className="rounded-3xl overflow-hidden bg-light shadow-lg dark:bg-dark dark:shadow-black/20">
                  <Image src={instructorImage} alt="Instructor" className="w-full h-56 object-cover" width={600} height={360} />
                </div>
                <div className="rounded-3xl overflow-hidden bg-light shadow-lg dark:bg-dark dark:shadow-black/20">
                  <Image src={doctorImage} alt="Doctor On Call" className="w-full h-56 object-cover" width={600} height={360} />
                </div>
              </div>
            </section>
          </div>
        </Layout>
      </main>
    </>
  );
}
