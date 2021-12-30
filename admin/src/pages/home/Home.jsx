import React from 'react'
import Chart from '../../components/Chart/Chart'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import "./Home.css";
import {data} from "../../DummyData"   // It means come out from home folder , then come out from pages folder.
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';

const Home = () => {
    return (
        <div className='homeContainer'>
            <FeaturedInfo/>
            <Chart data={data} height={400} title="User Analytics" grid dataKey="Active User"/>
            <div className='homeWidgets'>
               <WidgetSm/>
               <WidgetLg/>                 
            </div>
        </div>
    )
}

export default Home
