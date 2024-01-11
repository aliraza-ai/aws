import React from 'react';
import PageChild from './PageChild';
import Scripts from '@/components/Scripts';
const Home = () => {
  return (
    <>
      <head>
        <title>Intelliwriter.io: Best AI Image Generator & Free AI Writing</title>
        <meta name="description" content="Boost creativity with the best AI image generator & free AI writing tools. Explore 70+ innovative features!" />
        <meta name="google-site-verification" content="jOLdFKT4EB_AxoR8fQqHLckgsvnJ_Ta4WPY40UNfjwo" />
        <link rel="canonical" href="https://intelliwriter.io/" />
      </head>

      <body className="relative">
        <PageChild />
        <Scripts />
      </body>
    </>
  )
}

export default Home