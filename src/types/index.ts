export interface Weapon {
  id: string;
  serialNumber: string;
  type: string;
  caliber: string;
  status: 'FMC' | 'PMC' | 'NMC';
  location: string;
  lastMaintenance: string;
  nextMaintenance: string;
  assignedTo?: string;
  issuedDate?: string;
  maintenanceNotes?: string;
  estimatedRepairTime?: string;
}

export interface Personnel {
  id: string;
  rank: string;
  name: string;
  unit: string;
  clearanceLevel: string;
  weaponsAssigned: string[];
}

export interface Activity {
  id: string;
  timestamp: string;
  type: 'issue' | 'return' | 'maintenance' | 'access' | 'alert';
  description: string;
  personnel: string;
  weaponId?: string;
  status: 'normal' | 'warning' | 'critical';
}

export interface Alert {
  id: string;
  type: 'overdue' | 'maintenance' | 'security' | 'inventory';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: string;
  acknowledged: boolean;
}

export interface MaintenanceItem {
  id: string;
  weaponId: string;
  serialNumber: string;
  type: string;
  maintenanceType: 'scheduled' | 'repair' | 'inspection';
  priority: 'low' | 'medium' | 'high' | 'critical';
  scheduledDate: string;
  estimatedCompletion: string;
  technician: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed' | 'overdue';
}