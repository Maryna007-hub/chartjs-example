
import "./styles.css";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    name: "Sun",
    temp: 30,
    min: 20,
    amt: 20
  },
  {
    name: "Mon",
    temp: 33,
    min: 17,
    amt: 20
  },
  {
    name: "Tue",
    temp: 20,
    min: 16,
    amt: 20
  },
  {
    name: "Wed",
    temp: 27,
    min: 16,
    amt: 20
  },
  {
    name: "Fri",
    temp: 31,
    min: 19,
    amt: 20
  }
];

export default function App() {
  return (
    <div className="container">
      
  <div className="App">
  <div className="test" >
      <h1> Chart</h1>
    <AreaChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colormin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="temp"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
      <Area
        type="monotone"
        dataKey="min"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colormin)"
      />
    </AreaChart>
    </div>
    </div>
    </div>);

}
