import React, { useState, useEffect } from 'react'
import placeholder from '../assets/placeholder.json'
import SimpleCard from '../Components/Cards/SimpleCard';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../redux/action/foodpandaActions';
import Loader from '../Components/Layout/Loader';
const ordersToDisplay = placeholder;
import socket from '../socket';
import { toast } from 'sonner';
import foodpandaLogo from '../assets/images/foodpanda.png'
const Home = () => {
    const dispatch = useDispatch();
    const { orders, count, loading, error } = useSelector((state) => state.foodpanda);
    useEffect(() => {
        socket.on("foodpanda_order_received", (data) => {
            console.log("order token: ", data);
            toast.info("New Foodpanda Order Received", {
                style: { backgroundColor: '#4E0A62', color: 'white' },
                icon: '🍔',
            })
            dispatch(getOrders());
        })
    }, [socket])
    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch])
    return (
        <>
            <div className="flex flex-col gap-4 justify-between h-full p-4 " style={{ overflowY: 'auto', overflowX: 'hidden' }}>
                <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-bold">Foodpanda Orders</h2>
                    <div className="badge badge-lg badge-secondary">{count}</div>
                </div>

                <div className="flex p-4 border-black h-max" style={{ overflowX: 'scroll', overflowY: 'hidden' }}>
                    <div className="flex h-full gap-6">
                        {/* Foodpanda Column */}
                        <div className="flex-1">
                            {loading ? <div className={`skeleton card w-96 h-54`}></div> :
                                <div className="flex gap-4">
                                    {orders.map((order, index) => (
                                        <>
                                            <SimpleCard key={`fp-${index}`} order={order} platform="foodpanda" />
                                        </>))}

                                </div>}
                        </div>
                    </div>
                </div>
                <h2 className="text-2xl font-bold">Grab Orders</h2>
                <div className="flex p-4 border-black h-max" style={{ overflowX: 'scroll', overflowY: 'hidden' }}>
                    <div className="flex h-full gap-6">
                        {/* Foodpanda Column */}
                        <div className="flex-1">

                            <div className="flex gap-4">
                                {ordersToDisplay.filter(order => order.platform === "grab").map((order, index) => (
                                    <>
                                        <SimpleCard key={`fp-${index}`} order={order} platform="grab" />
                                    </>))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary fixed bottom-4 right-4 z-50" onClick={() => toast.info("New Foodpanda Order Received", {
                style: { backgroundColor: '#f43098', color: 'white' },
                icon: <img src={foodpandaLogo} />,
            })}>
                Refresh Orders
            </button>
        </>
    )
}

export default Home