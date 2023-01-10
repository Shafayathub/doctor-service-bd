import Image from 'next/image';
import React from 'react';

const Doctor = ({ doctor }) => {
  return (
    <div className="border border-orange-400 rounded-lg text-green-400 hover:text-white hover:bg-orange-500 p-3">
      <div>
        <Image
          className="w-1/4 rounded-2xl"
          width={1920}
          height={1080}
          src={doctor?.img}
          alt="Doctor Service BD"
        />

        <h3 className="text-xl font-semibold">
          <span className="text-sm">Name:</span> {doctor?.name}
        </h3>
        <h3 className="text-xl font-semibold">
          <span className="text-sm">Catagory:</span> {doctor?.catagory}
        </h3>
      </div>
      <p className="my-2">{doctor?.about}</p>
      <iframe
        className="mt-5 mx-auto w-72 rounded-lg"
        src={doctor?.video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
  );
};

export default Doctor;
