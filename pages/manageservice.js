import Link from 'next/link';
import React from 'react';
import AddDiagnostic from './AddDiagnostic';
import AddDoctor from './AddDoctor';

const manageservice = () => {
  return (
    <div className="h-screen">
      <h4 className="text-center m-5">MANAGE service</h4>
      <ul className="flex justify-center items-center space-x-5">
        <li>
          <Link href={'/AddDoctor'}>
            <AddDoctor></AddDoctor>
          </Link>
        </li>
        <li>
          <Link href={'/AddDiagnostic'}>
            <AddDiagnostic></AddDiagnostic>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default manageservice;
