import React from 'react';
import { Weapon } from '../types';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface WeaponTableProps {
  weapons: Weapon[];
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'FMC':
      return <CheckCircle className="h-4 w-4 text-emerald-500" />;
    case 'PMC':
      return <AlertTriangle className="h-4 w-4 text-amber-500" />;
    case 'NMC':
      return <XCircle className="h-4 w-4 text-red-500" />;
    default:
      return null;
  }
};

const getStatusBadge = (status: string) => {
  const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
  switch (status) {
    case 'FMC':
      return `${baseClasses} bg-emerald-500/20 text-emerald-400`;
    case 'PMC':
      return `${baseClasses} bg-amber-500/20 text-amber-400`;
    case 'NMC':
      return `${baseClasses} bg-red-500/20 text-red-400`;
    default:
      return `${baseClasses} bg-slate-500/20 text-slate-400`;
  }
};

const WeaponTable: React.FC<WeaponTableProps> = ({ weapons }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Weapon Inventory</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                Serial Number
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                Location
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                Assigned To
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                Next Maintenance
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {weapons.map((weapon) => (
              <tr key={weapon.id} className="hover:bg-slate-700/50 transition-colors">
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">
                  {weapon.serialNumber}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-300">
                  <div>
                    <div className="font-medium">{weapon.type}</div>
                    <div className="text-xs text-slate-400">{weapon.caliber}</div>
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(weapon.status)}
                    <span className={getStatusBadge(weapon.status)}>
                      {weapon.status}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-300">
                  {weapon.location}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-300">
                  {weapon.assignedTo || '-'}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-300">
                  {new Date(weapon.nextMaintenance).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WeaponTable;