import React from 'react';
import {  Bell, User, Settings, Home } from 'lucide-react';
import logo from '../../logo.png';

interface HeaderProps {
  alertCount: number;
}

const Header: React.FC<HeaderProps> = ({ alertCount }) => {
  return (
    <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2  ">
            <img src={logo} alt="Armory Logo" className="w-[100px]" />
            <div>
              <h1 className="text-2xl font-bold text-white">Armory Dashboard</h1>
              {/* <p className="text-sm text-slate-400">Real-time Operations Center</p> */}
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-right text-sm text-slate-300"> 
            <p>Last Update: {new Date().toLocaleTimeString()}</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
              <Bell className="h-5 w-5" />
              {alertCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {alertCount}
                </span>
              )}
            </button>
            
            <button onClick={() => 
              window.open('https://ise-aip.intelligentso.com/', '_blank')
            } className="p-2 text-slate-400 hover:text-white transition-colors">
              <Home className="h-5 w-5" />
            </button>
            
          
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;