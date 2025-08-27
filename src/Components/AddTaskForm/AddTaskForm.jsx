import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import closeIcon from '../../assets/close-btn.png'
import './AddTaskForm.css'
import Header from '../Header/Header';
import PageTitle from '../PageTitle/PageTitle';
import taskIcon from '../../assets/taskIcon.png'
const AddTaskForm = () => {
  let [taskData,setTaskData] = useState({
    taskTitle: '',
    taskDescription: '',
   taskImages: [],
  projectName: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  async function addTask(e){
    setLoading(true);
    e.preventDefault();
   
    if(taskData.taskTitle.length!=0 && taskData.taskDescription.length!=0 && taskData.projectName.length!=0){  
      try {
               let response = await axios.post('https://dev-yashdevportfolio.pantheonsite.io/node?_format=json', {
         type:[
          {
            target_id: 'tasks'
          }
         ],
         title: [
          {
            value: taskData.taskTitle
          }
         ],
         field_task_description:[
          {
            value: taskData.taskDescription
          }
         ],
         field_project_name:[
          {
            value: taskData.projectName
          }
         ],
       },
       {
         headers: {
           'Content-Type': 'application/json' 
         }
       });
       if(response!=null){
        setSuccess(true);
        setLoading(false);
         console.log(response.data);
  }
    else{
      setLoading(false);
      setSuccess(false);
    }
    
     }

      catch (error) {
        console.error("Error while adding task:", error);
      }
  
    }
  
  }
  return (
    <>
    <Header/>
    <PageTitle pageTitle="<h2>Add Your Task</h2><p>Stay on top of your work -- add tasks, track progress, and resolve issues seamlessly!</p>" illustration={taskIcon}/>
    <section className='form-wrapper'>
    <form onSubmit={(e)=>{addTask(e)}} className='add-task-form'>
    <h2 className='text-center'>Add Your Task</h2>
 
    
    {/* <h3>Add Testimonial</h3> */}
    <button className='task-close-btn' ><img src={closeIcon} alt='close-icon'/></button>
    <div className='form-title'>
      <label htmlFor="name">Title</label>
      <input type="text" placeholder='Enter your task title...' onChange={(e)=>setTaskData({...taskData,taskTitle:e.target.value})}/>
      </div>
      <div className='form-description'>
      <label htmlFor="description">Description</label>
      <textarea rows={10} cols={10} placeholder='write about you task in detail here...' onChange={(e)=>setTaskData({...taskData,taskDescription:e.target.value})}/>
      </div>
      <div className='form-image'>
      <label htmlFor="images">Upload your task related images</label>
      <input
          type="file"
          accept="image/*"
        />
        </div>
   

      <div className='form-actions btn-hover'>
<button type="submit" disabled={(success) ? true : false}><span>{(loading)? 'Submitting...' : (success) ? 'Task submitted!' : 'Submit your task'}</span></button>
      </div>
    </form>
    </section>
    </>
  )
}

export default AddTaskForm
