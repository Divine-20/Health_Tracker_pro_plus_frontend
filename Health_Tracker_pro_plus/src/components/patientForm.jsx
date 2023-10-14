import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PatientForm() {
    
        const [formData, setFormData] = useState({
          patient_name: '',
          patient_NID: '',
          body_temperature: '',
          heart_rate: '',
          patient_frequent_sickness: '',
        });
      
        const { patient_name, patient_NID, body_temperature, heart_rate, patient_frequent_sickness } = formData;
        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.id]: e.target.value });
          };
          const handleSubmit = () => {
            axios
              .post('http://localhost:6500/api/patient', formData,
              {
                mode: 'no'
              })
              .then((response) => {
                if (response.status === 200) {
                  toast.success('Data recorded successfully');
                } else {
                  toast.error('Failed to record data');
                }
              })
              .catch((error) => {
                toast.error('Error recording data');
              });
          };
                
  return (
<div
  className="container max-w-md mx-auto xl:max-w-3xl h-full flex bg-white mt-24 rounded-lg shadow overflow-hidden"
>
  <div className="relative xl:block xl:w-1/2 lg:w-1/2 md:w-1/2 sm:hidden xs:hidden">
    <img
      className="h-full w-full object-cover"
      src="./heart.png"
      alt="my zomato"
    />
  </div>
  <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full p-8">
    <form method="post" className='w-full'>
      <h1 className=" text-2xl font-bold">Record Patient's data</h1>
 
      <div className="mb-4 mt-6">
        <label
          className="block text-gray-700 text-sm font-semibold mb-2"
          htmlFor="name"
        >
          Patient Name
        </label>
        <input
          className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
          id="patient_name"
          type="text"
          placeholder="John Doe"
          name='patient_name'
          onChange={handleChange}
        />
      </div>
      <div className="mb-6 mt-6">
        <label
          className="block text-gray-700 text-sm font-semibold mb-2"
          htmlFor="nid"
        >
          Patient NID
        </label>
        <input
          className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
          id="patient_NID"
          type="number"
          placeholder="12121121121212112"
          name='patient_NID'
          onChange={handleChange}
        />
       
      </div>
      <div className="mb-6 mt-6">
        <label
          className="block text-gray-700 text-sm font-semibold mb-2"
          htmlFor="nid"
        >
          Patient Body Temperature
        </label>
        <input
          className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
          id="body_temperature"
          type="number"
          placeholder="12"
          name='body_temperature'
          onChange={handleChange}
        />
       
      </div>
      <div className="mb-6 mt-6">
        <label
          className="block text-gray-700 text-sm font-semibold mb-2"
          htmlFor="nid"
        >
          Patient Heart Rate
        </label>
        <input
          className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
          id="heart_rate"
          type="number"
          placeholder="90"
          name='heart_rate'
          onChange={handleChange}
        />
       
      </div>
      <div className="mb-6 mt-6">
        <label
          className="block text-gray-700 text-sm font-semibold mb-2"
          htmlFor="nid"
        >
          Patient Frequent Sickness
        </label>
        <input
          className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
          id="patient_frequent_sickness"
          type="text"
          placeholder="Cough"
          name='patient_frequent_sickness'
          onChange={handleChange}
        />
       
      </div>
      <div className="flex w-full mt-8">
        <button
          className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
          type="button"
          onClick={handleSubmit}
        >
            Record data
        </button>
      </div>
    </form>
  </div>
</div>
  )
}

export default PatientForm