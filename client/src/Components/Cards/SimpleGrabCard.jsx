import React from 'react'
import { useLocation } from 'react-router-dom';
import { formatDate } from '../../utils/helper';
import { ShoppingBag, ShoppingCart, TruckIcon } from 'lucide-react';

const SimpleGrabCard = ({ order, platform }) => {
    const data = order.raw_payload
    const location = useLocation();
    const currentPath = location.pathname.toLowerCase();


    const isFoodpanda = platform === "foodpanda";
    const isGrab = platform === "grab";


    const iconColor = isFoodpanda
        ? "#E91E63"
        : isGrab
            ? "#4CAF50"
            : "var(--primary-color)"; // fallback
    const cartIcon = (
        <ShoppingCart
            className="mr-1"
            style={{ color: "white", fontSize: "1.2rem" }} />
    );

    const truckIcon = (
        <TruckIcon
            className="pi pi-truck mr-1"
            style={{ color: "white", fontSize: "1.2rem" }}
        />
    );
    const bagIcon = (
        <ShoppingBag
            className="pi pi-truck mr-1"
            style={{ color: "white", fontSize: "1.2rem" }}
        />
    );
    const orderType = data?.featureFlags?.orderType?.toLowerCase()
    const deliveryLabel =
        orderType === 'deliveredbygrab'
            ? 'Delivered by Grab'
            : orderType === 'deliveredbyrestaurant'
                ? 'Delivered by Restaurant'
                : orderType === 'takeaway'
                    ? 'Take Away'
                    : 'N/A'

    const deliveryIcon =
        orderType === 'deliveredbygrab' || orderType === 'deliveredbyrestaurant'
            ? truckIcon
            : orderType === 'takeaway'
                ? bagIcon
                : null

    return (
        <div className={`card ${isFoodpanda ? 'bg-secondary text-secondary-content' : isGrab ? 'bg-success text-white' : 'bg-accent'} w-96`}>
            <div className="card-body">
                <div className="card-title flex justify-between items-center">
                    <div>
                        <div className="text-sm font-semibold">{data ? data?.orderID : 'N/A'}</div>
                        <div className={`text-3xl font-bold text-white`}>
                            {data ? data?.shortOrderNumber : 'N/A'}
                        </div>
                    </div>
                    <div className="text-base -mt-8">
                        {data && data.orderTime ? formatDate(data.orderTime) : 'N/A'}
                    </div>
                </div>
                <div className="font-semibold mb-2 pt-0 text-sm">
                    <div className="mt-4 border-t border-t-white flex items-center justify-between">
                        <div className="flex items-center text-lg font-bold w-1/2">
                            {deliveryIcon}
                            <span className="ml-1">{deliveryLabel}</span>
                        </div>
                        <div className="text-right text-white pt-2">
                            <div className="text-white">Expected Delivery Time:</div>
                            <div className="font-bold">
                                {formatDate(data?.orderReadyEstimation?.estimatedOrderReadyTime) || 'N/A'}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-soft btn-primary">View Order</button>
                </div>
            </div>
        </div>
    )
}

export default SimpleGrabCard