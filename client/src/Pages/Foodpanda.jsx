import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../redux/action/foodpandaActions'
import StatsCard from '../Components/Cards/StatsCard'
import socket from '../socket'
import OrderCard from '../Components/Cards/OrderCard'
import FPPlaceholderCard from '../Components/Cards/FPPlaceholderCard'
import StatsPlaceholder from '../Components/Cards/StatsPlaceholder'
import { toast } from 'sonner'
import foodpandaLogo from '../assets/images/foodpanda.png'
const Foodpanda = () => {
    const dispatch = useDispatch();
    const { orders, loading, error } = useSelector((state) => state.foodpanda);
    useEffect(() => {
        const handleFoodpandaOrderUpdate = (data) => {
            dispatch(getOrders());
        };
        socket.off("foodpanda_order_received", handleFoodpandaOrderUpdate);
        socket.on("foodpanda_order_received", handleFoodpandaOrderUpdate);

        return () => {
            socket.off("foodpanda_order_received", handleFoodpandaOrderUpdate);
        };
    }, [])
    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch])
    useEffect(() => {
        console.log("Orders: ", orders);
    }, [orders]);
    useEffect(() => {
        console.log("Component mounted");
        return () => console.log("Component unmounted");
    }, [])

    if (loading) {
        return (
            <div className="flex flex-col gap-4 justify-between p-4">
                <div className="w-full flex p-2 items-center justify-center border-black">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <StatsPlaceholder />
                        <StatsPlaceholder />
                        <StatsPlaceholder />
                        <StatsPlaceholder />
                    </div>
                </div>
                <div className="flex items-center justify-center p-4 overflow-y-auto border-black">
                    <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <FPPlaceholderCard key={index} />
                        ))}
                    </div>
                </div>
            </div>
        )

    }
    return (
        <div className="flex flex-col gap-4 justify-between p-4">
            <div className="w-full flex p-2 items-center justify-center border-black">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatsCard status="accepted" title="Accepted Orders" value={120} />
                    <StatsCard status="prepared" title="Prepared Orders" value={98} />
                    <StatsCard status="pickedup" title="Picked Up Orders" value={87} />
                    <StatsCard status="rejected" title="Rejected Orders" value={15} />
                </div>
            </div>
            <div className="flex items-center justify-center p-4 overflow-y-auto border-black">
                <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {orders &&
                        orders.map((order, index) => (
                            <OrderCard key={index} order={order} platform="foodpanda" />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Foodpanda