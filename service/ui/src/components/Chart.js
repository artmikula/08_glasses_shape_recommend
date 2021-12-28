import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const data2 = [
  { name: "Page A", uv: 6345, pv: 543, amt: 8543 },
  { name: "Page B", uv: 5400, pv: 8867, amt: 8765 },
  { name: "Page C", uv: 8876, pv: 8600, amt: 8756 },
  { name: "Page D", uv: 7654, pv: 2314, amt: 4231 },
  { name: "Page E", uv: 8432, pv: 8542, amt: 2300 },
  { name: "Page F", uv: 4321, pv: 8431, amt: 4300 },
  { name: "Page G", uv: 4321, pv: 6453, amt: 8765 },
];

function Chart() {
  return (
    <div className="charts">
      <AreaChart
        width={330}
        height={250}
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#000" fill="#d3d3d3" />
      </AreaChart>
    </div>
  );
}

export default Chart;
