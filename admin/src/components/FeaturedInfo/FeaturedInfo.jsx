import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'
import './FeaturedInfo.css'
import { userRequest } from '../../requestMethods';
import { useState, useEffect } from 'react';

const FeaturedInfo = () => {
    
    const [income, setincome] = useState([])
    const [percentage, setpercentage] = useState();
    
    useEffect(() => {
        const getIncome = async()=>{
            try{
               const res = await userRequest.get("orders/orderStats");
               setincome(res.data);
               const b = res.data[1].total;
               const a = res.data[0].total;
               setpercentage(((b-a) / a) * 100)
            }catch(err){
                console.log(err);
            }
        }
        getIncome();
    }, )

    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                  {income[1] &&  <span className="featuredMoney">Rs {income[1].total}</span>}
                    {
                    percentage && <span className="featuredMoneyRate">
                        %{Math.floor(percentage)}
                        {percentage<0 ? <ArrowDownward className='featuredIcon negative'/> : <ArrowUpward className='featuredIcon'/>}
                    </span>
                    }
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2415</span>
                    <span className="featuredMoneyRate">
                        -11.4<ArrowDownward className='featuredIcon negative'/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2225</span>
                    <span className="featuredMoneyRate">
                        +11.4<ArrowUpward className='featuredIcon'/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            </div>

        
    )
}

export default FeaturedInfo
