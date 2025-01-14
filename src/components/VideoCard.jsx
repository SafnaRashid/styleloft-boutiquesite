import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { removeVideoAPI, saveHistoryAPI } from '../services/allAPI';

const VideoCard = ({insideCategory,displayData,setDeleteImageResponseFromVideoCard}) => {
  

  
  const handleShow =async() =>{
   //display modal
  
    //show history in json
    const{productName,imgUrl,productPrice}=displayData
    const historyDetails={productName,imgUrl,productPrice}
    try {
      await saveHistoryAPI(historyDetails)
    } catch (err) {
      console.log(err);
      
    }
  }
  const deleteImage=async(id)=>{
   try {
    const result=await removeVideoAPI(id)
    setDeleteImageResponseFromVideoCard(result)
   } catch (err) {
    console.log(err);
    
   }


  }
const imageCardDragStarted=(e,dragImageDetails)=>{
  console.log("Inside imageCardDragStarted with imageId:"+dragImageDetails?.id);
  //share data using event drag start
  e.dataTransfer.setData("imageDetails",JSON.stringify(dragImageDetails))
}

  return (
   <>
   <Card draggable={true} onDragStart={e=>imageCardDragStarted(e,displayData)}
   style={{ width: '13rem' }} className='my-3'>
      <Card.Img  onClick={handleShow}  height={'150px'} variant="top" src={displayData?.imgUrl}/>
      <Card.Body>
        
        <Card.Text  >
          <div className='d-flex justify-content-between'>
          <p className='text-align-between d-flex' style={{color:'black'}}>{displayData?.productName}</p>
          <p className='text-align-between d-flex' style={{color:'black'}}>₹{displayData?.productPrice}</p>
       
          </div>
        
        <div className='d-flex justify-content-between'>
         { !insideCategory &&
         <button onClick={()=>deleteImage(displayData?.id)} className='btn d-flex'><i class="fa-solid fa-trash text-danger"></i></button>
        }
            <button onClick={handleShow} className='btn text-success d-flex'><i class="fa-solid fa-cart-shopping"></i></button>
            
         
    </div> 
    </Card.Text>
         

      </Card.Body>
    </Card>



   
   </>
  )
}

export default VideoCard