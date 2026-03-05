import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import AnimatedNumbers from "@/components/AnimatedNumbers";
import Skills from "@/components/Skills";
import LiIcon from "@/components/LiIcon";
import TransitionEffect from "@/components/TransitionEffect";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between
      md:w-[80%]"
        >
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                    {position}&nbsp;
                    <a
                        className="capitalize text-primary dark:text-primaryDark"
                        href={companyLink}
                        target="_blank"
                        rel="noreferrer"
                    >
                        @{company}
                    </a>
                </h3>
                <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
                    {time} | {address}
                </span>
                <p className="font-medium w-full md:text-sm">{work}</p>
            </motion.div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });

    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
                Experience
            </h2>

            <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
                <motion.div
                    className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
          origin-top  dark:bg-primaryDark dark:shadow-3xl"
                    style={{ scaleY: scrollYProgress }}
                />

                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details
                        position="Campus Connect Secretary"
                        company="ICON VIT Pune"
                        companyLink="https://www.linkedin.com/company/icon-vitpune"
                        time="Aug 2025 – Present"
                        address="Pune, India · On-site · Full-time"
                        work="Serving as Campus Connect Secretary at ICON VIT Pune, responsible for building and maintaining industry-academia connections. Coordinating campus events, managing outreach initiatives, and fostering collaboration between students and professional networks."
                    />
                    <Details
                        position="AI/ML Head"
                        company="ISA Pune Section – VIT Student Chapter"
                        companyLink="https://www.linkedin.com/company/isa-pune-section-vit-student-chapter"
                        time="Aug 2025 – Present"
                        address="Pune District, Maharashtra, India · On-site · Full-time"
                        work="Leading the AI/ML division of the ISA Pune Section VIT Student Chapter. Organizing technical workshops, hands-on sessions, and research discussions on Machine Learning, Deep Learning, and Computer Vision. Mentoring juniors and driving AI-focused initiatives across the chapter."
                    />
                    <Details
                        position="Research Analyst"
                        company="The Investment Forum, VIT Pune"
                        companyLink="https://www.linkedin.com/company/the-investment-forum-vit-pune"
                        time="Jun 2024 – Aug 2025 · 1 yr 3 mos"
                        address="Pune, India · On-site"
                        work="Conducted in-depth research and analysis on financial markets, investment trends, and economic indicators. Prepared detailed research reports and presented actionable investment insights. Applied data analytics and quantitative methods to support investment decision-making."
                    />
                </ul>
            </div>
        </div>
    );
};

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });

    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
                Education
            </h2>

            <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
                <motion.div
                    className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
          origin-top dark:bg-primaryDark dark:shadow-3xl"
                    style={{ scaleY: scrollYProgress }}
                />

                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details
                        position="Bachelor of Technology (B.Tech) – Computer Engineering"
                        company="Vishwakarma Institute of Technology, Pune"
                        companyLink="https://www.vit.edu"
                        time="2023 – 2027"
                        address="Pune, India"
                        work="Currently pursuing B.Tech in Computer Engineering with a CGPA of 8.9. Relevant courses include Data Structures and Algorithms, Machine Learning, Artificial Intelligence, Database Management Systems, and Computer Networks. Actively involved in AI/ML research and technical clubs."
                    />
                    <Details
                        position="Higher Secondary Certificate (HSC) – Science"
                        company="Shri Shivaji Junior College"
                        companyLink="https://www.google.com/search?q=Shri+Shivaji+Junior+College+Nanded"
                        time="2021 – 2023"
                        address="Nanded, India"
                        work="Completed HSC with 85% aggregate in the Science stream (Physics, Chemistry, Mathematics, Computer Science). Developed a strong foundation in mathematics and computer science fundamentals."
                    />
                    <Details
                        position="Secondary School Certificate (SSC)"
                        company="St. Augustine English School"
                        companyLink="https://www.google.com/search?q=St+Augustine+English+School+Parbhani"
                        time="Completed"
                        address="Parbhani, India"
                        work="Achieved an outstanding 96% in the SSC board examinations. Built a solid academic base with distinction across all subjects."
                    />
                </ul>
            </div>
        </div>
    );
};

export default function About() {
    return (
        <>
            <Head>
                <title>Sanjay Deshmukh | About</title>
                <meta
                    name="description"
                    content="Learn more about Sanjay Deshmukh, an AI/ML Engineer and Software Developer from Pune, India. Explore his experience, education, and skills."
                />
            </Head>

            <TransitionEffect />

            <main
                className="flex w-full flex-col items-center justify-center dark:text-light"
            >
                <div className="pt-16 px-32 lg:px-16 md:px-12 sm:px-8 w-full">
                    <h1 className="font-bold text-8xl mb-16 w-full text-center md:text-6xl xs:text-4xl">
                        Passion Fuels Purpose!
                    </h1>

                    <div className="grid w-full grid-cols-3 gap-16 sm:gap-8 md:grid-cols-1">
                        {/* Bio */}
                        <div className="col-span-2 flex flex-col items-start justify-start md:order-2">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                                Biography
                            </h2>
                            <p className="font-medium">
                                Hi, I&apos;m <strong>Sanjay Deshmukh</strong>, an AI/ML Engineer and Software Developer
                                based in Pune, India, with a passion for creating intelligent systems and elegant digital experiences.
                                With expertise spanning machine learning, deep learning, computer vision, and full-stack web development,
                                I love turning complex problems into innovative solutions.
                            </p>
                            <p className="my-4 font-medium">
                                I believe that the best technology is not just powerful — it&apos;s also intuitive and accessible.
                                Whether building a neural network for image classification or crafting a responsive web application,
                                I bring the same level of care, curiosity, and commitment to every project.
                            </p>
                            <p className="font-medium">
                                I&apos;m constantly exploring the latest advancements in AI/ML, NLP, and generative models.
                                I look forward to collaborating on exciting projects that push the boundaries of what&apos;s possible
                                with technology. Let&apos;s build something extraordinary together!
                            </p>
                        </div>

                        {/* Profile Image – col-span-1 = smaller */}
                        <div className="col-span-1 relative h-max md:order-1 flex items-start justify-center">
                            <Image
                                className="w-full h-auto rounded-2xl max-w-[280px]"
                                src={profilePic}
                                alt="Sanjay Deshmukh"
                                style={{ mixBlendMode: 'lighten' }}
                                priority
                                sizes="(max-width: 768px) 60vw, 20vw"
                            />
                        </div>
                    </div>

                    <Skills />
                    <Experience />
                    <Education />
                </div>
            </main>
        </>
    );
}
