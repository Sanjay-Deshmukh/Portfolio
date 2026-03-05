import Link from "next/link";
import { GithubIcon, LinkedInIcon } from "./Icons";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer
            className="w-full border-t-2 border-solid border-dark font-medium text-lg 
      dark:text-light dark:border-light sm:text-base"
        >
            <div className="py-8 flex items-center justify-between px-32 lg:flex-col lg:py-6 md:px-12 sm:px-8">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

                <div className="flex items-center lg:py-2">
                    Built with{" "}
                    <span className="text-primary dark:text-primaryDark text-2xl px-1">
                        &#9825;
                    </span>{" "}
                    by&nbsp;
                    <Link
                        href="/"
                        className="underline underline-offset-2"
                        id="footer-name"
                    >
                        Sanjay Deshmukh
                    </Link>
                </div>

                <nav className="flex items-center gap-4">
                    <motion.a
                        href="https://github.com/Sanjay-Deshmukh"
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6"
                        id="footer-github"
                        aria-label="GitHub"
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/sanjay-deshmukh10"
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6"
                        id="footer-linkedin"
                        aria-label="LinkedIn"
                    >
                        <LinkedInIcon />
                    </motion.a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
