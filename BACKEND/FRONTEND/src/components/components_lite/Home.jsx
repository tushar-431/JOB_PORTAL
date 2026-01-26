import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Categories from './Categories'
import LatestJobs from './LatestJobs'
import Footer from './Footer'
import useGetAllJobs from '../hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Home = () => {
  const {user} = useSelector((store)=>store.auth)
  const {allJobs} = useSelector((store)=>store.job)

  const navigate = useNavigate()
  useEffect(()=>{
    if(user?.role === "Recruiter"){
      navigate("/admin/companies")
    }
  },[])


  useGetAllJobs()
  return (
    <div>
        <Navbar />
        <Header />
        <Categories />
        <LatestJobs />
        <Footer />
    </div>
  )
}

export default Home