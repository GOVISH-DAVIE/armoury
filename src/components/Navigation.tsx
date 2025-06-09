import React from 'react';
import { Home, Wrench, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'maintenance', label: 'Maintenance', icon: Wrench },
    { id: 'fmc', label: 'FMC Weapons', icon: CheckCircle },
    { id: 'pmc', label: 'PMC Weapons', icon: AlertTriangle },
    { id: 'nmc', label: 'NMC Weapons', icon: XCircle }
  ];

  return (
    <nav className="bg-slate-800 border-b border-slate-700">
      <div className="px-6">
        <div className="flex space-x-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                  isActive
                    ? 'border-emerald-500 text-emerald-400'
                    : 'border-transparent text-slate-400 hover:text-white hover:border-slate-300'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;