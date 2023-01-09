import Image from 'next/image';
import React from 'react';

const Doctor = ({ doctor }) => {
  return (
    <div className="border border-orange-400 rounded-lg hover:text-white hover:bg-orange-500 p-3">
      <div>
        <Image
          className="w-1/5 rounded-full"
          width={1920}
          height={1080}
          src={doctor?.img}
          alt="Doctor Service BD"
        />

        <h3 className="text-xl font-semibold">Name: {doctor?.name}</h3>
        <h3 className="text-xl font-semibold">Catagory: {doctor?.catagory}</h3>
      </div>

      <iframe
        className="mt-5 mx-auto w-72 rounded-lg"
        src={doctor?.video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>

      <p className="my-2">{doctor?.about}</p>
    </div>
  );
};

export default Doctor;
