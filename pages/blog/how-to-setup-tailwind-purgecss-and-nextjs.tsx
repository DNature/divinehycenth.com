import * as React from "react";
import { NextPage } from "next";

import BlogLayout from "../../components/layouts/blog";

// @ts-ignore
import MD from "../../posts/how-to-setup-tailwind-purgecss-and-nextjs/how-to-setup-tailwind-purgecss-and-nextjs.md";

const IndexPage: NextPage = () => {
  // window.scrollTo(0, 0);

    React.useEffect(() => {
      console.log('useEffect')
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
      <BlogLayout
        title="Divine | Setup Tailwind and Purgecss in Nextjs"
        description="How to setup your Nextjs project with tailwindcss, purgecss, autoprefixer and postcss"
        imageUrl="/images/blog/how-to-setup-tailwind-purgecss-and-nextjs/how-to-setup-tailwind-purgecss-and-nextjs.jpg"
      >
        <MD />
      </BlogLayout>
    </>
  );
};

export default IndexPage;
