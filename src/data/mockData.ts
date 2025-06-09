import { Weapon, Personnel, Activity, Alert, MaintenanceItem } from '../types';

export const weapons: Weapon[] = [
  // M4 Carbines - FMC
  {
    id: '1',
    serialNumber: 'M4-001234',
    type: 'M4 Carbine',
    caliber: '5.56mm',
    status: 'FMC',
    location: 'Rack A-12',
    lastMaintenance: '2024-01-15',
    nextMaintenance: '2024-04-15',
    assignedTo: 'SGT Johnson',
    issuedDate: '2024-01-20'
  },
  {
    id: '2',
    serialNumber: 'M4-001245',
    type: 'M4 Carbine',
    caliber: '5.56mm',
    status: 'FMC',
    location: 'Rack A-13',
    lastMaintenance: '2024-01-18',
    nextMaintenance: '2024-04-18',
    assignedTo: 'CPL Martinez',
    issuedDate: '2024-01-22'
  },
  {
    id: '3',
    serialNumber: 'M4-001256',
    type: 'M4 Carbine',
    caliber: '5.56mm',
    status: 'FMC',
    location: 'Rack A-14',
    lastMaintenance: '2024-01-20',
    nextMaintenance: '2024-04-20'
  },
  {
    id: '4',
    serialNumber: 'M4-001267',
    type: 'M4 Carbine',
    caliber: '5.56mm',
    status: 'FMC',
    location: 'Rack A-15',
    lastMaintenance: '2024-01-12',
    nextMaintenance: '2024-04-12',
    assignedTo: 'PFC Williams',
    issuedDate: '2024-01-25'
  },
  {
    id: '5',
    serialNumber: 'M4-001278',
    type: 'M4 Carbine',
    caliber: '5.56mm',
    status: 'FMC',
    location: 'Rack A-16',
    lastMaintenance: '2024-01-14',
    nextMaintenance: '2024-04-14'
  },
  {
    id: '6',
    serialNumber: 'M4-001289',
    type: 'M4 Carbine',
    caliber: '5.56mm',
    status: 'FMC',
    location: 'Rack A-17',
    lastMaintenance: '2024-01-16',
    nextMaintenance: '2024-04-16',
    assignedTo: 'SPC Davis',
    issuedDate: '2024-01-28'
  },
  {
    id: '7',
    serialNumber: 'M4-001290',
    type: 'M4 Carbine',
    caliber: '5.56mm',
    status: 'FMC',
    location: 'Rack A-18',
    lastMaintenance: '2024-01-19',
    nextMaintenance: '2024-04-19'
  },
  {
    id: '8',
    serialNumber: 'M4-001301',
    type: 'M4 Carbine',
    caliber: '5.56mm',
    status: 'FMC',
    location: 'Rack A-19',
    lastMaintenance: '2024-01-21',
    nextMaintenance: '2024-04-21',
    assignedTo: 'SGT Thompson',
    issuedDate: '2024-01-30'
  },
  {
    id: '9',
    serialNumber: 'M4-001312',
    type: 'M4 Carbine',
    caliber: '5.56mm',
    status: 'FMC',
    location: 'Rack A-20',
    lastMaintenance: '2024-01-17',
    nextMaintenance: '2024-04-17'
  },
  {
    id: '10',
    serialNumber: 'M4-001323',
    type: 'M4 Carbine',
    caliber: '5.56mm',
    status: 'FMC',
    location: 'Rack A-21',
    lastMaintenance: '2024-01-13',
    nextMaintenance: '2024-04-13',
    assignedTo: 'CPL Anderson',
    issuedDate: '2024-01-26'
  },

  // M4 Carbines - PMC
  {
    id: '11',
    serialNumber: 'M4-001235',
    type: 'M4 Carbine',
    caliber: '5.56mm',
    status: 'PMC',
    location: 'Maintenance Bay',
    lastMaintenance: '2024-01-10',
    nextMaintenance: '2024-04-10',
    maintenanceNotes: 'Trigger mechanism needs adjustment',
    estimatedRepairTime: '2-3 days'
  },
  {
    id: '12',
    serialNumber: 'M4-001236',
    type: 'M4 Carbine',
    caliber: '5.56mm',
    status: 'PMC',
    location: 'Armory Vault',
    lastMaintenance: '2024-01-05',
    nextMaintenance: '2024-04-05',
    maintenanceNotes: 'Optics calibration needed',
    estimatedRepairTime: '1 day'
  },
  {
    id: '13',
    serialNumber: 'M4-001247',
    type: 'M4 Carbine',
    caliber: '5.56mm',
    status: 'PMC',
    location: 'Maintenance Bay',
    lastMaintenance: '2024-01-08',
    nextMaintenance: '2024-04-08',
    maintenanceNotes: 'Charging handle sticking, needs lubrication',
    estimatedRepairTime: '1-2 days'
  },
  {
    id: '14',
    serialNumber: 'M4-001258',
    type: 'M4 Carbine',
    caliber: '5.56mm',
    status: 'PMC',
    location: 'Armory Vault',
    lastMaintenance: '2024-01-06',
    nextMaintenance: '2024-04-06',
    maintenanceNotes: 'Magazine release button loose',
    estimatedRepairTime: '1 day'
  },
  {
    id: '15',
    serialNumber: 'M4-001269',
    type: 'M4 Carbine',
    caliber: '5.56mm',
    status: 'PMC',
    location: 'Maintenance Bay',
    lastMaintenance: '2024-01-09',
    nextMaintenance: '2024-04-09',
    maintenanceNotes: 'Stock adjustment mechanism worn',
    estimatedRepairTime: '2 days'
  },
  {
    id: '16',
    serialNumber: 'M4-001270',
    type: 'M4 Carbine',
    caliber: '5.56mm',
    status: 'PMC',
    location: 'Armory Vault',
    lastMaintenance: '2024-01-07',
    nextMaintenance: '2024-04-07',
    maintenanceNotes: 'Forward assist needs replacement',
    estimatedRepairTime: '3 days'
  },

  // M4 Carbines - NMC
  {
    id: '17',
    serialNumber: 'M4-001271',
    type: 'M4 Carbine',
    caliber: '5.56mm',
    status: 'NMC',
    location: 'Repair Shop',
    lastMaintenance: '2023-12-15',
    nextMaintenance: '2024-03-15',
    maintenanceNotes: 'Barrel replacement required, excessive wear',
    estimatedRepairTime: '7-10 days'
  },
  {
    id: '18',
    serialNumber: 'M16-007890',
    type: 'M16A4',
    caliber: '5.56mm',
    status: 'NMC',
    location: 'Repair Shop',
    lastMaintenance: '2023-11-15',
    nextMaintenance: '2024-02-15',
    maintenanceNotes: 'Gas system malfunction, bolt carrier group replacement',
    estimatedRepairTime: '5-7 days'
  },
  {
    id: '19',
    serialNumber: 'M4-001282',
    type: 'M4 Carbine',
    caliber: '5.56mm',
    status: 'NMC',
    location: 'Repair Shop',
    lastMaintenance: '2023-12-20',
    nextMaintenance: '2024-03-20',
    maintenanceNotes: 'Upper receiver cracked, needs replacement',
    estimatedRepairTime: '10-14 days'
  },
  {
    id: '20',
    serialNumber: 'M4-001293',
    type: 'M4 Carbine',
    caliber: '5.56mm',
    status: 'NMC',
    location: 'Repair Shop',
    lastMaintenance: '2023-12-10',
    nextMaintenance: '2024-03-10',
    maintenanceNotes: 'Firing pin broken, trigger group malfunction',
    estimatedRepairTime: '5-8 days'
  },

  // M249 SAW - FMC
  {
    id: '21',
    serialNumber: 'M249-005678',
    type: 'M249 SAW',
    caliber: '5.56mm',
    status: 'FMC',
    location: 'Rack B-05',
    lastMaintenance: '2024-01-08',
    nextMaintenance: '2024-04-08'
  },
  {
    id: '22',
    serialNumber: 'M249-005679',
    type: 'M249 SAW',
    caliber: '5.56mm',
    status: 'FMC',
    location: 'Rack B-06',
    lastMaintenance: '2024-01-18',
    nextMaintenance: '2024-04-18',
    assignedTo: 'CPL Martinez'
  },
  {
    id: '23',
    serialNumber: 'M249-005680',
    type: 'M249 SAW',
    caliber: '5.56mm',
    status: 'FMC',
    location: 'Rack B-07',
    lastMaintenance: '2024-01-12',
    nextMaintenance: '2024-04-12'
  },
  {
    id: '24',
    serialNumber: 'M249-005681',
    type: 'M249 SAW',
    caliber: '5.56mm',
    status: 'FMC',
    location: 'Rack B-08',
    lastMaintenance: '2024-01-15',
    nextMaintenance: '2024-04-15',
    assignedTo: 'SGT Rodriguez',
    issuedDate: '2024-01-29'
  },
  {
    id: '25',
    serialNumber: 'M249-005682',
    type: 'M249 SAW',
    caliber: '5.56mm',
    status: 'FMC',
    location: 'Rack B-09',
    lastMaintenance: '2024-01-20',
    nextMaintenance: '2024-04-20'
  },

  // M249 SAW - PMC
  {
    id: '26',
    serialNumber: 'M249-005683',
    type: 'M249 SAW',
    caliber: '5.56mm',
    status: 'PMC',
    location: 'Maintenance Bay',
    lastMaintenance: '2024-01-03',
    nextMaintenance: '2024-04-03',
    maintenanceNotes: 'Feed tray cover alignment issue',
    estimatedRepairTime: '2-3 days'
  },
  {
    id: '27',
    serialNumber: 'M249-005684',
    type: 'M249 SAW',
    caliber: '5.56mm',
    status: 'PMC',
    location: 'Armory Vault',
    lastMaintenance: '2024-01-04',
    nextMaintenance: '2024-04-04',
    maintenanceNotes: 'Bipod legs loose, needs tightening',
    estimatedRepairTime: '1 day'
  },

  // M249 SAW - NMC
  {
    id: '28',
    serialNumber: 'M249-005685',
    type: 'M249 SAW',
    caliber: '5.56mm',
    status: 'NMC',
    location: 'Repair Shop',
    lastMaintenance: '2023-12-05',
    nextMaintenance: '2024-03-05',
    maintenanceNotes: 'Gas regulator damaged, barrel overheating',
    estimatedRepairTime: '8-12 days'
  },

  // M240B - FMC
  {
    id: '29',
    serialNumber: 'M240-009871',
    type: 'M240B',
    caliber: '7.62mm',
    status: 'FMC',
    location: 'Rack C-01',
    lastMaintenance: '2024-01-10',
    nextMaintenance: '2024-04-10'
  },
  {
    id: '30',
    serialNumber: 'M240-009872',
    type: 'M240B',
    caliber: '7.62mm',
    status: 'FMC',
    location: 'Rack C-02',
    lastMaintenance: '2024-01-14',
    nextMaintenance: '2024-04-14',
    assignedTo: 'SSG Wilson',
    issuedDate: '2024-01-27'
  },
  {
    id: '31',
    serialNumber: 'M240-009873',
    type: 'M240B',
    caliber: '7.62mm',
    status: 'FMC',
    location: 'Rack C-03',
    lastMaintenance: '2024-01-16',
    nextMaintenance: '2024-04-16'
  },
  {
    id: '32',
    serialNumber: 'M240-009874',
    type: 'M240B',
    caliber: '7.62mm',
    status: 'FMC',
    location: 'Rack C-04',
    lastMaintenance: '2024-01-19',
    nextMaintenance: '2024-04-19'
  },

  // M240B - PMC
  {
    id: '33',
    serialNumber: 'M240-009875',
    type: 'M240B',
    caliber: '7.62mm',
    status: 'PMC',
    location: 'Maintenance Bay',
    lastMaintenance: '2024-01-02',
    nextMaintenance: '2024-04-02',
    maintenanceNotes: 'Trigger housing group needs adjustment',
    estimatedRepairTime: '3-4 days'
  },
  {
    id: '34',
    serialNumber: 'M240-009877',
    type: 'M240B',
    caliber: '7.62mm',
    status: 'PMC',
    location: 'Armory Vault',
    lastMaintenance: '2024-01-01',
    nextMaintenance: '2024-04-01',
    maintenanceNotes: 'Buttstock assembly loose',
    estimatedRepairTime: '1-2 days'
  },

  // M240B - NMC
  {
    id: '35',
    serialNumber: 'M240-009876',
    type: 'M240B',
    caliber: '7.62mm',
    status: 'NMC',
    location: 'Repair Shop',
    lastMaintenance: '2023-12-20',
    nextMaintenance: '2024-03-20',
    maintenanceNotes: 'Barrel replacement required, firing pin damaged',
    estimatedRepairTime: '7-10 days'
  },
  {
    id: '36',
    serialNumber: 'M240-009878',
    type: 'M240B',
    caliber: '7.62mm',
    status: 'NMC',
    location: 'Repair Shop',
    lastMaintenance: '2023-11-25',
    nextMaintenance: '2024-02-25',
    maintenanceNotes: 'Feed cover assembly broken, bolt face damaged',
    estimatedRepairTime: '10-15 days'
  },

  // M9 Pistols - FMC
  {
    id: '37',
    serialNumber: 'M9-112233',
    type: 'M9 Pistol',
    caliber: '9mm',
    status: 'FMC',
    location: 'Secure Storage',
    lastMaintenance: '2024-01-12',
    nextMaintenance: '2024-07-12'
  },
  {
    id: '38',
    serialNumber: 'M9-112234',
    type: 'M9 Pistol',
    caliber: '9mm',
    status: 'FMC',
    location: 'Secure Storage',
    lastMaintenance: '2024-01-14',
    nextMaintenance: '2024-07-14',
    assignedTo: '1LT Parker',
    issuedDate: '2024-01-31'
  },
  {
    id: '39',
    serialNumber: 'M9-112235',
    type: 'M9 Pistol',
    caliber: '9mm',
    status: 'FMC',
    location: 'Secure Storage',
    lastMaintenance: '2024-01-16',
    nextMaintenance: '2024-07-16'
  },
  {
    id: '40',
    serialNumber: 'M9-112236',
    type: 'M9 Pistol',
    caliber: '9mm',
    status: 'FMC',
    location: 'Secure Storage',
    lastMaintenance: '2024-01-18',
    nextMaintenance: '2024-07-18',
    assignedTo: 'CPT Smith',
    issuedDate: '2024-02-01'
  },
  {
    id: '41',
    serialNumber: 'M9-112237',
    type: 'M9 Pistol',
    caliber: '9mm',
    status: 'FMC',
    location: 'Secure Storage',
    lastMaintenance: '2024-01-20',
    nextMaintenance: '2024-07-20'
  },
  {
    id: '42',
    serialNumber: 'M9-112238',
    type: 'M9 Pistol',
    caliber: '9mm',
    status: 'FMC',
    location: 'Secure Storage',
    lastMaintenance: '2024-01-22',
    nextMaintenance: '2024-07-22'
  },
  {
    id: '43',
    serialNumber: 'M9-112239',
    type: 'M9 Pistol',
    caliber: '9mm',
    status: 'FMC',
    location: 'Secure Storage',
    lastMaintenance: '2024-01-11',
    nextMaintenance: '2024-07-11',
    assignedTo: 'MSG Brown',
    issuedDate: '2024-01-28'
  },
  {
    id: '44',
    serialNumber: 'M9-112240',
    type: 'M9 Pistol',
    caliber: '9mm',
    status: 'FMC',
    location: 'Secure Storage',
    lastMaintenance: '2024-01-13',
    nextMaintenance: '2024-07-13'
  },
  {
    id: '45',
    serialNumber: 'M9-112241',
    type: 'M9 Pistol',
    caliber: '9mm',
    status: 'FMC',
    location: 'Secure Storage',
    lastMaintenance: '2024-01-15',
    nextMaintenance: '2024-07-15'
  },
  {
    id: '46',
    serialNumber: 'M9-112242',
    type: 'M9 Pistol',
    caliber: '9mm',
    status: 'FMC',
    location: 'Secure Storage',
    lastMaintenance: '2024-01-17',
    nextMaintenance: '2024-07-17',
    assignedTo: 'SFC Garcia',
    issuedDate: '2024-02-02'
  },

  // M9 Pistols - PMC
  {
    id: '47',
    serialNumber: 'M9-112243',
    type: 'M9 Pistol',
    caliber: '9mm',
    status: 'PMC',
    location: 'Maintenance Bay',
    lastMaintenance: '2023-12-28',
    nextMaintenance: '2024-06-28',
    maintenanceNotes: 'Slide action sticky, needs cleaning',
    estimatedRepairTime: '1 day'
  },
  {
    id: '48',
    serialNumber: 'M9-112244',
    type: 'M9 Pistol',
    caliber: '9mm',
    status: 'PMC',
    location: 'Armory Vault',
    lastMaintenance: '2023-12-30',
    nextMaintenance: '2024-06-30',
    maintenanceNotes: 'Magazine release button worn',
    estimatedRepairTime: '2 days'
  },

  // M9 Pistols - NMC
  {
    id: '49',
    serialNumber: 'M9-112245',
    type: 'M9 Pistol',
    caliber: '9mm',
    status: 'NMC',
    location: 'Repair Shop',
    lastMaintenance: '2023-11-20',
    nextMaintenance: '2024-05-20',
    maintenanceNotes: 'Barrel cracked, frame damage',
    estimatedRepairTime: '14-21 days'
  },

  // M16A4 - FMC
  {
    id: '50',
    serialNumber: 'M16-007891',
    type: 'M16A4',
    caliber: '5.56mm',
    status: 'FMC',
    location: 'Rack D-01',
    lastMaintenance: '2024-01-09',
    nextMaintenance: '2024-04-09'
  },
  {
    id: '51',
    serialNumber: 'M16-007892',
    type: 'M16A4',
    caliber: '5.56mm',
    status: 'FMC',
    location: 'Rack D-02',
    lastMaintenance: '2024-01-11',
    nextMaintenance: '2024-04-11'
  },
  {
    id: '52',
    serialNumber: 'M16-007893',
    type: 'M16A4',
    caliber: '5.56mm',
    status: 'FMC',
    location: 'Rack D-03',
    lastMaintenance: '2024-01-13',
    nextMaintenance: '2024-04-13',
    assignedTo: 'PV2 Johnson',
    issuedDate: '2024-02-03'
  },
  {
    id: '53',
    serialNumber: 'M16-007894',
    type: 'M16A4',
    caliber: '5.56mm',
    status: 'FMC',
    location: 'Rack D-04',
    lastMaintenance: '2024-01-15',
    nextMaintenance: '2024-04-15'
  },

  // M16A4 - PMC
  {
    id: '54',
    serialNumber: 'M16-007895',
    type: 'M16A4',
    caliber: '5.56mm',
    status: 'PMC',
    location: 'Maintenance Bay',
    lastMaintenance: '2023-12-25',
    nextMaintenance: '2024-03-25',
    maintenanceNotes: 'Handguard loose, front sight post adjustment needed',
    estimatedRepairTime: '2-3 days'
  },
  {
    id: '55',
    serialNumber: 'M16-007896',
    type: 'M16A4',
    caliber: '5.56mm',
    status: 'PMC',
    location: 'Armory Vault',
    lastMaintenance: '2023-12-27',
    nextMaintenance: '2024-03-27',
    maintenanceNotes: 'Carry handle mount worn',
    estimatedRepairTime: '1-2 days'
  },

  // M16A4 - NMC
  {
    id: '56',
    serialNumber: 'M16-007897',
    type: 'M16A4',
    caliber: '5.56mm',
    status: 'NMC',
    location: 'Repair Shop',
    lastMaintenance: '2023-10-15',
    nextMaintenance: '2024-01-15',
    maintenanceNotes: 'Buffer tube cracked, lower receiver damage',
    estimatedRepairTime: '12-18 days'
  },

  // M203 Grenade Launchers - FMC
  {
    id: '57',
    serialNumber: 'M203-445566',
    type: 'M203 Grenade Launcher',
    caliber: '40mm',
    status: 'FMC',
    location: 'Secure Vault',
    lastMaintenance: '2024-01-05',
    nextMaintenance: '2024-07-05'
  },
  {
    id: '58',
    serialNumber: 'M203-445567',
    type: 'M203 Grenade Launcher',
    caliber: '40mm',
    status: 'FMC',
    location: 'Secure Vault',
    lastMaintenance: '2024-01-07',
    nextMaintenance: '2024-07-07'
  },

  // M203 - PMC
  {
    id: '59',
    serialNumber: 'M203-445568',
    type: 'M203 Grenade Launcher',
    caliber: '40mm',
    status: 'PMC',
    location: 'Maintenance Bay',
    lastMaintenance: '2023-12-15',
    nextMaintenance: '2024-06-15',
    maintenanceNotes: 'Trigger mechanism stiff, needs lubrication',
    estimatedRepairTime: '2 days'
  },

  // M203 - NMC
  {
    id: '60',
    serialNumber: 'M203-445569',
    type: 'M203 Grenade Launcher',
    caliber: '40mm',
    status: 'NMC',
    location: 'Repair Shop',
    lastMaintenance: '2023-10-20',
    nextMaintenance: '2024-04-20',
    maintenanceNotes: 'Barrel obstruction, safety mechanism failure',
    estimatedRepairTime: '15-20 days'
  }
];

