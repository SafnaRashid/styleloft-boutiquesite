import React, { useState } from 'react'
import { Button,Modal ,FloatingLabel,Form,ModalBody,ModalFooter,ModalHeader,ModalTitle} from 'react-bootstrap';
import { saveImageAPI } from '../services/allAPI';
const Add = ({setAddResponseFromHome}) => {

 const [imageDetails,setImageDetails]=useState({
  productName:"",imgUrl:"",productPrice:""
  })
  console.log(imageDetails);
  
  
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const handleUploadImage=async()=>{
  //object destructuring
  const{productName,imgUrl,productPrice}=imageDetails
  if(productName && imgUrl &&productPrice){
   //alert("proceed store data")
   try {
    const result=await saveImageAPI(imageDetails)
    console.log(result);
    if(result.status>=200 && result.status<300){
      alert("Image Upload Successfully!!!")
      handleClose()
      //Pass the result to view component
      setAddResponseFromHome(result)
  }else{
    console.log(result);
    
  }
    
   } catch (err) {
    console.log(err);
    }
      
  }else{
    alert("Please Fill the Form !!!")
  }
}
  
  return (
    <>
    <div className='d-flex align-items-center '>
        <h5>Upload New Dress</h5>
        <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
    </div>
    {/*Modal*/}
  <Modal
  show={show}
  onHide={handleClose}
  backdrop="static"
  keyboard={false}
>
  <Modal.Header closeButton>
    <Modal.Title>Upload Dress Details!!!</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {/* floating label */}
    <div className='border rounded p-3'>
    <FloatingLabel controlId="floatingCaption" label="product Name">
        <Form.Control onChange={e=>setImageDetails({...imageDetails,productName:e.target.value})} type="text" placeholder="product Name" />
      </FloatingLabel>

      <FloatingLabel  className='mt-2'controlId="floatingUrl" label="Image Url">
        <Form.Control  onChange={e=>setImageDetails({...imageDetails,imgUrl:e.target.value})} type="text" placeholder=" Image Url" />
      </FloatingLabel>

      <FloatingLabel onChange={e=>setImageDetails({...imageDetails,productPrice:e.target.value})}  className='mt-2' controlId="floatingCaption" label="Product Price">
        <Form.Control  type="text" placeholder=" Product Price" />
      </FloatingLabel>

      
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button onClick={handleUploadImage} variant="primary">Add</Button>
  </Modal.Footer>
</Modal>

    </>
  )
}

export default Add