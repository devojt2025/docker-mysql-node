import React from 'react';
import {
  LuCircleCheckBig,
  LuClipboardList,
  LuTruck,
  LuCircleX,
} from 'react-icons/lu';

const iconMap = {
  accepted: { icon: <LuCircleCheckBig />, color: 'text-green-500' },
  prepared: { icon: <LuClipboardList />, color: 'text-blue-500' },
  pickedup: { icon: <LuTruck />, color: 'text-yellow-500' },
  rejected: { icon: <LuCircleX />, color: 'text-red-500' },
};

const StatsCard = ({ status, title, value }) => {
  const { icon, color } = iconMap[status.toLowerCase()] || {};

  return (
    <div className="bg-white border border-pink-400 shadow-md rounded-2xl p-5 w-full  hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg text-pink-600 font-bold text-gray-500">{title}</h3>
          <p className="text-3xl font-semibold text-gray-800 mt-1">{value}</p>
        </div>
        <div className={`text-3xl ${color}`}>{icon}</div>
      </div>
    </div>
  );
};

export default StatsCard;
