import React, { useState, useEffect } from "react";
import socket from "./socket";
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from "./redux/action/orderActions";
import Card from "./Components/Card";


function App() {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.orders);
  useEffect(() => {
    socket.on("new_order", (data) => {
      console.log("order token: ", data)
      dispatch(getOrders());
    })
  }, [socket])
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch])
  useEffect(() => {
    console.log("Orders: ", orders);
  }, [orders])
  return (
    <>
      <div className="flex flex-col gap-4 justify-between h-[calc(100vh-2rem)] border p-4 m-4">
        <div className="border border-black h-52">panel statuses</div>
        <div className="border flex-1 p-4 overflow-y-auto border-black">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {orders && orders.map((order, index) => (
              <Card key={index} order={order} />
            ))}
          </div>

        </div>



      </div>
    </>
  );
}

export default App;
