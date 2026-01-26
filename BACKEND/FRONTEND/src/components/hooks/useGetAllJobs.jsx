import axios from 'axios'
import React, { useEffect } from 'react'
import { JOB_API_ENDPOINT } from '../../utils/data'
import { useDispatch, useSelector } from 'react-redux'
import { setAllJobs } from '../../redux/jobSlice'

const useGetAllJobs = () => {
    const dispatch = useDispatch()
    const {searchQuery} = useSelector((store)=> store.job)
    
  useEffect(()=>{
    // fetch all the jobs from the api
    const fetchAllJobs = async () => {
        try {
            const res = await axios.get(`${JOB_API_ENDPOINT}/get?keyword=${searchQuery}`, {withCredentials: true})
            console.log("res: ", res.data.jobs)
            if (res.data.success){
                dispatch(setAllJobs(res.data.jobs))
            }
        } catch (error) {
            console.error(error)
        }
    };
    fetchAllJobs();
  },[])
}

export default useGetAllJobs