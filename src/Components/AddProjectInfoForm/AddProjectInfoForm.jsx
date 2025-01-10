import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import closeIcon from '../../assets/close-btn.png'
import './AddProjectInfoForm.css'

const AddProjectInfoForm = () => {
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
    checkReviewAdded(true);
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
    <form onSubmit={(e)=>{addTask(e)}} className='add-project-info-form'>
    <h2 className='text-center'>Add Your Project info</h2>
    <div className='hr-wrapper'>
    <hr/>
    </div>
    
    {/* <h3>Add Testimonial</h3> */}
    <button className='task-close-btn' ><img src={closeIcon} alt='close-icon'/></button>
    <div className='form-title'>
      <label htmlFor="name">Project Name</label>
      <input type="text" placeholder='Enter your project name...' onChange={(e)=>setTaskData({...taskData,taskTitle:e.target.value})}/>
      </div>
      <div className='form-description'>
      <label htmlFor="description">Description</label>
      <textarea rows={10} cols={10} placeholder='Add an optional project description...' onChange={(e)=>setTaskData({...taskData,taskDescription:e.target.value})}/>
      </div>
      <div className='form-dev-link'>
      <label htmlFor="name">Dev site url</label>
      <input type="text" placeholder='Add dev site url...' onChange={(e)=>setTaskData({...taskData,devSiteUrl:e.target.value})}/>
      </div>
      <div className='form-live-link'>
      <label htmlFor="name">Live site url</label>
      <input type="text" placeholder='Add live site url...' onChange={(e)=>setTaskData({...taskData,liveSiteUrl:e.target.value})}/>
      </div>
      <div className='form-local-link'>
      <label htmlFor="name">Local site url</label>
      <input type="text" placeholder='Add local site url...' onChange={(e)=>setTaskData({...taskData,localSiteUrl:e.target.value})}/>
      </div>
      <div className='form-local-link'>
      <label htmlFor="name">Local site url</label>
      <input type="text" placeholder='Add local site url...' onChange={(e)=>setTaskData({...taskData,localSiteUrl:e.target.value})}/>
      </div>
      <fieldset id='project-ftp-info'>
      <legend><span>FTP Information</span></legend>
      <div className='form-hostname'>
      <label htmlFor="name">Hostname</label>
      <input type="text" placeholder='Add local site url...' onChange={(e)=>setTaskData({...taskData,hostName:e.target.value})}/>
      </div>
      <div className='form-username'>
      <label htmlFor="name">Username</label>
      <input type="text" placeholder='Add local site url...' onChange={(e)=>setTaskData({...taskData,username:e.target.value})}/>
      </div>
      <div className='form-password'>
      <label htmlFor="name">Password</label>
      <input type="text" placeholder='Add local site url...' onChange={(e)=>setTaskData({...taskData,password:e.target.value})}/>
      </div>
      <div className='form-hostname'>
      <label htmlFor="name">Port number</label>
      <input type="text" placeholder='Add port number...' onChange={(e)=>setTaskData({...taskData,port:e.target.value})}/>
      </div>
      </fieldset>
      <div className='form-cpanel'>
      <label htmlFor="name">C-panel url</label>
      <input type="text" placeholder='Add c-panel url...' onChange={(e)=>setTaskData({...taskData,cPanelUrl:e.target.value})}/>
      </div>
      <div className='form-image'>
      <label htmlFor="images">Related images</label>
      <input
          type="file"
          accept="image/*"
        />
        <p>Upload important images related to project</p>
        <button>+ Add Other Links</button>
        </div>
   

      <div className='form-actions btn-hover'>
<button type="submit" disabled={(success) ? true : false}><span>{(loading)? 'Submitting...' : (success) ? 'Task submitted!' : 'Submit your project info'}</span></button>
      </div>
    </form>
  )
}

export default AddProjectInfoForm
