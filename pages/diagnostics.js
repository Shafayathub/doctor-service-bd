import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Diagnostic from './Diagnostic';

const Diagnostics = () => {
  const [diagnostics, setDiagnostics] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/diagnostic')
      .then((res) => res.json())
      .then((data) => setDiagnostics(data));
  }, []);
  return (
    <>
      <Head>
        <title>Diagnostics | Doctor Service BD</title>
        <meta name="description" content="Doctor Service BD" />
        <meta name="keyword" content="Doctor Service BD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-slate-900 p-5">
        <h2 className="text-center text-3xl font-semibold">diagnostics Page</h2>
        <div className="p-3">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
            {diagnostics.map((diagnostic) => (
              <Diagnostic
                key={diagnostic._id}
                diagnostic={diagnostic}></Diagnostic>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Diagnostics;
