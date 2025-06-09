import React from 'react';
import { Weapon } from '../types';
import { CheckCircle, AlertTriangle, XCircle, User, MapPin, Calendar } from 'lucide-react';

interface StatusWeaponListProps {
  weapons: Weapon[];
  status: 'FMC' | 'PMC' | 'NMC';
  title: string;
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'FMC':
      return <CheckCircle className="h-5 w-5 text-emerald-500" />;
    case 'PMC':
      return <AlertTriangle className="h-5 w-5 text-amber-500" />;
    case 'NMC':
      return <XCircle className="h-5 w-5 text-red-500" />;
    default:
      return null;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'FMC':
      return 'border-emerald-500 bg-emerald-500/10';
    case 'PMC':
      return 'border-amber-500 bg-amber-500/10';
    case 'NMC':
      return 'border-red-500 bg-red-500/10';
    default:
      return 'border-slate-500 bg-slate-500/10';
  }
};

const StatusWeaponList: React.FC<StatusWeaponListProps> = ({ weapons, status, title }) => {
  const filteredWeapons = weapons.filter(weapon => weapon.status === status);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {getStatusIcon(status)}
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <span className="bg-slate-700 text-white px-3 py-1 rounded-full text-sm">
            {filteredWeapons.length} weapons
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWeapons.map((weapon) => (
          <div
            key={weapon.id}
            className={`border rounded-lg p-6 ${getStatusColor(weapon.status)} hover:bg-opacity-20 transition-all duration-200`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-2">
                {getStatusIcon(weapon.status)}
                <span className="text-lg font-semibold text-white">
                  {weapon.serialNumber}
                </span>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                status === 'FMC' ? 'bg-emerald-500/20 text-emerald-400' :
                status === 'PMC' ? 'bg-amber-500/20 text-amber-400' :
                'bg-red-500/20 text-red-400'
              }`}>
                {weapon.status}
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="text-white font-medium">{weapon.type}</h4>
                <p className="text-slate-400 text-sm">{weapon.caliber}</p>
              </div>

              <div className="flex items-center space-x-2 text-slate-300">
                <MapPin className="h-4 w-4 text-slate-400" />
                <span className="text-sm">{weapon.location}</span>
              </div>

              {weapon.assignedTo && (
                <div className="flex items-center space-x-2 text-slate-300">
                  <User className="h-4 w-4 text-slate-400" />
                  <span className="text-sm">Assigned to {weapon.assignedTo}</span>
                </div>
              )}

              <div className="flex items-center space-x-2 text-slate-300">
                <Calendar className="h-4 w-4 text-slate-400" />
                <span className="text-sm">
                  Next maintenance: {new Date(weapon.nextMaintenance).toLocaleDateString()}
                </span>
              </div>

              {weapon.maintenanceNotes && (
                <div className="mt-3 p-3 bg-slate-700/50 rounded-lg">
                  <p className="text-xs text-slate-400 mb-1">Maintenance Notes:</p>
                  <p className="text-sm text-slate-300">{weapon.maintenanceNotes}</p>
                  {weapon.estimatedRepairTime && (
                    <p className="text-xs text-slate-400 mt-1">
                      Est. repair time: {weapon.estimatedRepairTime}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredWeapons.length === 0 && (
        <div className="text-center py-12">
          <div className="text-slate-400 text-lg mb-2">No {status} weapons found</div>
          <p className="text-slate-500">All weapons in this category are currently accounted for.</p>
        </div>
      )}
    </div>
  );
};

export default StatusWeaponList;