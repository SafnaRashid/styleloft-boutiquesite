import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

import { Button } from 'react-bootstrap'
import { deleteHistoryAPI, getAllHistoryAPI } from '../services/allAPI'

const History = () => {
const [allImageHistory,setallImageHistory]=useState([])

useEffect(()=>{
  getAllHistory()
},[])
const getAllHistory=async()=>{
  try {
    const result=await getAllHistoryAPI()
    if(result.status>=200 && result.status<300){
      setallImageHistory (result.data)
    }else{
      console.log(result);
      
    }
  } catch (err) {
    console.log(err);
    
  }

}

const removeHistory=async(id)=>{
  try {
    await deleteHistoryAPI(id)
    getAllHistory()
    
  } catch (err) {
    console.log(err);
    
    
  }
}
  return (
    <div style={{paddingTop:'100px'}}>
    <div className='d-flex justify-content-between container'>
      <h3>Watch History</h3>
      
    </div>
    <table className='container'>
        <thead>
          <tr>
            <th>#</th>
            <th>Dress Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {
            allImageHistory?.length>0?
            allImageHistory?.map((imageDetails,index)=>(
            <tr key={imageDetails?.id}>
            <td>{index+1}</td>
            <td>{imageDetails?.productName}</td>
            <td><img style={{width:'50px'}} src={imageDetails?.imgUrl} alt="" /></td>
            <td>{imageDetails?.productPrice}</td>
            <td><button onClick={()=>removeHistory(imageDetails?.id)} className='btn'><i class="fa-solid fa-trash text-danger " ></i></button></td>
         </tr>
            )):
          
         <div className='fw-bolder text-danger'>You didn't watch any dress yet!!</div> 
        }
        </tbody>
        </table>
    </div>
  )
}

export default History