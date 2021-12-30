import React from 'react'
import "./NewProduct.css"
const NewProduct = () => {
    return (
        <div className='newProduct'>
              <h1 className='newProductTitle'>New Product</h1>     
              <form className='newProductForm'>
                  <div className="newProductItem">
                      <label>Image</label>
                      <input style={{"marginLeft":"10px"}} type="file" id="file" />
                  </div>
                  <div className="newProductItem">
                      <label>Product Name</label>
                      <input  type="text" placeholder='Apple Airpods' className='newProductInput'/>
                  </div>
                  <div className="newProductItem">
                      <label>Stock</label>
                      <input type="text" placeholder='200' className='newProductInput'/>
                  </div>
                  <div className="newProductItem">
                      <label>Active</label>
                      <select className='newProductSelect' name="active" id="active">
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                      </select>
                  </div>
                  </form>
                  <button className="newProductButton">Create</button>
        </div>

    )
}

export default NewProduct
