import Head from 'next/head';
import React from 'react';
import Social from './Social';

const About = () => {
  return (
    <>
      <Head>
        <title>About | Doctor Service BD</title>
        <meta name="description" content="Doctor Service BD" />
        <meta name="keyword" content="Doctor Service BD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen text-green-400">
        <h2 className="text-center text-3xl font-semibold m-10">
          DOCTOR SERVICE BD
        </h2>
        <p className="text-center text-xl m-5">
          We are committed to serve you with better Health Care. <br /> Welcome
          to you our Doctor Service BD website to take the services and serial
          of all expert and experienced doctors in Rajshahi.
        </p>
        <Social></Social>
      </div>
    </>
  );
};

export default About;
