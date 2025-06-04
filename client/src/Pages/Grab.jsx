import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../../frontend/src/redux/action/orderActions'
import OrdersCard from '../../../frontend/src/Components/Card'
import StatsCard from '../../../frontend/src/Components/StatsCard'
import socket from '../socket'
import OrderCard from '../Components/Cards/OrderCard'
const Grab = () => {
    const dispatch = useDispatch();
    const { orders, loading, error } = useSelector((state) => state.orders);
    useEffect(() => {
        socket.on("new_order", (data) => {
            console.log("order token: ", data);
            dispatch(getOrders());
        })
    }, [socket])
    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch])
    useEffect(() => {
        console.log("Orders: ", orders);
    }, [orders]);
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
                <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {orders &&
                        orders.map((order, index) => (
                            <OrderCard key={index} order={order} />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Grab