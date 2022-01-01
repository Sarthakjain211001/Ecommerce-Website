import React from 'react'
import Chart from '../../components/Chart/Chart'
import "./Product.css"
import { productData } from '../../DummyData'
import { Publish } from '@material-ui/icons'
import{useLocation } from "react-router-dom";
import {useSelector} from "react-redux";
import { useState, useMemo, useEffect } from 'react'
import {userRequest} from "../../requestMethods"

const Product = () => {

    const location = useLocation();
    const productId = location.pathname.split('/')[2]

    const product = useSelector(state => state.product.products.find((product)=> product._id === productId))  //We are fetching thr product with the productId from our products array which is a redux state.
    
    const [PStats, setPStats] = useState([])

    const MONTHS = useMemo(
        ()=> [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        []
    )

    useEffect(() => {
        const getStats = async ()=>{
            try{
                const res = await userRequest.get("/orders/orderStats?pid=" + productId);
                res.data.sort(function(a,b){return a._id - b._id})
                res.data.map((item)=> 
                setPStats((prev) =>[    //prev holds the previous value of the state .
                    ...prev,     //spread the prev data and add new data(below line) to it
                    {name: MONTHS[item._id - 1], Sales: item.total},
                ])
                );
            }catch(err){
                console.log(err);
            }
        }
        getStats();
    }, [MONTHS]);
    

    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className='productTitle'>Product</h1>
            </div>
            <div className='productTop'>
                <div className="productTopLeft">
                    <Chart height={100} data={PStats} title="Sales Performance" dataKey="Sales"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={product.img} alt="" className='productInfoImg'/>
                        <span className='productName'>{product.title}</span>
                    </div>
                    
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{product._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">3000</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">{product.inStock? "yes" : "no"}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder={product.title}/>
                        <label>Product Description</label>
                        <input type="text" placeholder={product.description}/>
                        <label>Product price</label>
                        <input type="text" placeholder={product.price}/>
                        <label>In Stock</label>
                        <select name='inStock' id="inStock">
                            <option value="true">Yes</option>
                            <option value="flase">No</option>
                        </select>

                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={product.img} alt="" className='productUploadImage'/>
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
