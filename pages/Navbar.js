import React, { useState } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="text-xl text-center p-1 bg-slate-800 text-orange-400 relative">
        <div
          onClick={() => setOpen(!open)}
          className="w-12 h-12 absolute right-0 md:hidden">
          {open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
        </div>
        <ul
          className={`md:flex items-center justify-center space-x-5 mt-5 ${
            open ? 'block' : 'hidden'
          }`}>
          <li className="hover:text-white ml-5">
            <Link href={'/'}>Home</Link>
          </li>
          <li className="hover:text-white">
            <Link href={'/doctors'}>Doctors</Link>
          </li>
          <li className="hover:text-white">
            <Link href={'./hospitals'}>Diagnostics</Link>
          </li>
          <li className="hover:text-white">
            <Link href={'./about'}>About</Link>
          </li>
          <li className="hover:text-white">
            <Link href={'./contact'}>Contact</Link>
          </li>
        </ul>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
