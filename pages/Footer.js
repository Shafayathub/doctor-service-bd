import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-orange-400">
      <Link
        className="mr-5"
        href={'https://www.facebook.com/doctorservicebd/'}
        target="_blank">
        Facebook Page
      </Link>
      <small>
        copyright &#169; Doctor Service BD {new Date().getFullYear()}{' '}
      </small>
    </footer>
  );
};

export default Footer;
