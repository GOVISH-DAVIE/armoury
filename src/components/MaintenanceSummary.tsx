import React from 'react';
import { Wrench, Clock, AlertTriangle, CheckCircle } from 'lucide-react';
import { MaintenanceItem } from '../types';

interface MaintenanceSummaryProps {
  maintenanceItems: MaintenanceItem[];
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return <CheckCircle className="h-4 w-4 text-emerald-500" />;
    case 'in-progress':
      return <Wrench className="h-4 w-4 text-blue-500" />;
    case 'overdue':
      return <AlertTriangle className="h-4 w-4 text-red-500" />;
    case 'pending':
      return <Clock className="h-4 w-4 text-amber-500" />;
    default:
      return null;
  }
};

const getStatusBadge = (status: string) => {
  const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
  switch (status) {
    case 'completed':
      return `${baseClasses} bg-emerald-500/20 text-emerald-400`;
    case 'in-progress':
      return `${baseClasses} bg-blue-500/20 text-blue-400`;
    case 'overdue':
      return `${baseClasses} bg-red-500/20 text-red-400`;
    case 'pending':
      return `${baseClasses} bg-amber-500/20 text-amber-400`;
    default:
      return `${baseClasses} bg-slate-500/20 text-slate-400`;
  }
};

const getPriorityBadge = (priority: string) => {
  const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
  switch (priority) {
    case 'critical':
      return `${baseClasses} bg-red-500 text-white`;
    case 'high':
      return `${baseClasses} bg-red-400 text-white`;
    case 'medium':
      return `${baseClasses} bg-amber-500 text-white`;
    case 'low':
      return `${baseClasses} bg-blue-500 text-white`;
    default:
      return `${baseClasses} bg-slate-500 text-white`;
  }
};

const MaintenanceSummary: React.FC<MaintenanceSummaryProps> = ({ maintenanceItems }) => {
  const pendingCount = maintenanceItems.filter(item => item.status === 'pending').length;
  const inProgressCount = maintenanceItems.filter(item => item.status === 'in-progress').length;
  const overdueCount = maintenanceItems.filter(item => item.status === 'overdue').length;
  const completedCount = maintenanceItems.filter(item => item.status === 'completed').length;

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wide">Pending</h3>
              <p className="text-3xl font-bold text-white mt-2">{pendingCount}</p>
            </div>
            <div className="p-3 rounded-lg bg-amber-500 text-white">
              <Clock className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wide">In Progress</h3>
              <p className="text-3xl font-bold text-white mt-2">{inProgressCount}</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-500 text-white">
              <Wrench className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wide">Overdue</h3>
              <p className="text-3xl font-bold text-white mt-2">{overdueCount}</p>
            </div>
            <div className="p-3 rounded-lg bg-red-500 text-white">
              <AlertTriangle className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wide">Completed</h3>
              <p className="text-3xl font-bold text-white mt-2">{completedCount}</p>
            </div>
            <div className="p-3 rounded-lg bg-emerald-500 text-white">
              <CheckCircle className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Maintenance Table */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Maintenance Schedule</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Weapon
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Technician
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Scheduled
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Est. Completion
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {maintenanceItems.map((item) => (
                <tr key={item.id} className="hover:bg-slate-700/50 transition-colors">
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">
                    {item.serialNumber}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-300">
                    <div>
                      <div className="font-medium">{item.type}</div>
                      <div className="text-xs text-slate-400 capitalize">{item.maintenanceType}</div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className={getPriorityBadge(item.priority)}>
                      {item.priority}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(item.status)}
                      <span className={getStatusBadge(item.status)}>
                        {item.status.replace('-', ' ')}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-300">
                    {item.technician}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-300">
                    {new Date(item.scheduledDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-300">
                    {new Date(item.estimatedCompletion).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-300 max-w-xs">
                    <div className="truncate" title={item.description}>
                      {item.description}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceSummary;