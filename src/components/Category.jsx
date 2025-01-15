import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'

import VideoCard from './VideoCard'
import { deleteCategoryAPI, getAllCategoryAPI, removeVideoAPI, saveCategoryAPI, updateCategoryAPI } from '../services/allAPI'
useEffect
const Category = ({setDeleteResponseFromCategory}) => {
  const [allCategories,setAllCategories]=useState([])
  const [categoryName,setcategoryName]=useState("")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
      getAllCategories()
    },[])

    const handleSaveCategory=async()=>{
      if(categoryName){
        const categoryDetails={categoryName,allImages:[]}
        try {
          const result=await saveCategoryAPI(categoryDetails)
          alert("Category Created")
          getAllCategories()
          handleClose()
        } catch (err) {
          console.log(err);
          
        }
      }else{
        alert("Please Provide Category Name")
      }
    }

    const getAllCategories=async()=>{
      try {
        const result=await getAllCategoryAPI()
        if(result.status>=200 && result.status<300){
          setAllCategories(result.data)
        
          
        }
        
      } catch (err) {
        console.log(err);
        
      }
    }
    console.log(allCategories);

    const removeCategory = async(id)=>{
      try {
       await deleteCategoryAPI(id)
       getAllCategories()
      } catch (err) {
        console.log(err);
        
        
      }
    }
    const dragOverCategory=(e)=>{
      e.preventDefault()
    }
    
    const imageCardDropOverCategory = async(e,categoryDetails)=>{
      console.log("Inside imageCardDropOverCategory");
      console.log(categoryDetails);
      const imageDetails=JSON.parse(e.dataTransfer.getData("imageDetails"))
      console.log(imageDetails);

    //update category by add image to its allImages
    categoryDetails.allImages.push(imageDetails)
    console.log(categoryDetails);

    //API call to update the categoty
    await updateCategoryAPI(categoryDetails)
    getAllCategories()
    //  const result=await removeVideoAPI(imageDetails?.id)
    //  setDeleteResponseFromCategory(result)
      }
    
  return (
    <>
   <div className='d-flex justify-content-between align-items-center' >  
    <h3>Wishlist  <i style={{ color: 'red' }} class="fa-regular fa-heart"></i> </h3>
    <button onClick={handleShow } className='btn btn-info ms-3 rounded-circle fw-bolder fs-5 mb-3'>+</button>
    </div>
    {/* Displaying all Categories */}
    <div className='container-fluid mb-3'>
        {/* single category view */}
        {
          allCategories?.length>0 ?
            allCategories?.map(categoryDetails=>(
              <div droppable="true" onDragOver={dragOverCategory} onDrop={e=>imageCardDropOverCategory(e,categoryDetails)} key={categoryDetails?.id} className='border rounded p-3 mb-3 '>
               <div className='d-flex justify-content-between'>
               <h5>{categoryDetails?.categoryName}</h5>
               <button onClick={()=>removeCategory(categoryDetails?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
          </div>
          {/* display category videos */}
          <div className='row mt-2'> 
            {
              categoryDetails?.allImages?.length>0 && 
                 categoryDetails?.allImages?.map(image=>(
                  <div key={image?.id} className='col-lg-4 me-5'>
                    {/* video cards */}
                    <VideoCard insideCategory={true} displayData={image}/>
                   </div>
                 ))
            }
          
          
          
          
          </div>
        </div>
          ))
          :
          <div className='fw-bolder text-danger '>No Wishlist are added yet!!!</div>
        }
        
          
          {/* <VideoCard/> */}
            
          {/* <div className='fw-bolder text-danger fs-5'>No categories are added yet</div> */}
          </div>
        
       

 
    
    {/*modal for all category +button*/}
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingCategoryName" label="Category Name">
        <Form.Control onChange={e=>setcategoryName(e.target.value)} type="text" placeholder="Category Name" />
        </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSaveCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
   
      </>
  )
}

export default Category