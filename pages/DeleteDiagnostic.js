import React, { useEffect, useState } from 'react';

const DeleteDiagnostic = () => {
  const [doctors, setdoctors] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/diagnostic')
      .then((res) => res.json())
      .then((data) => setdoctors(data));
  }, []);
  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      const url = `http://localhost:5000/diagnostic/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = doctors.filter((doctor) => doctor._id !== id);
          setdoctors(remaining);
        });
    }
  };
  return (
    <div className="mt-5 text-center">
      <h2>Manage doctor Dashboard</h2>
      {doctors.map((doctor) => (
        <div key={doctor._id}>
          <h3 className="m-3">
            {doctor.name}{' '}
            <button
              className="border p-1 text-red-600"
              onClick={() => handleDelete(doctor._id)}>
              X
            </button>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default DeleteDiagnostic;
