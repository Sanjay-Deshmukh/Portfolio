import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github, tags }) => {
    return (
        <article
            className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl
      border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
      lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
        >
            <div
                className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
        rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
            />

            <Link
                href={link}
                target="_blank"
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
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

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
                    {type}
                </span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2" aria-label={title}>
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
                        {title}
                    </h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>

                {/* Tags */}
                {tags && (
                    <div className="flex flex-wrap gap-2 my-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary dark:bg-primaryDark/10 dark:text-primaryDark border border-primary/30 dark:border-primaryDark/30"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10" aria-label={`${title} GitHub`}>
                        <GithubIcon />
                    </Link>
                    <Link
                        href={link}
                        target="_blank"
                        className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark sm:px-4 sm:text-base"
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    );
};

const Project = ({ title, type, img, link, github, bullets }) => {
    return (
        <article
            className="w-full flex flex-col items-center justify-center rounded-2xl
      border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4"
        >
            <div
                className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
        rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
            />

            <Link
                href={link}
                target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg"
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
                />
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
                    {type}
                </span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2" aria-label={title}>
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
                </Link>

                {bullets && (
                    <ul className="text-sm font-medium text-dark/80 dark:text-light/80 space-y-1 mb-3 list-none">
                        {bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-1">
                                <span className="text-primary dark:text-primaryDark mt-0.5">•</span>
                                <span>{b}</span>
                            </li>
                        ))}
                    </ul>
                )}

                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} target="_blank" className="text-lg font-semibold underline md:text-base">
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className="w-8 md:w-6" aria-label={`${title} GitHub`}>
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default function Projects() {
    return (
        <>
            <Head>
                <title>Sanjay Deshmukh | Projects</title>
                <meta
                    name="description"
                    content="Explore Sanjay Deshmukh's AI/ML and software development projects including AirCursor, Wheat Grain Classification, Candlelytics, and more."
                />
            </Head>

            <TransitionEffect />

            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <div className="pt-16 px-32 lg:px-16 md:px-12 sm:px-8 w-full">
                    <h1 className="font-bold text-8xl w-full text-center my-16 md:text-6xl xs:text-4xl">
                        Imagination Trumps Knowledge!
                    </h1>

                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">

                        {/* Featured Project 1 – AirCursor */}
                        <div className="col-span-12">
                            <FeaturedProject
                                type="Featured Project"
                                title="AirCursor – Gesture-Controlled Mouse"
                                summary="A real-time gesture-based mouse control system using Python, OpenCV, and MediaPipe. Control your computer cursor using just your hand gestures — no physical mouse required. Features click detection, scroll, and drag using finger tracking."
                                img="/images/projects/aircursor.png"
                                link="https://github.com/Sanjay-Deshmukh/AirCursor"
                                github="https://github.com/Sanjay-Deshmukh/AirCursor"
                                tags={["Python", "OpenCV", "MediaPipe", "Computer Vision"]}
                            />
                        </div>

                        {/* Featured Project 2 – Wheat Grain */}
                        <div className="col-span-12">
                            <FeaturedProject
                                type="Featured Project · AI/ML + Flask"
                                title="Wheat Grain Quality Classification System"
                                summary="Built an AI-powered web application using Flask + ResNet50 for automated wheat grain quality grading. Extracted 2048-D deep features and classified grains into A–F quality grades using ML models. Developed automated PDF reporting with grade distribution, image analysis, and performance statistics. Published a custom wheat dataset on Kaggle and Hugging Face for agricultural AI research."
                                img="/images/projects/wheat.png"
                                link="https://github.com/Sanjay-Deshmukh"
                                github="https://github.com/Sanjay-Deshmukh"
                                tags={["Flask", "ResNet50", "TensorFlow", "Kaggle Dataset", "PDF Reporting"]}
                            />
                        </div>

                        {/* Regular Projects Row */}
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="AI Forecasting · Full Stack"
                                title="Candlelytics – Demand Forecasting Dashboard"
                                img="/images/projects/candlelytics.png"
                                link="https://github.com/Sanjay-Deshmukh"
                                github="https://github.com/Sanjay-Deshmukh"
                                bullets={[
                                    "Built an ensemble time-series model (Prophet + LSTM + XGBoost) to improve forecast accuracy.",
                                    "Created an interactive Flask dashboard with KPIs, sales heatmaps, and production recommendations.",
                                    "Enabled next-month and long-term production planning with downloadable forecast reports.",
                                ]}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Deep Learning · Computer Vision"
                                title="Concrete Crack Detection & Segmentation"
                                img="/images/projects/crack.png"
                                link="https://github.com/Sanjay-Deshmukh"
                                github="https://github.com/Sanjay-Deshmukh"
                                bullets={[
                                    "Built a deep learning–based crack detection system using U-Net architecture.",
                                    "Performed image segmentation to highlight damaged concrete regions precisely.",
                                    "Applied the model for structural inspection and infrastructure health monitoring.",
                                ]}
                            />
                        </div>

                        {/* VoteGuard – Featured layout same as AirCursor */}
                        <div className="col-span-12">
                            <FeaturedProject
                                type="Featured Project · Full Stack"
                                title="VoteGuard – Secure Voting System"
                                summary="A secure, tamper-proof digital voting platform with user authentication and real-time vote tallying. Features a live results dashboard, blockchain-inspired integrity checking mechanisms, and an intuitive UI for managing elections end-to-end."
                                img="/images/projects/voteguard.png"
                                link="https://github.com/Sanjay-Deshmukh"
                                github="https://github.com/Sanjay-Deshmukh"
                                tags={["Flask", "Python", "Blockchain", "Authentication", "Dashboard"]}
                            />
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}
