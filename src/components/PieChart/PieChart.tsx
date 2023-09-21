import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';


interface ChartData {
    name: string;
    value: number;
    className: string;
}

interface Props {
    chartData: ChartData[],
    paddingAngle?: number,
}

const PieChartComponent = ({chartData, ...props}: Props) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={200} height={200}>
                <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={45}
                    dataKey="value"
                    {...props}
                >
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill="currentColor" className={entry.className} style={{stroke: 'none'}} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}
export default PieChartComponent;
