import React from 'react'
import "./NewProduct.css"
import { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase"
import { useDispatch } from "react-redux"
import { addProduct } from '../../redux/apiCalls';
const NewProduct = () => {

    const [inputs, setinputs] = useState({});
    const [file, setfile] = useState(null);
    const [categories, setcategories] = useState([])
    const dispatch = useDispatch();
    const handleChange = (e)=>{
         setinputs(prev => {
             return {...prev, [e.target.name]:e.target.value}
         })
    }
   const handleChangeCategories = (e)=>{
       setcategories(e.target.value.split(","))
   }

   const handleClick=(e)=>{
       e.preventDefault();
       const fileName= new Date().getTime()+file.name
       const storage = getStorage(app)
       const storageRef = ref(storage, fileName)
       const uploadTask = uploadBytesResumable(storageRef, file);

       uploadTask.on('state_changed', 
         (snapshot) => {
                 const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
           console.log('Upload is ' + progress + '% done');
           switch (snapshot.state) {
             case 'paused':
               console.log('Upload is paused');
               break;
             case 'running':
               console.log('Upload is running');
               break;
               default: 
           }
         }, 
         (error) => {
           // Handle unsuccessful uploads
         }, 
         () => {
           // Handle successful uploads on complete
           // For instance, get the download URL: https://firebasestorage.googleapis.com/...
           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            
             const product = {...inputs, img: downloadURL, categories: categories};
             addProduct(product, dispatch);
           });
         }
       );
       
       
   }

   console.log(file);
    return (
        <div className='newProduct'>
              <h1 className='newProductTitle'>New Product</h1>     
              <form className='newProductForm'>
                  <div className="newProductItem">
                      <label>Image</label>
                      <input style={{"marginLeft":"10px"}} type="file" id="file" onChange={e => setfile(e.target.files[0])}/>
                  </div>
                  <div className="newProductItem">
                      <label>Title</label>
                      <input name="title" type="text" placeholder='Apple Airpods' className='newProductInput' onChange={handleChange}/>
                  </div>
                  <div className="newProductItem">
                      <label>Description</label>
                      <input name='description' type="text" placeholder='Description..' className='newProductInput' onChange={handleChange}/>
                  </div>
                  <div className="newProductItem">
                      <label>Price</label>
                      <input name='price' type="number" placeholder='700' className='newProductInput' onChange={handleChange}/>
                  </div>
                  <div className="newProductItem">
                      <label>Categories</label>
                      <input name='categories'  type="text" placeholder='jeans,blue' className='newProductInput' onChange={handleChangeCategories}/>
                  </div>
                  <div className="newProductItem">
                      <label>Stock</label>
                     <select name='inStock' onChange={handleChange}>
                         <option value="true">Yes</option>
                         <option value="false">No</option>
                     </select>
                  </div>
                  </form>
                  <button onClick ={handleClick} className="newProductButton">Create</button>
        </div>

    )
}

export default NewProduct
