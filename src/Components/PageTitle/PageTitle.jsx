import React from 'react'
import './PageTitle.css'
const PageTitle = ({pageTitle, illustration}) => {
  return (
    <section className='page-title'>
    <div className='container'>
      <div dangerouslySetInnerHTML={{ __html: pageTitle }}></div>
      <img src={illustration} alt='page-illustration'/>
      </div>
    </section>
  )
}

export default PageTitle;
