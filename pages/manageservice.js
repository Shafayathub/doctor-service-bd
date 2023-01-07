import Link from 'next/link';
import React from 'react';
import AddDiagnostic from './AddDiagnostic';
import AddDoctor from './AddDoctor';

const manageservice = () => {
  return (
    <div className="h-screen">
      <h4 className="text-center m-10 text-2xl font-semibold">
        Manage Services
      </h4>
      <ul className="mt-20 flex flex-wrap gap-5 justify-center items-center space-x-5 text-orange-500">
        <li className="border border-orange-400 rounded-lg p-3 hover:text-white hover:bg-orange-500 font-semibold text-xl">
          <Link href={'/AddDoctor'}>Add Doctor</Link>
        </li>
        <li className="border border-orange-400 rounded-lg p-3 hover:text-white hover:bg-orange-500 font-semibold text-xl">
          <Link href={'/AddDiagnostic'}>add Diagnostic</Link>
        </li>
      </ul>
    </div>
  );
};

export default manageservice;
