import React, { useState } from 'react'
import codeSnippetsIcon from '../../assets/code-snippets.png'
import './AddCodeSnippets.css'
import Header from '../Header/Header'
import PageTitle from '../PageTitle/PageTitle'

const AddCodeSnippets = () => {
  let [codeSnippetData, setCodeSnippetData] = useState({
    title: '',
    code: '',
    description: '',
    techName: '',
    images: []
  });
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    // const [success, setSuccess] = useState(false);
  const addCodeSnippet = (e) =>{
    
  }
  return (
    <>
      <Header/>
      <PageTitle pageTitle="<h2>Add Useful Code Snippets/Web Component Codes</h2><p>Share your creativity! Upload and showcase innovative code snippets and web components for everyone to access and use in their projects.</p>" illustration={codeSnippetsIcon} />
      <section className='add-code-snippets'>
           <form onSubmit={(e)=>{addCodeSnippet(e)}} className='add-code-snippet-form'>
              <h2 className='text-center'>Add Code Snippets</h2>
              <div className='form-title'>
              <label htmlFor="title">Functionality or component name</label>
              <input type="text" name='title' onChange={(e)=>setCodeSnippetData({...codeSnippetData,title:e.target.value})}/>
              </div>
              <div className='form-description'>
              <label htmlFor="description">Description</label>
              <input type="text" name='description' onChange={(e)=>setCodeSnippetData({...codeSnippetData,description:e.target.value})}/>
              </div>
              <div className='form-tech'>
              <label htmlFor="tech">Technology/Programming-Language</label>
              <input type="text" name='tech' onChange={(e)=>setCodeSnippetData({...codeSnippetData,techName:e.target.value})}/>
              </div>
                <div className='form-code'>
                <label htmlFor="code">Code</label>
                <textarea rows={10} cols={10} placeholder='Add code-snippet here..' onChange={(e)=>setCodeSnippetData({...codeSnippetData,code:e.target.value})}/>
                </div>
                <div className='form-image'>
                <label htmlFor="code-image">Output Image</label>
                <input
                    type="file"
                    accept="image/*"
                  />
                  </div>
          
                <div className='form-actions btn-hover'>
          <button type="submit"><span>Submit</span></button>
                </div>
              </form>
      </section>
    </>
  )
}

export default AddCodeSnippets