export const personnel: Personnel[] = [
  {
    id: '1',
    rank: 'SGT',
    name: 'Johnson, Michael',
    unit: '1st Infantry',
    clearanceLevel: 'SECRET',
    weaponsAssigned: ['M4-001234']
  },
  {
    id: '2',
    rank: 'CPL',
    name: 'Smith, Sarah',
    unit: '2nd Infantry',
    clearanceLevel: 'CONFIDENTIAL',
    weaponsAssigned: []
  },
  {
    id: '3',
    rank: 'CPL',
    name: 'Martinez, Carlos',
    unit: '1st Infantry',
    clearanceLevel: 'SECRET',
    weaponsAssigned: ['M4-001245', 'M249-005679']
  },
  {
    id: '4',
    rank: 'PFC',
    name: 'Williams, James',
    unit: '3rd Infantry',
    clearanceLevel: 'CONFIDENTIAL',
    weaponsAssigned: ['M4-001267']
  },
  {
    id: '5',
    rank: 'SPC',
    name: 'Davis, Ashley',
    unit: '2nd Infantry',
    clearanceLevel: 'SECRET',
    weaponsAssigned: ['M4-001289']
  },
  {
    id: '6',
    rank: 'SGT',
    name: 'Thompson, Robert',
    unit: '1st Infantry',
    clearanceLevel: 'SECRET',
    weaponsAssigned: ['M4-001301']
  },
  {
    id: '7',
    rank: 'CPL',
    name: 'Anderson, Lisa',
    unit: '3rd Infantry',
    clearanceLevel: 'CONFIDENTIAL',
    weaponsAssigned: ['M4-001323']
  },
  {
    id: '8',
    rank: 'SGT',
    name: 'Rodriguez, Maria',
    unit: '2nd Infantry',
    clearanceLevel: 'SECRET',
    weaponsAssigned: ['M249-005681']
  },
  {
    id: '9',
    rank: 'SSG',
    name: 'Wilson, David',
    unit: '1st Infantry',
    clearanceLevel: 'SECRET',
    weaponsAssigned: ['M240-009872']
  },
  {
    id: '10',
    rank: '1LT',
    name: 'Parker, Jennifer',
    unit: 'HQ Company',
    clearanceLevel: 'SECRET',
    weaponsAssigned: ['M9-112234']
  },
  {
    id: '11',
    rank: 'CPT',
    name: 'Smith, William',
    unit: 'HQ Company',
    clearanceLevel: 'TOP SECRET',
    weaponsAssigned: ['M9-112236']
  },
  {
    id: '12',
    rank: 'MSG',
    name: 'Brown, Christopher',
    unit: 'HQ Company',
    clearanceLevel: 'SECRET',
    weaponsAssigned: ['M9-112239']
  },
  {
    id: '13',
    rank: 'SFC',
    name: 'Garcia, Patricia',
    unit: '1st Infantry',
    clearanceLevel: 'SECRET',
    weaponsAssigned: ['M9-112242']
  },
  {
    id: '14',
    rank: 'PV2',
    name: 'Johnson, Kevin',
    unit: '3rd Infantry',
    clearanceLevel: 'CONFIDENTIAL',
    weaponsAssigned: ['M16-007893']
  }
];

