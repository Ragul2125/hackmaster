import React from 'react'
import './Task.css'
import Image from'../assets/task.svg'
const Task = () => {
  return (
    <div className='task-pg'>
      <header>
        <h1>Task Management</h1>
      </header>
      <div className="task-container">
        <div className="task-cards">
            <div className="left">
            <div className="task-cards-header">
                <h2>Project Name</h2>

            </div>
            <div className="team">
                <h3>Team Name</h3>
            </div>
            <div className="dead-line">
                <p>12/01/2006</p>
            </div>
            </div>
            <div className="right">
                <img src={Image} alt="" />
            </div>
        </div>
        <div className="task-cards">
        <div className="left">
            <div className="task-cards-header">
                <h2>Project Name</h2>

            </div>
            <div className="team">
                <h3>Team Name</h3>
            </div>
            <div className="dead-line">
                <p>12/01/2006</p>
            </div>
            </div>
            <div className="right">
                <img src={Image} alt="" />
            </div>
        </div><div className="task-cards">
        <div className="left">
            <div className="task-cards-header">
                <h2>Project Name</h2>

            </div>
            <div className="team">
                <h3>Team Name</h3>
            </div>
            <div className="dead-line">
                <p>12/01/2006</p>
            </div>
            </div>
            <div className="right">
                <img src={Image} alt="" />
            </div>
        </div><div className="task-cards">
        <div className="left">
            <div className="task-cards-header">
                <h2>Project Name</h2>

            </div>
            <div className="team">
                <h3>Team Name</h3>
            </div>
            <div className="dead-line">
                <p>12/01/2006</p>
            </div>
            </div>
            <div className="right">
                <img src={Image} alt="" />
            </div>
        
      </div>
      </div>
</div>
  )
}

export default Task