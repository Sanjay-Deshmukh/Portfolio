import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon, LinkArrow } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";
import profilePic from "../../public/images/profile/developer-pic-1.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sanjay Deshmukh | AI/ML Engineer & Software Developer</title>
        <meta
          name="description"
          content="Sanjay Deshmukh is an AI/ML Engineer and Software Developer based in Pune, India, specializing in Machine Learning, Deep Learning, and full-stack web development."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TransitionEffect />

      <article
        className="flex min-h-screen items-center text-dark dark:text-light sm:items-start"
      >
        <div
          className="flex w-full items-center justify-between px-32 pt-0 md:flex-col lg:px-16 md:px-12 sm:px-8"
        >
          {/* Profile Image */}
          <motion.div
            className="w-1/2 lg:w-full lg:hidden md:inline-block md:w-full"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={profilePic}
              alt="Sanjay Deshmukh"
              className="w-full h-auto lg:hidden md:inline-block md:w-full"
              style={{ mixBlendMode: 'lighten' }}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-1/2 flex flex-col items-start self-center lg:w-full lg:text-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2
              className="inline-block w-full text-primary dark:text-primaryDark font-semibold text-2xl mb-2
              xl:text-xl lg:text-center md:text-xl sm:text-lg"
            >
              Hi, I&apos;m
            </h2>
            <h1
              className="inline-block w-full text-dark font-bold text-6xl dark:text-light
              xl:text-5xl lg:text-center lg:text-6xl md:text-5xl sm:text-3xl"
            >
              Sanjay Deshmukh
            </h1>
            <h3
              className="inline-block w-full text-dark/70 dark:text-light/70 font-medium text-2xl mt-2
              xl:text-xl lg:text-center md:text-xl sm:text-lg"
            >
              AI/ML Engineer · Software Developer · Researcher
            </h3>

            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
              As a passionate AI/ML Engineer and Software Developer, I specialize in building
              intelligent systems and innovative web applications. Explore my latest projects
              in machine learning, deep learning, computer vision, and full-stack development.
            </p>

            <div className="mt-2 flex items-center self-start lg:self-center">
              <a
                href="/Sanjay_Deshmukh_Resume.pdf"
                download="Sanjay_Deshmukh_Resume.pdf"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark 
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                md:p-2 md:px-4 md:text-base"
                id="resume-button"
              >
                Resume <LinkArrow className={"w-6 ml-1"} />
              </a>

              <Link
                href="/contact"
                className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light
                md:text-base"
                id="contact-button"
              >
                Contact
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center mt-6 gap-4 self-start lg:self-center">
              <motion.a
                href="https://github.com/Sanjay-Deshmukh"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10"
                id="home-github"
                aria-label="GitHub"
              >
                <GithubIcon />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sanjay-deshmukh10"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10"
                id="home-linkedin"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </article>
    </>
  );
}