export const activities: Activity[] = [
  {
    id: '1',
    timestamp: '2024-02-05T14:30:00Z',
    type: 'issue',
    description: 'M4 Carbine issued to SGT Johnson',
    personnel: 'SGT Johnson',
    weaponId: 'M4-001234',
    status: 'normal'
  },
  {
    id: '2',
    timestamp: '2024-02-05T13:15:00Z',
    type: 'maintenance',
    description: 'M4 Carbine scheduled for maintenance',
    personnel: 'SSG Martinez',
    weaponId: 'M4-001235',
    status: 'warning'
  },
  {
    id: '3',
    timestamp: '2024-02-05T12:00:00Z',
    type: 'access',
    description: 'Armory access by authorized personnel',
    personnel: 'SFC Williams',
    status: 'normal'
  },
  {
    id: '4',
    timestamp: '2024-02-05T10:45:00Z',
    type: 'alert',
    description: 'Overdue weapon return detected',
    personnel: 'System',
    weaponId: 'M240-009876',
    status: 'critical'
  },
  {
    id: '5',
    timestamp: '2024-02-05T09:30:00Z',
    type: 'maintenance',
    description: 'M240B moved to repair shop for barrel replacement',
    personnel: 'SPC Thompson',
    weaponId: 'M240-009876',
    status: 'critical'
  },
  {
    id: '6',
    timestamp: '2024-02-05T08:15:00Z',
    type: 'issue',
    description: 'M249 SAW issued to CPL Martinez',
    personnel: 'CPL Martinez',
    weaponId: 'M249-005679',
    status: 'normal'
  },
  {
    id: '7',
    timestamp: '2024-02-05T07:45:00Z',
    type: 'return',
    description: 'M9 Pistol returned by 1LT Parker',
    personnel: '1LT Parker',
    weaponId: 'M9-112234',
    status: 'normal'
  },
  {
    id: '8',
    timestamp: '2024-02-04T16:20:00Z',
    type: 'maintenance',
    description: 'M16A4 trigger mechanism inspection completed',
    personnel: 'SPC Rodriguez',
    weaponId: 'M16-007895',
    status: 'warning'
  },
  {
    id: '9',
    timestamp: '2024-02-04T15:30:00Z',
    type: 'access',
    description: 'Unauthorized access attempt blocked',
    personnel: 'Security System',
    status: 'critical'
  },
  {
    id: '10',
    timestamp: '2024-02-04T14:10:00Z',
    type: 'issue',
    description: 'M4 Carbine issued to PFC Williams',
    personnel: 'PFC Williams',
    weaponId: 'M4-001267',
    status: 'normal'
  },
  {
    id: '11',
    timestamp: '2024-02-04T13:25:00Z',
    type: 'maintenance',
    description: 'M203 Grenade Launcher cleaning completed',
    personnel: 'SSG Thompson',
    weaponId: 'M203-445566',
    status: 'normal'
  },
  {
    id: '12',
    timestamp: '2024-02-04T12:40:00Z',
    type: 'return',
    description: 'M240B returned from field exercise',
    personnel: 'SSG Wilson',
    weaponId: 'M240-009872',
    status: 'normal'
  },
  {
    id: '13',
    timestamp: '2024-02-04T11:55:00Z',
    type: 'alert',
    description: 'Maintenance overdue for 3 weapons',
    personnel: 'System',
    status: 'warning'
  },
  {
    id: '14',
    timestamp: '2024-02-04T10:30:00Z',
    type: 'access',
    description: 'Armory inspection by commanding officer',
    personnel: 'COL Anderson',
    status: 'normal'
  },
  {
    id: '15',
    timestamp: '2024-02-04T09:15:00Z',
    type: 'maintenance',
    description: 'M9 Pistol slide mechanism lubricated',
    personnel: 'CPL Davis',
    weaponId: 'M9-112243',
    status: 'warning'
  }
];

