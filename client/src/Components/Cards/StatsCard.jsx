import React from 'react';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();

  const isGrab = location.pathname.includes('/grab');
  const isFoodpanda = location.pathname.includes('/foodpanda');

  const baseTextColor = isGrab ? 'text-green-600' : 'text-pink-600';
  const baseBorderColor = isGrab ? 'border-green-400' : 'border-pink-400';
  const baseShadowHover = isGrab ? 'hover:shadow-green-400' : 'hover:shadow-pink-400';

  const { icon, color } = iconMap[status.toLowerCase()] || {};

  return (
    <div
      className={`bg-white border ${baseBorderColor} shadow-md rounded-2xl p-5 w-full hover:shadow-lg transition-shadow duration-300 ${baseShadowHover}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className={`text-lg font-bold ${baseTextColor} text-gray-500`}>{title}</h3>
          <p className="text-3xl font-semibold text-gray-800 mt-1">{value}</p>
        </div>
        <div className={`text-3xl ${color}`}>{icon}</div>
      </div>
    </div>
  );
};

export default StatsCard;
