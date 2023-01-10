import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch('https://doctor-service-bd-server-production.up.railway.app/doctor')
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <>
      <Head>
        <title>Doctors | Doctor Service BD</title>
        <meta name="description" content="Doctor Service BD" />
        <meta name="keyword" content="Doctor Service BD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-slate-900 p-5">
        <h2 className="text-center text-3xl font-semibold text-green-400">
          Doctors Page
        </h2>
        <div className="p-3">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
            {doctors.map((doctor) => (
              <Doctor key={doctor._id} doctor={doctor}></Doctor>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Doctors;
