import React from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const BarC = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 10000,
            "sell": 2910,
            "revenue": 1040
        },
        {
            "month": "Apr",
            "investment": 20000,
            "sell": 18230,
            "revenue": 8450
        },
        {
            "month": "May",
            "investment": 50000,
            "sell": 43260,
            "revenue": 8701
        },
        {
            "month": "Jun",
            "investment": 50000,
            "sell": 34290,
            "revenue": 20040
        },
        {
            "month": "Jul",
            "investment": 60000,
            "sell": 45010,
            "revenue": 10090
        },
        {
            "month": "Aug",
            "investment": 70000,
            "sell": 43000,
            "revenue": 9100
        }
    ]
    return ( 
        <BarChart width={600} height={300} data={data}>
            <XAxis dataKey="month" />
            <YAxis></YAxis>
            <Bar dataKey={"investment"} barSize={30} fill="#888"></Bar>
            <Bar dataKey={"sell"} barSize={30} fill="#888"></Bar>
            <Bar dataKey={"revenue"} barSize={30} fill="#888"></Bar>
            
        </BarChart>

        );
    };
export default BarC;