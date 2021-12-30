import React from 'react'
import './Chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart(props) {
  const{title, height, data, dataKey, grid} = props;
    return (
        <div className='chart'>
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="99%" height={height}>  
                <LineChart data={data}>
                <XAxis dataKey="name" stroke='#4d47b6'/>
                <Line type="monotone" dataKey={dataKey} stroke='#5550bd'/>
                <Tooltip/>
                {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>}
                </LineChart>
            </ResponsiveContainer> 
        </div>
    )
}


/* aspect={4 / 1} : This means that if the width is 4 units then the height will be 1 units. Ex: If the width is 400px then the height will be 100px */
/* <Line type="monotone" dataKey="ActiveUser"/>  */
/*In responsiveContainer give width in percentage and keep height fixed*/