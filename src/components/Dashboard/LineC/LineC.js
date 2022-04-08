import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const LineC = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 1000,
            "sell": 2410,
            "revenue": 1040
        },
        {
            "month": "Apr",
            "investment": 20000,
            "sell": 4230,
            "revenue": 2450
        },
        {
            "month": "May",
            "investment": 50000,
            "sell": 7260,
            "revenue": 6701
        },
        {
            "month": "Jun",
            "investment": 50000,
            "sell": 5290,
            "revenue": 4040
        },
        {
            "month": "Jul",
            "investment": 60000,
            "sell": 6010,
            "revenue": 5090
        },
        {
            "month": "Aug",
            "investment": 70000,
            "sell": 6700,
            "revenue": 6100
        }
    ]
    
    return ( 
    <LineChart width={500} height={300} data={data}>
    <Line dataKey={"investment"} stroke="#888"></Line>
    <Line dataKey={"sell"} stroke="#8884d8"></Line>
    <Line dataKey={"revenue"}></Line>
    <XAxis dataKey="month"></XAxis>
    <YAxis></YAxis>
    <CartesianGrid/>
    <Tooltip/>
    </LineChart>
    );
};
export default LineC;