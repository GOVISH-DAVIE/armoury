import React from 'react';
import { Clock, AlertTriangle, CheckCircle, Wrench, Key } from 'lucide-react';
import { Activity } from '../types';

interface ActivityLogProps {
  activities: Activity[];
}

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'issue':
    case 'return':
      return CheckCircle;
    case 'maintenance':
      return Wrench;
    case 'access':
      return Key;
    case 'alert':
      return AlertTriangle;
    default:
      return Clock;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'normal':
      return 'text-emerald-500';
    case 'warning':
      return 'text-amber-500';
    case 'critical':
      return 'text-red-500';
    default:
      return 'text-slate-400';
  }
};

const ActivityLog: React.FC<ActivityLogProps> = ({ activities }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {activities.map((activity) => {
          const Icon = getActivityIcon(activity.type);
          return (
            <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors">
              <div className={`p-2 rounded-full bg-slate-600 ${getStatusColor(activity.status)}`}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white">{activity.description}</p>
                <div className="flex items-center space-x-4 mt-1">
                  <span className="text-xs text-slate-400">
                    {new Date(activity.timestamp).toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-400">
                    by {activity.personnel}
                  </span>
                  {activity.weaponId && (
                    <span className="text-xs text-slate-400">
                      ID: {activity.weaponId}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityLog;