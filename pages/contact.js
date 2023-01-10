import Head from 'next/head';
import React from 'react';
import Social from './Social';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Doctor Service BD</title>
        <meta name="description" content="Doctor Service BD" />
        <meta name="keyword" content="Doctor Service BD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen">
        <h4 className="text-center text-3xl text-green-500 font-semibold p-10">
          Address: Ashrafunnesha Plaza, Beside of ABC School <br /> Laxmipur,
          Rajshahi <br /> Rajshahi, Bangladesh
        </h4>
        <Social className="pb-10"></Social>
      </div>
    </>
  );
};

export default Contact;
