import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import demopic from '../pages/images/demo-pic-1.jpg';

const Doctors = () => {
  return (
    <>
      <h2 className="text-center text-3xl font-semibold mt-10">Doctors Page</h2>
      <div className="mx-5 lg:mx-72">
        <div className="w-full">
          <Link href={'./'}>
            <div className="mt-5 border-2 rounded-xl p-5 grid grid-cols-2 gap-5">
              <div className="flex flex-wrap items-center space-x-2">
                <Image
                  src={demopic}
                  alt="physio"
                  width={48}
                  height={24}
                  className="rounded-full"></Image>
                <h3 className="text-lg font-medium">doctor</h3>
                <h4 className="text-xs">medicine</h4>
                <h4 className="text-xs">
                  M.B.B.S, BCS (health), FPS(1st part)
                </h4>
              </div>

              <div className="flex justify-end items-center">
                <button className="text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg">
                  Get Details
                </button>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full">
          <Link href={'./'}>
            <div className="mt-5 border-2 rounded-xl p-5 grid grid-cols-2 gap-5">
              <div className="flex flex-wrap items-center space-x-2">
                <Image
                  src={demopic}
                  alt="physio"
                  width={48}
                  height={24}
                  className="rounded-full"></Image>
                <h3 className="text-lg font-medium">doctor</h3>
                <h4 className="text-xs">medicine</h4>
                <h4 className="text-xs">
                  M.B.B.S, BCS (health), FPS(1st part)
                </h4>
              </div>

              <div className="flex justify-end items-center">
                <button className="text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg">
                  Get Details
                </button>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full">
          <Link href={'./'}>
            <div className="mt-5 border-2 rounded-xl p-5 grid grid-cols-2 gap-5">
              <div className="flex flex-wrap items-center space-x-2">
                <Image
                  src={demopic}
                  alt="physio"
                  width={48}
                  height={24}
                  className="rounded-full"></Image>
                <h3 className="text-lg font-medium">doctor</h3>
                <h4 className="text-xs">medicine</h4>
                <h4 className="text-xs">
                  M.B.B.S, BCS (health), FPS(1st part)
                </h4>
              </div>

              <div className="flex justify-end items-center">
                <button className="text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg">
                  Get Details
                </button>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full">
          <Link href={'./'}>
            <div className="mt-5 border-2 rounded-xl p-5 grid grid-cols-2 gap-5">
              <div className="flex flex-wrap items-center space-x-2">
                <Image
                  src={demopic}
                  alt="physio"
                  width={48}
                  height={24}
                  className="rounded-full"></Image>
                <h3 className="text-lg font-medium">doctor</h3>
                <h4 className="text-xs">medicine</h4>
                <h4 className="text-xs">
                  M.B.B.S, BCS (health), FPS(1st part)
                </h4>
              </div>

              <div className="flex justify-end items-center">
                <button className="text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg">
                  Get Details
                </button>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full">
          <Link href={'./'}>
            <div className="mt-5 border-2 rounded-xl p-5 grid grid-cols-2 gap-5">
              <div className="flex flex-wrap items-center space-x-2">
                <Image
                  src={demopic}
                  alt="physio"
                  width={48}
                  height={24}
                  className="rounded-full"></Image>
                <h3 className="text-lg font-medium">doctor</h3>
                <h4 className="text-xs">medicine</h4>
                <h4 className="text-xs">
                  M.B.B.S, BCS (health), FPS(1st part)
                </h4>
              </div>

              <div className="flex justify-end items-center">
                <button className="text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg">
                  Get Details
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Doctors;
