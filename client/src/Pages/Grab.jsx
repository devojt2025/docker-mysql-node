import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../redux/action/grabActions'
import StatsCard from '../Components/Cards/StatsCard'
import socket from '../socket'
import OrderCard from '../Components/Cards/OrderCard'
import GrabOrderCard from '../Components/Cards/GrabOrderCard'
import StatsPlaceholder from '../Components/Cards/StatsPlaceholder'
import GPlaceholderCard from '../Components/Cards/GPlaceholderCard'
import grabLogo from '../assets/images/grab.jpg'
const Grab = () => {
    const dispatch = useDispatch();
    const { orders, loading, error } = useSelector((state) => state.grab);
    useEffect(() => {
        const handleOrderReceived = (data) => {
            console.log("order token: ", data);
            toast.info("New Grab Order Received", {
                style: { backgroundColor: '#4CAF50', color: 'white' },
                icon: <img src={grabLogo} />,
            });
            dispatch(getOrders());
        };
        socket.off("grab_order_received");
        socket.on("grab_order_received", handleOrderReceived);

        return () => {
            socket.off("grab_order_received", handleOrderReceived);
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
                            <GPlaceholderCard key={index} />
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
                    {orders && orders.length > 0 ? (
                        orders.map((order, index) => (
                            <GrabOrderCard key={index} order={order} />
                        ))
                    ) : (
                        <p>No orders yet</p> // Optional: show nothing or loading text
                    )}
                </div>
            </div>
        </div>
    )
}

export default Grab