export const alerts: Alert[] = [
  {
    id: '1',
    type: 'overdue',
    severity: 'high',
    message: 'Weapon M240-009876 overdue for return by 3 days',
    timestamp: '2024-02-05T08:00:00Z',
    acknowledged: false
  },
  {
    id: '2',
    type: 'maintenance',
    severity: 'medium',
    message: '8 weapons due for scheduled maintenance this week',
    timestamp: '2024-02-05T07:30:00Z',
    acknowledged: true
  },
  {
    id: '3',
    type: 'security',
    severity: 'critical',
    message: 'Unauthorized access attempt detected at 02:15',
    timestamp: '2024-02-05T02:15:00Z',
    acknowledged: false
  },
  {
    id: '4',
    type: 'inventory',
    severity: 'medium',
    message: '5 weapons in NMC status require immediate attention',
    timestamp: '2024-02-04T18:00:00Z',
    acknowledged: false
  },
  {
    id: '5',
    type: 'overdue',
    severity: 'high',
    message: 'M16-007890 maintenance overdue by 7 days',
    timestamp: '2024-02-04T16:30:00Z',
    acknowledged: true
  },
  {
    id: '6',
    type: 'security',
    severity: 'low',
    message: 'Multiple failed login attempts from terminal 3',
    timestamp: '2024-02-04T14:45:00Z',
    acknowledged: false
  },
  {
    id: '7',
    type: 'maintenance',
    severity: 'critical',
    message: 'M203-445569 safety mechanism failure - immediate action required',
    timestamp: '2024-02-04T12:20:00Z',
    acknowledged: false
  },
  {
    id: '8',
    type: 'inventory',
    severity: 'low',
    message: 'Quarterly inventory count scheduled for next week',
    timestamp: '2024-02-04T10:00:00Z',
    acknowledged: true
  }
];

