import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import project2 from "../../public/images/projects/devdreaming.jpg";
import project3 from "../../public/images/projects/fashion-studio-website.jpg";
import project4 from "../../public/images/projects/agency-website-cover-image.jpg";
import project5 from "../../public/images/projects/nft-collection-website-cover-image.jpg";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeatureProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-center rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Yovie Aditya | Project Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-14">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeatureProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
            local currency."
                type="Featured Project"
                link="/"
                img={project1}
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="All Man of Action Are Dreamers"
                type="Featured Project"
                link="/"
                img={project2}
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Fashion Studio Website"
                type="Featured Project"
                link="/"
                img={project3}
                github="/"
              />
            </div>
            <div className="col-span-12">
              <FeatureProject
                title="React Portfolio Website"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
page transitions, cool background effects, unique design and it is mobile responsive."
                type="Featured Project"
                link="/"
                img={project4}
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="NFT Collection Website in React JS"
                link="/"
                img={project5}
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="React Portfolio Website"
                link="/"
                img={project4}
                github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
