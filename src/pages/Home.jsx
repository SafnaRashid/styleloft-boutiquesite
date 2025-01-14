//rafce
import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import Category from '../components/Category'
import View from '../components/View'



const Home = () => {
  const [deleteResponseFromCategory,setDeleteResponseFromCategory]=useState("")
   const [addResponseFromHome,setAddResponseFromHome]=useState("")

  return (
    <div style={{padding:'100px'}}>
      <div className='d-flex justify-content-between container mb-5'>
      <Add setAddResponseFromHome={setAddResponseFromHome}/>
       
      </div>
     
     {/* All videos */}
      <div className='container-fluid my-5 row'>
       
        
        <div className='col-lg-6'>
          <h3>All Categories</h3>
          <View addResponseFromHome={addResponseFromHome}/>
        </div>
      
      {/* category */}
       <div className='col-lg-6'>
        <Category setDeleteResponseFromCategory={setDeleteResponseFromCategory}/>
       </div>
      </div>

    </div>
  )
}

export default Home