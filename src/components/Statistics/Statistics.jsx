import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

const Statistics = () => {
    // const [myWork, setWarks] = useState([]);

    // useEffect(() => {
    //     fetch('/public/assignmentMarks.json')
    //     .then(res => res.json())
    //     .then(data => setWarks(data))
    // }, []);

    // const {assignmentNo, marks} = myWork;

    const myWork = [
        {
            "assignmentNo" : "Assignment-1",
            "marks": 60
        },
        {
            "assignmentNo" : "Assignment-2",
            "marks": 59
        },
        {
            "assignmentNo" : "Assignment-3",
            "marks": 60
        },
        {
            "assignmentNo" : "Assignment-4",
            "marks": 45
        },
        {
            "assignmentNo" : "Assignment-5",
            "marks": 30
        },
        {
            "assignmentNo" : "Assignment-6",
            "marks": 32
        },
        {
            "assignmentNo" : "Assignment-7",
            "marks": 58
        },
        {
            "assignmentNo" : "Assignment-8",
            "marks": 58
        }
    ]

    return (
        <div>
            <PieChart width={1500} height={500}>
                <Pie data={myWork} dataKey="marks" nameKey="assignmentNo" cx="50%" cy="50%" outerRadius={200} fill="#8884d8" />
                <Tooltip></Tooltip>
            </PieChart>
            <h1 className='text-center font-bold text-3xl'>Average: <span className='text-purple-500'>50.25</span></h1>
            <h1 className='text-center font-bold text-3xl'><span className='text-purple-500'>Assignment</span> Marks</h1>
        </div>
    );
};

export default Statistics;