import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import fbIcon from './images/fb_icon.png';
import whatsapp from './images/whatsapp-icon.jpg';

const Social = () => {
  return (
    <div className="pb-10 grid md:grid-cols-2 gap-10">
      <Link
        className="flex justify-center items-center"
        href={'https://www.facebook.com/doctorservicebd'}
        target="_blank">
        <Image
          className="w-36 rounded-full"
          src={fbIcon}
          width={1920}
          height={1080}
          alt="fbIcon"></Image>
      </Link>
      <div className="flex justify-center items-center">
        <Image
          className="w-12 md:w-36 rounded-full"
          src={whatsapp}
          width={1920}
          height={1080}
          alt="whatsappIcon"></Image>
        <h5 className="text-green-400">+880 1723-025514</h5>
      </div>
    </div>
  );
};

export default Social;
