import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../redux/action/orderActions";
import OrdersCard from "../Components/Card";
import StatsCard from "../Components/StatsCard";
import socket from "../socket";
import placeholder from '../assets/placeholder.json';

const ordersToDisplay  = placeholder;

const Home = () => {
  return (
<>
  <div className="flex flex-col gap-4 justify-between h-[calc(100vh-8rem)] border p-4 m-4">
    <div className="flex-1 p-4 border-black" style={{ height: '100%', overflowY: 'auto' }}>
      <div className="flex h-full gap-6">
        {/* Foodpanda Column */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-pink-600 mb-4">Foodpanda Orders</h2>
          <div className="grid grid-cols-2 gap-4">
            {ordersToDisplay
              .filter(order => order.platform === "foodpanda")
              .map((order, index) => (
                <OrdersCard key={`fp-${index}`} order={order} platform="foodpanda" />
              ))}
          </div>
        </div>

        <div className="w-px bg-gray-300" style={{ height: '100%' }}></div>

        {/* Grab Column */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-green-600 mb-4">Grab Orders</h2>
          <div className="grid grid-cols-2 gap-4">
            {ordersToDisplay
              .filter(order => order.platform === "grab")
              .map((order, index) => (
                <OrdersCard key={`grab-${index}`} order={order} platform="grab" />
              ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</>
  );
};

export default Home;
