import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './AddProjectInfoForm.css'
import Header from '../Header/Header'
import PageTitle from '../PageTitle/PageTitle'
import projectIcon from '../../assets/project.webp'

const AddProjectInfoForm = () => {
  let [projectInfo, setProjectInfo] = useState({
   generalInfo: {
    projectName: '',
    description: '',


   }
  })
  let [totalProjectImageCount, setTotalProjectImageCount] = useState(1)
  let [projectImages,setProjectImages] = useState([]);
  function addMoreImage(){
    setTotalProjectImageCount(totalProjectImageCount+1);
  }
  function addProjectInfo (e) {
    e.preventDefault()
    let projectData = new FormData(e.target)
    console.log(projectData.get('project-banner'))
  }

  function cancelImg(i){
    console.log(i);
  }

  return (
    <>
      <Header />
      <PageTitle
        pageTitle='<h2>Add Project Infos</h2><p>Keep everything in one place! Store crucial project details for seamless access.</p>'
        illustration={projectIcon}
      />
      <section className='form-wrapper'>
        <form
          id='add-project-info'
          onSubmit={e => {
            addProjectInfo(e)
          }}
        >
          <h2 className='text-center'>Add Your Project info</h2>
          <div className='hr-wrapper'>
            <hr />
          </div>

          <div className='subform'>
            <div className='subform-item'>
              <fieldset id='project-main-info'>
                <div className='form-Name'>
                  <label htmlFor='name'>Project Name</label>
                  <input
                    type='text'
                    placeholder='Enter your project name...'
                  />
                </div>

                <div className='form-description'>
                  <label htmlFor='description'>Description</label>
                  <textarea
                    rows={10}
                    cols={10}
                    placeholder='Add an optional project description...'
                    
                  />
                </div>

                <div className='form-project-banner'>
                  <label htmlFor='images'>Project Banner</label>
                  <input
                    type='file'
                    accept='image/*'
                    name='project-banner'
                  />
                  <p>Upload project banner</p>
                </div>
                <div className='form-project-image'>
                  <label htmlFor='images'>Project related other images</label>
                  {Array.from({ length: totalProjectImageCount }).map(
                    (_, i) => (
                      <div class='image-file-field-wrapper d-flex'>
                      <input
                        key={i}
                        type='file'
                        accept='image/*'
                        name={`project-img[${i}]`}
                        onChange={(e)=>{
                          setProjectImages([...projectImages, e.target.files[0]]);
                        }}
                      />
                     <button name={`cancel-img[${i}]`} onClick={(e,i)=>{cancelImg(i)}}>x</button>
                     </div>
                    )
                  )}

                  <p>Upload important images related to project</p>
                </div>
                <button onClick={addMoreImage}>+ Upload more images</button>
                <div className='form-cpanel'>
                  <label htmlFor='name'>C-panel url</label>
                  <input
                    type='text'
                    placeholder='Add c-panel url...'
                    onChange={e =>
                      setProjectInfo({
                        ...projectInfo,
                        cPanelUrl: e.target.value
                      })
                    }
                  />
                </div>
                <div className='form-other-info'>
                  <label htmlFor='name'>Other information</label>
                  <textarea
                    rows={5}
                    cols={5}
                    placeholder='Add any other important information about project...'
                    
                  />
                </div>
              </fieldset>
            </div>

            <div className='subform-item'>
              <fieldset id='project-live-site-info'>
                <legend>
                  <span>Live Site Information</span>
                </legend>
                <div className='form-live-link'>
                  <label htmlFor='url'>Url</label>
                  <input
                    type='text'
                    placeholder='Add live site url...'
                  />
                </div>
                <div className='form-live-username'>
                  <label htmlFor=''>Username</label>
                  <input
                    type='text'
                    placeholder='Add live site user...'
                   
                  />
                </div>
                <div className='form-live-link'>
                  <label htmlFor='name'>Password</label>
                  <input
                    type='text'
                    placeholder='Add live site password...'
                    
                  />
                </div>
                <fieldset id='live-site-ftp-info'>
                  <legend>
                    <span>FTP Information</span>
                  </legend>
                  <div className='form-live-sitehostname'>
                    <label htmlFor='url'>Hostname</label>
                    <input
                      type='text'
                      placeholder='Add live site url...'
                      
                    />
                  </div>
                  <div className='form-username'>
                    <label htmlFor='name'>Username</label>
                    <input
                      type='text'
                      placeholder='Add live site url...'
                    
                    />
                  </div>
                  <div className='form-password'>
                    <label htmlFor='name'>Password</label>
                    <input
                      type='text'
                      placeholder='Add live site url...'
                      
                    />
                  </div>
                  <div className='form-hostname'>
                    <label htmlFor='name'>Port number</label>
                    <input
                      type='number'
                      placeholder='Add port number...'
                      
                    />
                  </div>
                  <div className='form-live-site-other-info'>
                    <label htmlFor='name'>Other information</label>
                    <textarea
                      rows={5}
                      cols={5}
                      placeholder='Add any other important live site information...'
                      
                    />
                  </div>
                </fieldset>
              </fieldset>
            </div>

            <div className='subform-item'>
              <fieldset id='project-dev-site-info'>
                <legend>
                  <span>Dev Site Information</span>
                </legend>
                <div className='form-dev-link'>
                  <label htmlFor='url'>Url</label>
                  <input
                    type='text'
                    placeholder='Add dev site url...'
                  
                  />
                </div>
                <div className='form-dev-username'>
                  <label htmlFor=''>Username</label>
                  <input
                    type='text'
                    placeholder='Add dev site user...'
                    
                  />
                </div>
                <div className='form-dev-link'>
                  <label htmlFor='name'>Password</label>
                  <input
                    type='text'
                    placeholder='Add dev site password...'
                    
                  />
                </div>
                <fieldset id='dev-site-ftp-info'>
                  <legend>
                    <span>FTP Information</span>
                  </legend>
                  <div className='form-dev-sitehostname'>
                    <label htmlFor='url'>Hostname</label>
                    <input
                      type='text'
                      placeholder='Add dev site url...'
                    
                    />
                  </div>
                  <div className='form-username'>
                    <label htmlFor='name'>Username</label>
                    <input
                      type='text'
                      placeholder='Add dev site url...'
                      
                    />
                  </div>
                  <div className='form-password'>
                    <label htmlFor='name'>Password</label>
                    <input
                      type='text'
                      placeholder='Add dev site url...'
                      
                    />
                  </div>
                  <div className='form-hostname'>
                    <label htmlFor='name'>Port number</label>
                    <input
                      type='number'
                      placeholder='Add port number...'
             
                    />
                  </div>
                  <div className='form-dev-site-other-info'>
                    <label htmlFor='name'>Other information</label>
                    <textarea
                      rows={5}
                      cols={5}
                      placeholder='Add any other important dev site information...'
                     
                    />
                  </div>
                </fieldset>
              </fieldset>
            </div>

            <div className='subform-item'>
              <fieldset id='project-local-site-info'>
                <legend>
                  <span>Local Site Information</span>
                </legend>
                <div className='form-local-link'>
                  <label htmlFor='url'>Url</label>
                  <input
                    type='text'
                    placeholder='Add local site url...'
               
                  />
                </div>
                <div className='form-local-username'>
                  <label htmlFor=''>Username</label>
                  <input
                    type='text'
                    placeholder='Add local site user...'
                 
                  />
                </div>
                <div className='form-local-link'>
                  <label htmlFor='name'>Password</label>
                  <input
                    type='text'
                    placeholder='Add local site password...'
              
                  />
                </div>
                <div className='form-local-site-other-info'>
                  <label htmlFor='name'>Other information</label>
                  <textarea
                    rows={5}
                    cols={5}
                    placeholder='Add any other important local site information...'
                    
                  />
                </div>
              </fieldset>
            </div>
          </div>

          <div className='form-actions btn-hover'>
            <button type='submit' className='btn btn-primary text-right'>
              <span>Submit</span>
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default AddProjectInfoForm
