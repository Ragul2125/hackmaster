import React, { useState } from 'react'
import './Candidate.css'
import Existing from './CandidateComp/Existing'
import Requested from './CandidateComp/Requested'
const Candidate = () => {
  const [activeTab,setActiveTab]=useState("existing")
  const [searchQuery,setSearchQuery]=useState("")
  return (
    <>
        <div className='candidate-pg'>
            <div className='candidate-type'>
                <h2 className={activeTab==="existing"?"active":" "} onClick={()=>setActiveTab("existing")}>Existing</h2>
                <h2>|</h2>
                <h2
                  className={activeTab === "requested" ? "active" : ""} 
                  onClick={() => setActiveTab("requested")}>Requested
                </h2>
            </div>
            <div className='search-box'>
                <input type='text' placeholder='Search' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
            </div>
            {/* <Existing/>
            <Requested/> */}
            {activeTab === "existing" ? <Existing searchQuery={searchQuery} /> : <Requested />}
              {/* <Requested/> */}
            
        </div>
    </>
  )
}

export default Candidate