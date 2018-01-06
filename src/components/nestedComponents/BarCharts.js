import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const BarCharts = (props) => {
    return (
        <BarChart width={400} height={300} data={props.tagMatches}
            margin={{top: 5, right: 5, left: 5, bottom: 5}}>
            <XAxis dataKey="category_name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="2 2"/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="water_consumption (litres)" fill="#65a7f3" />
        </BarChart>
    );
}

export default BarCharts;