import Image from 'next/image';
import React from 'react';

const Doctor = ({ doctor }) => {
  const { id, name, img, description, price } = doctor;
  return (
    <div className="border border-orange-400 rounded-lg hover:drop-shadow-xl p-3">
      <Image
        className="w-full rounded-lg"
        width={1920}
        height={1080}
        src={img}
        alt="Doctor Service BD"
      />

      <h3 className="text-xl font-semibold">{name}</h3>
      <h3 className="text-lg font-semibold"> price:${price}</h3>
      <p className="my-2">{description}</p>
      <button className="p-2 bg-orange-500 rounded-md border-2 hover:bg-orange-400 text-white font-medium">
        Get Service
      </button>
    </div>
  );
};

export default Doctor;
