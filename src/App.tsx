import React, { useState, useEffect } from 'react';
import { Shuffle as Rifle, Users, AlertTriangle, Shield } from 'lucide-react';

import Header from './components/Header';
import Navigation from './components/Navigation';
import StatusCard from './components/StatusCard';
import ReadinessChart from './components/ReadinessChart';
import TrendsChart from './components/TrendsChart';
import InventoryChart from './components/InventoryChart';
import ActivityLog from './components/ActivityLog';
import AlertPanel from './components/AlertPanel';
import WeaponTable from './components/WeaponTable';
import MaintenanceSummary from './components/MaintenanceSummary';
import StatusWeaponList from './components/StatusWeaponList';

import { 
  weapons, 
  personnel, 
  activities, 
  alerts as initialAlerts,
  readinessData,
  trendsData,
  inventoryData,
  maintenanceItems
} from './data/mockData';

function App() {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentPage, setCurrentPage] = useState('dashboard');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAcknowledgeAlert = (alertId: string) => {
    setAlerts(alerts.map(alert => 
      alert.id === alertId ? { ...alert, acknowledged: true } : alert
    ));
  };

  const handleDismissAlert = (alertId: string) => {
    setAlerts(alerts.filter(alert => alert.id !== alertId));
  };

  const totalWeapons = weapons.length;
  const readyWeapons = weapons.filter(w => w.status === 'FMC').length;
  const unacknowledgedAlerts = alerts.filter(a => !a.acknowledged).length;
  const issuedWeapons = weapons.filter(w => w.assignedTo).length;

  const renderPage = () => {
    switch (currentPage) {
      case 'maintenance':
        return <MaintenanceSummary maintenanceItems={maintenanceItems} />;
      case 'fmc':
        return (
          <StatusWeaponList 
            weapons={weapons} 
            status="FMC" 
            title="Fully Mission Capable Weapons" 
          />
        );
      case 'pmc':
        return (
          <StatusWeaponList 
            weapons={weapons} 
            status="PMC" 
            title="Partially Mission Capable Weapons" 
          />
        );
      case 'nmc':
        return (
          <StatusWeaponList 
            weapons={weapons} 
            status="NMC" 
            title="Non-Mission Capable Weapons" 
          />
        );
      default:
        return (
          <>
            {/* Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatusCard
                title="Total Weapons"
                value={totalWeapons}
                subtitle="Inventory Count"
                icon={Rifle}
                color="blue"
                trend={{ value: 2, direction: 'up' }}
              />
              <StatusCard
                title="Mission Ready"
                value={readyWeapons}
                subtitle={`${Math.round((readyWeapons / totalWeapons) * 100)}% FMC`}
                icon={Shield}
                color="green"
                trend={{ value: 5, direction: 'up' }}
              />
              <StatusCard
                title="Active Alerts"
                value={unacknowledgedAlerts}
                subtitle="Require Attention"
                icon={AlertTriangle}
                color="red"
              />
              <StatusCard
                title="Issued Weapons"
                value={issuedWeapons}
                subtitle="Currently Deployed"
                icon={Users}
                color="yellow"
              />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ReadinessChart data={readinessData} />
              <TrendsChart data={trendsData} />
            </div>

            {/* Middle Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <InventoryChart data={inventoryData} />
              <ActivityLog activities={activities} />
            </div>

            {/* Alerts Panel */}
            <AlertPanel 
              alerts={alerts}
              onAcknowledge={handleAcknowledgeAlert}
              onDismiss={handleDismissAlert}
            />

            {/* Weapon Table */}
            <WeaponTable weapons={weapons} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header alertCount={unacknowledgedAlerts} />
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main className="p-6 space-y-6">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;