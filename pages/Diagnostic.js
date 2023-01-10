import Image from 'next/image';
import React from 'react';

const Diagnostic = ({ diagnostic }) => {
  return (
    <div className="border border-orange-400 rounded-lg text-green-400 hover:text-white hover:bg-orange-500 p-3">
      <div className="">
        <Image
          className="w-full rounded-lg"
          width={1920}
          height={1080}
          src={diagnostic?.picture}
          alt="Doctor Service BD"
        />

        <h3 className="text-xl font-semibold">
          <span className="text-sm">Name:</span> {diagnostic?.name}
        </h3>
        <h3 className="text-xl font-semibold">
          <span className="text-sm">Phone:</span> {diagnostic?.phone}
        </h3>
        <h3 className="text-xl font-semibold">
          <span className="text-sm">Address:</span> {diagnostic?.address}
        </h3>
      </div>

      <p className="my-2 text-xl font-semibold">
        <span className="text-sm">about:</span> {diagnostic?.about}
      </p>
    </div>
  );
};

export default Diagnostic;