export const maintenanceItems: MaintenanceItem[] = [
  {
    id: '1',
    weaponId: '11',
    serialNumber: 'M4-001235',
    type: 'M4 Carbine',
    maintenanceType: 'repair',
    priority: 'medium',
    scheduledDate: '2024-02-06',
    estimatedCompletion: '2024-02-08',
    technician: 'SPC Rodriguez',
    description: 'Trigger mechanism adjustment and cleaning',
    status: 'in-progress'
  },
  {
    id: '2',
    weaponId: '35',
    serialNumber: 'M240-009876',
    type: 'M240B',
    maintenanceType: 'repair',
    priority: 'critical',
    scheduledDate: '2024-02-02',
    estimatedCompletion: '2024-02-12',
    technician: 'SSG Thompson',
    description: 'Barrel replacement and firing pin repair',
    status: 'in-progress'
  },
  {
    id: '3',
    weaponId: '12',
    serialNumber: 'M4-001236',
    type: 'M4 Carbine',
    maintenanceType: 'inspection',
    priority: 'low',
    scheduledDate: '2024-02-09',
    estimatedCompletion: '2024-02-09',
    technician: 'CPL Davis',
    description: 'Optics calibration and zeroing',
    status: 'pending'
  },
  {
    id: '4',
    weaponId: '18',
    serialNumber: 'M16-007890',
    type: 'M16A4',
    maintenanceType: 'repair',
    priority: 'high',
    scheduledDate: '2024-02-04',
    estimatedCompletion: '2024-02-11',
    technician: 'SSG Thompson',
    description: 'Gas system repair and bolt carrier group replacement',
    status: 'in-progress'
  },
  {
    id: '5',
    weaponId: '1',
    serialNumber: 'M4-001234',
    type: 'M4 Carbine',
    maintenanceType: 'scheduled',
    priority: 'low',
    scheduledDate: '2024-04-15',
    estimatedCompletion: '2024-04-15',
    technician: 'TBD',
    description: 'Quarterly maintenance inspection',
    status: 'pending'
  },
  {
    id: '6',
    weaponId: '26',
    serialNumber: 'M249-005683',
    type: 'M249 SAW',
    maintenanceType: 'repair',
    priority: 'medium',
    scheduledDate: '2024-02-07',
    estimatedCompletion: '2024-02-10',
    technician: 'SPC Martinez',
    description: 'Feed tray cover alignment and adjustment',
    status: 'pending'
  },
  {
    id: '7',
    weaponId: '33',
    serialNumber: 'M240-009875',
    type: 'M240B',
    maintenanceType: 'repair',
    priority: 'medium',
    scheduledDate: '2024-02-08',
    estimatedCompletion: '2024-02-12',
    technician: 'CPL Johnson',
    description: 'Trigger housing group adjustment',
    status: 'pending'
  },
  {
    id: '8',
    weaponId: '47',
    serialNumber: 'M9-112243',
    type: 'M9 Pistol',
    maintenanceType: 'repair',
    priority: 'low',
    scheduledDate: '2024-02-10',
    estimatedCompletion: '2024-02-10',
    technician: 'PFC Wilson',
    description: 'Slide action cleaning and lubrication',
    status: 'pending'
  },
  {
    id: '9',
    weaponId: '54',
    serialNumber: 'M16-007895',
    type: 'M16A4',
    maintenanceType: 'repair',
    priority: 'medium',
    scheduledDate: '2024-02-11',
    estimatedCompletion: '2024-02-14',
    technician: 'SPC Rodriguez',
    description: 'Handguard tightening and front sight adjustment',
    status: 'pending'
  },
  {
    id: '10',
    weaponId: '59',
    serialNumber: 'M203-445568',
    type: 'M203 Grenade Launcher',
    maintenanceType: 'repair',
    priority: 'medium',
    scheduledDate: '2024-02-12',
    estimatedCompletion: '2024-02-14',
    technician: 'SSG Brown',
    description: 'Trigger mechanism lubrication and adjustment',
    status: 'pending'
  },
  {
    id: '11',
    weaponId: '17',
    serialNumber: 'M4-001271',
    type: 'M4 Carbine',
    maintenanceType: 'repair',
    priority: 'critical',
    scheduledDate: '2024-01-30',
    estimatedCompletion: '2024-02-09',
    technician: 'SSG Thompson',
    description: 'Barrel replacement due to excessive wear',
    status: 'in-progress'
  },
  {
    id: '12',
    weaponId: '28',
    serialNumber: 'M249-005685',
    type: 'M249 SAW',
    maintenanceType: 'repair',
    priority: 'high',
    scheduledDate: '2024-02-01',
    estimatedCompletion: '2024-02-13',
    technician: 'CPL Anderson',
    description: 'Gas regulator replacement and barrel inspection',
    status: 'in-progress'
  },
  {
    id: '13',
    weaponId: '49',
    serialNumber: 'M9-112245',
    type: 'M9 Pistol',
    maintenanceType: 'repair',
    priority: 'critical',
    scheduledDate: '2024-01-25',
    estimatedCompletion: '2024-02-15',
    technician: 'SSG Thompson',
    description: 'Barrel replacement and frame repair',
    status: 'overdue'
  },
  {
    id: '14',
    weaponId: '60',
    serialNumber: 'M203-445569',
    type: 'M203 Grenade Launcher',
    maintenanceType: 'repair',
    priority: 'critical',
    scheduledDate: '2024-01-20',
    estimatedCompletion: '2024-02-10',
    technician: 'SSG Brown',
    description: 'Barrel obstruction removal and safety mechanism repair',
    status: 'overdue'
  },
  {
    id: '15',
    weaponId: '22',
    serialNumber: 'M249-005679',
    type: 'M249 SAW',
    maintenanceType: 'scheduled',
    priority: 'low',
    scheduledDate: '2024-04-18',
    estimatedCompletion: '2024-04-18',
    technician: 'TBD',
    description: 'Quarterly maintenance inspection',
    status: 'pending'
  }
];

export const readinessData = [
  { name: 'FMC', value: 60, color: '#10B981' },
  { name: 'PMC', value: 23, color: '#F59E0B' },
  { name: 'NMC', value: 17, color: '#EF4444' }
];

export const trendsData = [
  { date: 'Jan 30', fmc: 58, pmc: 25, nmc: 17 },
  { date: 'Jan 31', fmc: 59, pmc: 24, nmc: 17 },
  { date: 'Feb 01', fmc: 61, pmc: 22, nmc: 17 },
  { date: 'Feb 02', fmc: 62, pmc: 21, nmc: 17 },
  { date: 'Feb 03', fmc: 60, pmc: 23, nmc: 17 },
  { date: 'Feb 04', fmc: 59, pmc: 24, nmc: 17 },
  { date: 'Feb 05', fmc: 60, pmc: 23, nmc: 17 }
];

export const inventoryData = [
  { type: 'M4 Carbine', count: 20, ready: 10 },
  { type: 'M249 SAW', count: 8, ready: 5 },
  { type: 'M240B', count: 8, ready: 4 },
  { type: 'M9 Pistol', count: 13, ready: 10 },
  { type: 'M16A4', count: 7, ready: 4 },
  { type: 'M203 GL', count: 4, ready: 2 }
];