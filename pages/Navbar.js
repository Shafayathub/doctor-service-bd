import React, { useState } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../firebase.init';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);
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
          <li className="hover:text-white hover:bg-orange-500 hover:rounded-lg hover:p-1 ml-5">
            <Link href={'/'}>Home</Link>
          </li>
          <li className="hover:text-white  hover:bg-orange-500 hover:rounded-lg hover:p-1">
            <Link href={'/doctors'}>Doctors</Link>
          </li>
          <li className="hover:text-white hover:bg-orange-500 hover:rounded-lg hover:p-1">
            <Link href={'./diagnostics'}>Diagnostics</Link>
          </li>
          <li className="hover:text-white hover:bg-orange-500 hover:rounded-lg hover:p-1">
            <Link href={'./about'}>About</Link>
          </li>
          <li className="hover:text-white hover:bg-orange-500 hover:rounded-lg hover:p-1">
            <Link href={'./contact'}>Contact</Link>
          </li>
          {user && (
            <Link
              className="mr-5 hover:text-white hover:bg-orange-500 hover:rounded-lg hover:p-1"
              href={'/manageservice'}>
              Manage
            </Link>
          )}

          {user?.uid && (
            <li>
              <Link
                className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-orange-500"
                onClick={() => signOut(auth)}
                href={'/'}>
                Sign Out
              </Link>
            </li>
          )}
        </ul>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
