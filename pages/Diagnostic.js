import Image from 'next/image';
import React from 'react';

const Diagnostic = ({ diagnostic }) => {
  const { _id, name, phone, picture, address, about } = diagnostic;

  return (
    <div className="border border-orange-400 rounded-lg hover:text-white hover:bg-orange-500 p-3">
      <div className="">
        <Image
          className="w-full rounded-lg"
          width={1920}
          height={1080}
          src={picture}
          alt="Doctor Service BD"
        />

        <h3 className="text-xl font-semibold">Name: {name}</h3>
        <h3 className="text-xl font-semibold">Phone: {phone}</h3>
        <h3 className="text-xl font-semibold">Address: {address}</h3>
      </div>

      <p className="my-2">about:{about}</p>
    </div>
  );
};

export default Diagnostic;
