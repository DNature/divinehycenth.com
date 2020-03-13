import * as React from 'react'
import Layout from '../components/layouts'
import { NextPage } from 'next';
//@ts-ignore
import AboutMeMDX from '../posts/about-me.md';

const AboutPage: NextPage = () =>{
  
  return (
    <Layout title="Divine Hycenth | About Me" >
      <div className="lg:mx-10 md:mx-8">
        <AboutMeMDX />
      </div>
    </Layout>
  );}
export default AboutPage
