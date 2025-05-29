import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import JobCard from "./components/JobCard";
import data from "./data"
import {useState, useEffect} from "react"
import { collection, query, orderBy,where, getDocs } from "firebase/firestore";
import {db} from "./firebase.config"

function App() {
  const [jobs,setJobs]=useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async () => {
    setCustomSearch(false);
    const tempJobs=[]
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn","desc"));
    const req = await getDocs(q);
    req.forEach((job) => {
      // console.log(doc.id, " => ", doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  }

  const fetchJobsCustom = async (jobCriteria) => {
    setCustomSearch(true);
    const tempJobs=[]
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, where("title", "==", jobCriteria.title),where("location", "==", jobCriteria.location),where("experience", "==", jobCriteria.experience) ,orderBy("postedOn","desc"));
    const req = await getDocs(q);
    req.forEach((job) => {
      // console.log(doc.id, " => ", doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  }

  useEffect(()=>{
    fetchJobs()
  },[])

  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Searchbar fetchJobsCustom={fetchJobsCustom} />
        {customSearch && 
          <button onClick={fetchJobs} className="flex pl-[1250px] mb-2">
            <p className="bg-blue-500 text-white px-4 py-2 rounded-md">Clear Filter</p>
          </button>}

        {jobs.map((jobData)=>(
          <JobCard key ={jobData.id} {...jobData}/>
        ))}

      </div>
    </>
  )
}

export default App
