import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface InventoryData {
  type: string;
  count: number;
  ready: number;
}

interface InventoryChartProps {
  data: InventoryData[];
}

const InventoryChart: React.FC<InventoryChartProps> = ({ data }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Inventory by Weapon Type</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
            <XAxis 
              dataKey="type" 
              stroke="#94a3b8"
              fontSize={11}
              angle={-45}
              textAnchor="end"
              height={100}
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
            <Bar dataKey="count" fill="#3B82F6" name="Total Count" />
            <Bar dataKey="ready" fill="#10B981" name="Mission Ready" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default InventoryChart;