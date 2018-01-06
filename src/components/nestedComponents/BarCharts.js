import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const BarCharts = (props) => {
    console.log(props);
  return (
    <BarChart width={400} height={300} data={props.tagMatches}
          margin={{top: 5, right: 5, left: 5, bottom: 5}}>
     <XAxis dataKey="category_name"/>
     <YAxis/>
     <CartesianGrid strokeDasharray="3 3"/>
     <Tooltip/>
     <Legend />
     <Bar dataKey="water_consumption" fill="#116830" />
    </BarChart>
  );
}

export default BarCharts;