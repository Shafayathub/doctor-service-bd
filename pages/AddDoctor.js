import React from 'react';
import { useForm } from 'react-hook-form';
import DeleteDoctor from './DeleteDoctor';

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = 'http://localhost:5000/doctor';
    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div className="m-5 p-5">
      <h2 className="my-5 font-semibold text-2xl text-center">
        You can add a service from here
      </h2>
      <form
        className="flex flex-col items-center gap-3"
        onSubmit={handleSubmit(onSubmit)}>
        {/* React Hook Form */}
        <input
          className="bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Doctor's name"
          {...register('name', { required: true, maxLength: 20 })}
        />
        <input
          className="bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Catagory/Field of Practice"
          {...register('catagory', { required: true, maxLength: 20 })}
        />
        <input
          className="bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Gender:Male/Female"
          {...register('gender', { required: true, maxLength: 20 })}
        />
        <input
          className="bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Photo URL"
          {...register('img', { required: true })}
        />
        <input
          className="bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Video URL"
          {...register('video', { required: true })}
        />

        <textarea
          className=" bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Description"
          {...register('about', { required: true, maxLength: 250 })}
        />

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input
          className="p-2 bg-orange-500 rounded-md border-2 hover:bg-orange-600 text-white font-medium"
          type="submit"
          value="Add Doctor"
        />
      </form>
      <DeleteDoctor></DeleteDoctor>
    </div>
  );
};

export default AddDoctor;
