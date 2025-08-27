import React from 'react'
import Header from '../Header/Header'
import PageTitle from '../PageTitle/PageTitle'
import question from '../../assets/question.png'

const AddIssues = () => {
  return (
    <>
    <Header/>
    <PageTitle pageTitle='<h2>Add Your Issue/Question</h2><p>Facing a challenge? Post your issues and questions to find solutions and help others!</p>' illustration={question}/>
    <section className='add-issues'>
      



    </section>
    </>
  )
}

export default AddIssues
