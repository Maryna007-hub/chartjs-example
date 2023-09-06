

import React from 'react';
import './App.css';
import {  PieChart, Pie, Tooltip } from "recharts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend
} from "recharts";

function App() {
  const data = [
    {name: "Mon", value: 30},
    {name: "Tue", value: 24},
    {name: "Wed", value: 29},
    {name: "Thu", value: 33},
    {name: "Fri", value: 27},
  ];
  return (
    <div style={{ textAlign: 'center'}}>
      <h1> Evolution of the temperature per day</h1>
      <div className="App">
  
  <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        cx={200}
        cy={200}
        outerRadius={60}
        fill="#8884d8"
      />
     <Tooltip/>
    </PieChart>
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
  
      <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
    </BarChart>
    </div>
    </div>
  );
}

export default App;

