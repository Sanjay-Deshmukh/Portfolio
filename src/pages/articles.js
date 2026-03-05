import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedCertificate = ({ img, title, issuer, date, credentialId, link }) => {
    return (
        <li className="relative w-full p-4 col-span-1 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl" />
            <Link
                href={link}
                target="_blank"
                className="inline-block rounded-lg overflow-hidden w-full"
                aria-label={title}
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    width={600}
                    height={380}
                    priority
                />
            </Link>

            <Link href={link} target="_blank" aria-label={title}>
                <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
                    {title}
                </h2>
            </Link>

            <div className="flex items-center justify-between flex-wrap gap-1">
                <span className="text-primary font-semibold dark:text-primaryDark text-sm">
                    🏢 {issuer}
                </span>
                <span className="text-dark/60 dark:text-light/60 text-sm font-medium">
                    📅 {date}
                </span>
            </div>

            {credentialId && (
                <p className="text-xs text-dark/50 dark:text-light/40 mt-1 font-mono truncate">
                    ID: {credentialId}
                </p>
            )}
        </li>
    );
};

const Certificate = ({ img, title, issuer, date, credentialId, link }) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            viewport={{ once: true }}
            className="relative w-full p-4 py-6 my-4 rounded-xl flex sm:flex-col items-center justify-between
      bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4
      dark:bg-dark dark:border-light gap-4"
        >
            <Link
                href={link}
                target="_blank"
                className="inline-block rounded-lg overflow-hidden w-36 flex-shrink-0 sm:w-full"
                aria-label={title}
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    width={200}
                    height={130}
                />
            </Link>

            <div className="flex-1 px-4 sm:px-0">
                <Link href={link} target="_blank" className="inline-block" aria-label={title}>
                    <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light sm:text-base">
                        {title}
                    </h2>
                </Link>
                <p className="text-primary dark:text-primaryDark font-semibold text-sm mt-1">
                    🏢 {issuer}
                </p>
                {credentialId && (
                    <p className="text-xs text-dark/50 dark:text-light/40 mt-1 font-mono">
                        ID: {credentialId}
                    </p>
                )}
            </div>

            <span className="text-dark/60 dark:text-light/60 font-semibold text-sm flex-shrink-0 sm:self-start xs:text-xs whitespace-nowrap">
                📅 {date}
            </span>
        </motion.li>
    );
};

export default function Certificates() {
    return (
        <>
            <Head>
                <title>Sanjay Deshmukh | Certificates</title>
                <meta
                    name="description"
                    content="View Sanjay Deshmukh's professional certifications in Deep Learning, Azure AI, Docker, JPMorgan, and Deloitte simulations."
                />
            </Head>

            <TransitionEffect />

            <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
                <div className="pt-16 px-32 lg:px-16 md:px-12 sm:px-8 w-full">
                    <h1 className="font-bold text-8xl w-full text-center my-16 md:text-6xl xs:text-4xl">
                        Credentials & Certifications
                    </h1>

                    {/* Featured Certificates */}
                    <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16 mb-16">
                        <FeaturedCertificate
                            title="Fundamentals of Deep Learning"
                            issuer="NVIDIA"
                            date="Issued Jan 2025"
                            credentialId="1tO0Ys3ITkGJkXM3sgBKrQ"
                            link="https://www.nvidia.com/en-us/training/"
                            img="/images/articles/nvidia.png"
                        />
                        <FeaturedCertificate
                            title="Microsoft Azure AI Essentials Professional Certificate"
                            issuer="Microsoft & LinkedIn"
                            date="Issued Jun 2025"
                            credentialId="Microsoft x LinkedIn"
                            link="https://www.linkedin.com/learning/"
                            img="/images/articles/azure.png"
                        />
                    </ul>

                    {/* All Certificates */}
                    <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">All Certificates</h2>
                    <ul>
                        <Certificate
                            title="Docker"
                            issuer="LinkedIn Learning"
                            date="Jul 2025"
                            credentialId="4022f9255d3339fb1807579e6ffeec312e26135b401cb95bf9fd2591ec567598"
                            link="https://www.linkedin.com/learning/"
                            img="/images/articles/docker.png"
                        />
                        <Certificate
                            title="JPMorgan Chase & Co – Software Engineering Job Simulation"
                            issuer="JPMorgan Chase"
                            date="Jun 2025"
                            credentialId="wbXbcsqsAtyfs2Sba"
                            link="https://www.theforage.com/"
                            img="/images/articles/jpmorgan.png"
                        />
                        <Certificate
                            title="Deloitte Australia – Technology Job Simulation"
                            issuer="Deloitte"
                            date="Jun 2025"
                            credentialId="hxTkbqXs6uxpCkR7L"
                            link="https://www.theforage.com/"
                            img="/images/articles/deloitte_tech.png"
                        />
                        <Certificate
                            title="Deloitte Australia – Data Analytics Job Simulation"
                            issuer="Deloitte"
                            date="Jun 2025"
                            credentialId="ofN2SRSHsGjGp376x"
                            link="https://www.theforage.com/"
                            img="/images/articles/deloitte_data.png"
                        />
                    </ul>
                </div>
            </main>
        </>
    );
}
