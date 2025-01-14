import React, { useEffect, useState } from 'react'
import {Col,Row} from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllImageAPI } from '../services/allAPI'


const View = ({addResponseFromHome}) => {
  const [deleteImageResponseFromVideoCard,setDeleteImageResponseFromVideoCard]=useState("")
  const [allImages,setAllImages]= useState([])
  
  useEffect(()=>{
    getAllImages()
  },[addResponseFromHome,deleteImageResponseFromVideoCard])
console.log(allImages);

  const getAllImages=async()=>{
 try {
  const result =await  getAllImageAPI()
  console.log(result);
  if(result.status >=200 && result.status<300)
  {
    setAllImages(result.data);
  
    
  }else{
    console.log("API call failed");
    
  }
  
  
} catch (err) {
  console.log(err);
  
  
}
  }
 return (
   <>
   <Row>
    {
     allImages?.length>0?
     allImages.map(image=>(
     <Col key={image?.id} className='mb-2' sm={12} mg={6} lg={4}>
      <VideoCard setDeleteImageResponseFromVideoCard={setDeleteImageResponseFromVideoCard} displayData={image}/>
  
      </Col>
))
      :
      <div className='fw-bolder text-danger fs-5'>No Images are uploaded!!!</div>
    }
    </Row>
   </>
  )
}

export default View