import commonAPI from "./commonAPI"
import SERVERURL from "./serverUrl"


//saveImageAPI - post http request,add component
export const saveImageAPI=async(imageDetails)=>{
    return await commonAPI(`POST`,`${SERVERURL}/uploadImages`,imageDetails)
}
//getAllImageAPI-get method,called view component,when component displays in browser inside its useeffect hook
export const getAllImageAPI=async()=>{
    return await commonAPI(`GET`,`${SERVERURL}/uploadImages`,"")
}
//saveHistoryAPI-post http method to history url called by videocard when we click on image
export const saveHistoryAPI=async(historyDetails)=>{
    return await commonAPI(`POST`,`${SERVERURL}/history`,historyDetails)
}
//getAllHistoryAPI -get http request to history url called by history component when it open in browser
export const getAllHistoryAPI=async()=>{
    return await commonAPI(`GET`,`${SERVERURL}/history`,"")
}
//deleteHistoryAPI-delete method to  history called by history when clicked on delete button 
export const deleteHistoryAPI=async(id)=>{
    return await commonAPI(`DELETE`,`${SERVERURL}/history/${id}`,{})
}
//removeVideoAPI-delete method to history  url called by videoCard component when clicked on delete button 
export const removeVideoAPI =async(id)=>{
    return await commonAPI(`DELETE`,`${SERVERURL}/uploadImages/${id}`,{})
}
//saveCategoryAPI-post request to category url called by category component when user click on add button
//categoryDetails={categoryName,allVideos}
export const saveCategoryAPI=async(categoryDetails)=>{
    return await commonAPI(`POST`,`${SERVERURL}/categories`,categoryDetails)
}
//getAllCategoryAPI -get http request to category url called by category component when component loaded in browser
export const getAllCategoryAPI=async()=>{
    return await commonAPI(`GET`,`${SERVERURL}/categories`,{})
}
//deleteCategoryAPI-delete method to category url called by category component when clicked on delete button 
export const deleteCategoryAPI=async(id)=>{
    return await commonAPI(`DELETE`,`${SERVERURL}/categories/${id}`,{})
}
//updateCategoryAPI-put method to category url called by category component when image drop over the category
export const updateCategoryAPI=async(categoryDetails)=>{
    return await commonAPI(`PUT`,`${SERVERURL}/categories/${categoryDetails.id}`,categoryDetails)
}