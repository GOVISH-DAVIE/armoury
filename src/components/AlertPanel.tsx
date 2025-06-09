import React from 'react';
import { AlertTriangle, Clock, Shield, Package, X, Check } from 'lucide-react';
import { Alert } from '../types';

interface AlertPanelProps {
  alerts: Alert[];
  onAcknowledge: (alertId: string) => void;
  onDismiss: (alertId: string) => void;
}

const getAlertIcon = (type: string) => {
  switch (type) {
    case 'overdue':
      return Clock;
    case 'maintenance':
      return Package;
    case 'security':
      return Shield;
    case 'inventory':
      return Package;
    default:
      return AlertTriangle;
  }
};

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'critical':
      return 'border-red-500 bg-red-500/10';
    case 'high':
      return 'border-red-400 bg-red-400/10';
    case 'medium':
      return 'border-amber-500 bg-amber-500/10';
    case 'low':
      return 'border-blue-500 bg-blue-500/10';
    default:
      return 'border-slate-500 bg-slate-500/10';
  }
};

const AlertPanel: React.FC<AlertPanelProps> = ({ alerts, onAcknowledge, onDismiss }) => {
  const unacknowledgedAlerts = alerts.filter(alert => !alert.acknowledged);
  
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Active Alerts</h3>
        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
          {unacknowledgedAlerts.length}
        </span>
      </div>
      
      <div className="space-y-3 max-h-80 overflow-y-auto">
        {alerts.length === 0 ? (
          <p className="text-slate-400 text-center py-8">No active alerts</p>
        ) : (
          alerts.map((alert) => {
            const Icon = getAlertIcon(alert.type);
            return (
              <div
                key={alert.id}
                className={`border rounded-lg p-4 ${getSeverityColor(alert.severity)} ${
                  alert.acknowledged ? 'opacity-50' : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <Icon className="h-5 w-5 text-current mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xs font-medium text-white uppercase tracking-wide">
                          {alert.type}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          alert.severity === 'critical' ? 'bg-red-500 text-white' :
                          alert.severity === 'high' ? 'bg-red-400 text-white' :
                          alert.severity === 'medium' ? 'bg-amber-500 text-white' :
                          'bg-blue-500 text-white'
                        }`}>
                          {alert.severity}
                        </span>
                      </div>
                      <p className="text-sm text-white mb-2">{alert.message}</p>
                      <p className="text-xs text-slate-400">
                        {new Date(alert.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-1 ml-2">
                    {!alert.acknowledged && (
                      <button
                        onClick={() => onAcknowledge(alert.id)}
                        className="p-1 text-emerald-400 hover:text-emerald-300 transition-colors"
                        title="Acknowledge"
                      >
                        <Check className="h-4 w-4" />
                      </button>
                    )}
                    <button
                      onClick={() => onDismiss(alert.id)}
                      className="p-1 text-slate-400 hover:text-white transition-colors"
                      title="Dismiss"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default AlertPanel;