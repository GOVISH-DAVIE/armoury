import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface TrendsData {
  date: string;
  fmc: number;
  pmc: number;
  nmc: number;
}

interface TrendsChartProps {
  data: TrendsData[];
}

const TrendsChart: React.FC<TrendsChartProps> = ({ data }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Readiness Trends (Last 7 Days)</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
            <XAxis 
              dataKey="date" 
              stroke="#94a3b8"
              fontSize={12}
            />
            <YAxis 
              stroke="#94a3b8"
              fontSize={12}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1e293b',
                border: '1px solid #475569',
                borderRadius: '6px',
                color: '#fff'
              }}
            />
            <Legend 
              wrapperStyle={{ color: '#fff' }}
            />
            <Line 
              type="monotone" 
              dataKey="fmc" 
              stroke="#10B981" 
              strokeWidth={2}
              name="FMC (%)"
              dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="pmc" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="PMC (%)"
              dot={{ fill: '#F59E0B', strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="nmc" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="NMC (%)"
              dot={{ fill: '#EF4444', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrendsChart;