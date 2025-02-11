import React from 'react'
import profile from "../../assets/ProfileImg.svg"
import search from "../../assets/search.svg"
const Topnav = () => {
  return (
    <div className='top-nav'>
      <div className="search">
        <img src={search} alt="" />
        <div className="input">
            <input type="text" placeholder='Search..' />
        </div>
      </div>
      <div className="profile">
        <img src={profile} alt="" />
        <p>Joe</p>
      </div>
    </div>
  )
}

export default Topnav
