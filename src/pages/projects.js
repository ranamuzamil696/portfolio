import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import proj1 from "../../public/images/projects/proj1.jpeg";
import proj2 from "../../public/images/projects/proj2.jpeg";
import proj3 from "../../public/images/projects/proj3.jpeg";
import proj4 from "../../public/images/projects/proj4.jpeg";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img }) => {
  return (
    <article
      className="relative flex w-full items-center justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl dark:border-light dark:bg-dark lg:flex-col 
lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]"
      />

      <div className="w-1/2 overflow-hidden rounded-lg lg:w-full">
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </div>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
          {title}
        </h2>
        <p className="my-2 rounded-md font-medium text-dark dark:text-light text-base sm:text-sm xs:text-xs leading-relaxed">
          {summary}
        </p>
      </div>
    </article>
  );
};

const Project = ({ title, type, description, img }) => {
  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl rounded-br-2xl 
      border border-solid border-dark bg-light p-6 shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />

      <div className="w-full overflow-hidden rounded-lg">
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl md:text-xl">
          {title}
        </h2>

        {description && (
          <p className="my-2 text-base font-medium text-dark dark:text-light sm:text-sm xs:text-xs leading-relaxed text-left">
            {description}
          </p>
        )}
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Modern Portfolio Built with Nextjs | Projects Page</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by CodeBucks, a Next.js developer with expertise in React.js and full-stack development. Browse software engineering articles and tutorials for tips on creating your own portfolio."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16 flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Results That Speaks"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Oporto"
                img={proj1}
                title="Maketing Manager"
                description="For the past eight years as Oporto's Marketing Manager in Dubai, I lead the full organic marketing ecosystem across content, PR, campaigns, and delivery platforms. Within my first month, I drove a record-breaking revenue surge from 450K AED to 735K AED, selling 14,000 burgers and hitting the highest sales milestone in Dubai operations. Through data-driven organic scaling, I permanently elevated delivery volume from 7 to over 45+ daily orders and stabilized ongoing monthly revenue above 535K AED."
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Shopogenie Studios"
                img={proj2}
                title="Media Buyer"
                description="I am currently working remotely with Shopogenie Studios, a Pakistan based podcast studio, as a Meta Ads lead generation specialist. With a focused targeting strategy and minimal budget, I consistently generate an average of 7 high quality and fully relevant leads per day, maintaining a 98% success score with zero irrelevant inquiries. This is an ongoing part time freelance role where I efficiently manage and optimize campaigns within one dedicated hour daily, ensuring consistent and performance driven results."
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Instructor Content"
                img={proj3}
                title="Marketing Manager"
                description="I currently work remotely with a Dubai based IT Expert and Instructor, managing his website and social media while creating AI driven content to strengthen his digital presence. Alongside handling strategy and optimization, I also conduct two weekly sessions with his marketing students, where I guide them through practical techniques and real campaign challenges. My focus is always on improving performance, fixing media buying mistakes, and introducing smarter, results driven marketing strategies."
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Doctor On Call"
                img={proj4}
                title="Marketing Manager"
                description="I worked as a Marketing Manager for a leading Malaysian pharmacy brand, managing its complete digital marketing ecosystem with a strong focus on performance and measurable growth. From social media and landing pages to Google and Meta ads, analytics, and tracking integration, I handled everything end to end to ensure data driven decisions. My approach was always results oriented, optimizing campaigns continuously to improve visibility, engagement, and overall business performance."
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
