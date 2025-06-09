import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatusCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  color: 'green' | 'yellow' | 'red' | 'blue';
  trend?: {
    value: number;
    direction: 'up' | 'down';
  };
}

const colorClasses = {
  green: 'bg-emerald-500 text-white',
  yellow: 'bg-amber-500 text-white',
  red: 'bg-red-500 text-white',
  blue: 'bg-blue-500 text-white'
};

const StatusCard: React.FC<StatusCardProps> = ({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  color,
  trend 
}) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wide">{title}</h3>
          <div className="mt-2 flex items-baseline">
            <p className="text-3xl font-bold text-white">{value}</p>
            {trend && (
              <span className={`ml-2 text-sm ${trend.direction === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
                {trend.direction === 'up' ? '+' : ''}{trend.value}%
              </span>
            )}
          </div>
          {subtitle && (
            <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
          )}
        </div>
        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default StatusCard;