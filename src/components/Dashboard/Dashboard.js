import React from 'react';
import BarC from './BarC/BarC';
import LineC from './LineC/LineC';

const Dashboard = () => {
    return (
        <div className='mt-10 flex space-x-14'>
            <LineC></LineC>
            <BarC></BarC>
        </div>
    );
};

export default Dashboard;