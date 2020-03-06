import * as React from "react";
import { NextPage } from "next";
import { FiLink, FiGithub } from "react-icons/fi";

import workData from "../../utils/worksData";
import Layout from "../../components/layouts";
import CustomLink from "../../components/CustomLink";
//@ts-ignore

const AboutPage: NextPage = () => {
  return (
    <Layout title="Divine Hycenth | About Me">
      <h1 className="py-12 border-b font-bold text-2xl px-2 text-center">
        Recent Projects
      </h1>
      <div>
        {workData.map((data, i) => (
          <div
            key={i}
            className="mx-auto hover:shadow-lg px-4 w-full py-5 border-b"
          >
            <div className="container lg:w-4/12 md:w-5/12 mx-auto">
              <h1 className="text-sm md:text-lg font-sans font-semibold text-black">
                {data.title}
              </h1>
              <p className="text-sm">{data.summary}</p>

              <div className="flex gap justify-between">
                <div className="w-6/12">
                  <CustomLink href={`/works/[id]`} as={`/works/${data.path}`}>
                    <button className="text-xs font-sans text-link">
                      Read more →
                    </button>
                  </CustomLink>
                </div>
                <div className="w-4/12 flex justify-between">
                  <CustomLink href={data.url} target="_blank">
                    <div className="flex items-center">
                      <FiLink className="text-xs mx-1" />
                      <button className="text-xs font-sans text-link block">
                        Link
                      </button>
                    </div>
                  </CustomLink>
                  <CustomLink href={data.url} target="_blank">
                    <div className="flex items-center">
                      <FiGithub className="text-xs mx-1" />
                      <button className="text-xs font-sans text-link block">
                        Source
                      </button>
                    </div>
                  </CustomLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
export default AboutPage;
