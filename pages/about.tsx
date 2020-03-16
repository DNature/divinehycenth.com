import * as React from "react";
import Layout from "../components/layouts";
import { NextPage } from "next";
//@ts-ignore
import SkillCard from "../components/skillCard";

const AboutPage: NextPage = () => {
  return (
    <Layout
      title="Divine Hycenth | About Me"
      imageUrl="/images/avatar-small.png"
      description="I'm a full stack software developer creating open source projects and writing about modern JavaScript, Typescript, Graphql, Python, Node.js, and development."
    >
      <article className="lg:mx-10 md:mx-8">
        <div className="relative">
          <img
            src="/images/avatar-small.png"
            alt="Divine Hycenth Portrait"
            className="absolute top-0 right-0 h-24 md:h-40 md:-mt-16 -mt-12 lg:h-48 lg:-mt-20 rounded-full p-2 border-2 border-blue-300"
          />
        </div>
        <br />
        <h1 className="text-2xl font-bold md:text-4xl mb-2">About Me</h1>
        <article>
          <p>
            I’m Divine Hycenth, a full stack software developer, technical
            writer, and UI/UX Designer. I currently spend most of my time
            programming in <b>_JavaScript/TypeScript_</b> for three (3) years
            and writing about it.
          </p>
          <p>
            I also do some <b>python, DevOps(Docker)</b> stuffs when the need
            arises.
          </p>

          <br />

          <p>
            I'm very passionate about software development and I would love to
            join you to grow and improve your beautiful ideas. I am open to
            roles like <b>full stack, back end or front end.</b>
          </p>
          <p>
            I'm <b>self motivated</b> which makes me competent and also a great fit for a
            <b> remote</b> job and i would love to relocate if i'm required to.
          </p>
          <p>
            I started this website as a place to document everything I learned
            while going through a career change.
          </p>
        </article>
        <br />
        <p className="text-center text-xl font-bold">Here are some technical skills I poses:</p>
        {/* Test */}
        <div className="xl:px-64 px-0">
          <SkillCard />
        </div>
      </article>
    </Layout>
  );
};
export default AboutPage;
