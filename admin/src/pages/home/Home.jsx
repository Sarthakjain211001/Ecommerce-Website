import React from 'react'
import Chart from '../../components/Chart/Chart'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import "./Home.css";
import {data} from "../../DummyData"   // It means come out from home folder , then come out from pages folder.
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import { useState } from 'react';
import { userRequest } from '../../requestMethods';
import { useEffect } from 'react';
import { useMemo } from 'react';

const Home = () => {

    const [userStats, setuserStats] = useState([])

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
                const res = await userRequest.get("/users/userStats");
                const list = res.data.sort((a,b)=>{
                    return a._id - b._id
                })
                list.map((item)=> 
                setuserStats((prev) =>[    //prev holds the previous value of the state .
                    ...prev,     //spread the prev data and add new data(below line) to it
                    {name: MONTHS[item._id - 1], "Active User": item.total},
                ])
                );
            }catch(err){
                console.log(err);
            }
        }
        getStats();
    }, [MONTHS]);
    
    return (
        <div className='homeContainer'>
            <FeaturedInfo/>
            <Chart data={userStats} height={400} title="User Analytics" grid dataKey="Active User"/>
            <div className='homeWidgets'>
               <WidgetSm/>
               <WidgetLg/>                 
            </div>
        </div>
    )
}

export default Home
