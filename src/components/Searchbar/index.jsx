import React from 'react'
import { useState, useEffect } from "react"

function Searchbar({ fetchJobsCustom }) {
  const [jobCriteria, setJobCriteria] = useState({
    title: "",
    location: "",
    experience: ""
  })

  const handleChange = (e) => {
    setJobCriteria((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  console.log(jobCriteria)

  const search = async () => {
    await fetchJobsCustom(jobCriteria);
  }
  return (
    <div className='flex gap-5 items-center justify-center my-10 flex-wrap'>
      <select onChange={handleChange} name="title" value={jobCriteria.title} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
        <option value="" selected hidden disabled>Role</option>
        <option value="Front-end Developer">Front-end Developer</option>
        <option value="Back-end Developer">Back-end Developer</option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Data Analyst">Data Analyst</option>
      </select>

      <select onChange={handleChange} name="location" value={jobCriteria.location} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
        <option value="" selected hidden disabled>Location</option>
        <option value="On-Site">On-Site</option>
        <option value="Remote">Remote</option>
        <option value="Hybrid">Hybrid</option>
      </select>

      <select onChange={handleChange} name="experience" value={jobCriteria.experience} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
        <option value="" selected hidden disabled>Experience</option>
        <option value="Fresher">Fresher</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Senior Level">Senior Level</option>
      </select>
      <button onClick={search} className='w-64 py-3 pl-4 bg-blue-700 text-white font-bold rounded-md'>Search</button>

    </div>
  )
}

export default Searchbar
