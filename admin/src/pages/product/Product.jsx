import React from 'react'
import Chart from '../../components/Chart/Chart'
import "./Product.css"
import { productData } from '../../DummyData'
import { Publish } from '@material-ui/icons'

const Product = () => {
    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className='productTitle'>Product</h1>
            </div>
            <div className='productTop'>
                <div className="productTopLeft">
                    <Chart height={100} data={productData} title="Sales Performance" dataKey="Sales"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://cdn.shopify.com/s/files/1/1684/4603/products/AppleAirpodsGen1.png?v=1629888570" alt="" className='productInfoImg'/>
                        <span className='productName'>Apple Airpods</span>
                    </div>
                    
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">3000</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple Airpods"/>
                        <label>In Stock</label>
                        <select name='inStock' id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://cdn.shopify.com/s/files/1/1684/4603/products/AppleAirpodsGen1.png?v=1629888570" alt="" className='productUploadImage'/>
                            <label for="file">
                                <Publish style={{"cursor":"pointer"}}/>
                            </label>
                            <input type="file" name="file" id="file" style={{"display":"none"}}/>
                        </div>
                        <button className='productButton'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product
