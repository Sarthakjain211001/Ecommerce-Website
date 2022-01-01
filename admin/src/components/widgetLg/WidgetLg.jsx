import React from 'react'
import "./WidgetLg.css"
import { useState, useEffect } from 'react'
import {userRequest} from "../../requestMethods"

const WidgetLg = () => {

    const Button = (props)=>{
        const {type} = props;
        return <button className={'widgetLgButton ' + type}> {type} </button>
    }

    const [orders, setorders] = useState([])

    useEffect(() => {
       const getOrders = async()=>{
        try{   
        const res= await userRequest.get("orders/fetchAllOrders")
           setorders(res.data);
           
        }catch(err){
            console.log(err);
        }
       }
       getOrders();
    }, []);
    
    
    return (
        <div className='WidgetLg'>
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className='widgetLgTable'>
             <tr className="widgetLgTr">
                 <th className="widgetLgTh">Customer_Id</th>
                 <th className="widgetLgTh">Date</th>
                 <th className="widgetLgTh">Amount</th>
                 <th className="widgetLgTh">Status</th>
             </tr>
             { orders.map((order)=>(<tr className="widgetLgTr" key={order._id}>
                 <td className="widgetLgUser">
                     <span className="widgetLgName">{order.userId}</span>
                   </td>
                     <td className="widgetLgDate">{order.createdAt.slice(0,10)}</td>
                     <td className="widgetLgAmount">{order.amount}</td>
                     <td><Button type={order.status}/>  </td> {/*Passing props in the Button*/}    
             </tr>)
             )
             
            }
             </table>
        </div>
    )
}
 
export default WidgetLg
