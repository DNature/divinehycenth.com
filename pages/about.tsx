import * as React from 'react'
import Layout from '../components/layouts'
import { NextPage } from 'next';
//@ts-ignore
import AboutMeMDX from '../posts/about-me.md';

const AboutPage: NextPage = () =>{
  
  return (
    <Layout
      title="Divine Hycenth | About Me"
      imageUrl="/images/avatar.png"
      description="I'm a full stack software developer creating open source projects and writing about modern JavaScript, Typescript, Graphql, Python, Node.js, and development."
    >
      <div className="lg:mx-10 md:mx-8">
        <AboutMeMDX />
      </div>
    </Layout>
  );}
export default AboutPage
