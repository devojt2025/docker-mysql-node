import React from 'react'
import { useLocation } from 'react-router-dom';
import { formatDate } from '../../utils/helper';
import { ShoppingBag, ShoppingCart, TruckIcon } from 'lucide-react';

const SimpleCard = ({ order }) => {
    const data = order.raw_payload
    const location = useLocation();
    const currentPath = location.pathname.toLowerCase();

    const platform = order.platform || (currentPath.includes("foodpanda") ? "foodpanda" : currentPath.includes("grab") ? "grab" : "unknown");
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
    return (
        <div className={`card ${isFoodpanda ? 'bg-secondary text-secondary-content' : isGrab ? 'bg-success text-white' : 'bg-accent'} w-96`}>
            <div className="card-body">
                <div className="card-title flex justify-between items-center">
                    <div>
                        <div className="text-sm font-semibold">{data.code}</div>
                        <div className={`text-3xl font-bold text-white`}>
                            {data.token}
                        </div>
                    </div>
                    <div className="text-xs text-base -mt-8">
                        {formatDate(data.createdAt)}
                    </div>
                </div>
                <div className="font-semibold mb-2 pt-0 text-sm">
                    <div className="mt-4 border-t border-t-white flex items-center justify-between">
                        <div className={`flex items-center text-lg text-white font-bold`}>
                            {data.expeditionType &&
                                data.expeditionType.toLowerCase() === "delivery"
                                ? truckIcon
                                : bagIcon}
                            <span className="font-bold">
                                {data.expeditionType
                                    ? data.expeditionType.charAt(0).toUpperCase() +
                                    data.expeditionType.slice(1)
                                    : ""}
                            </span>
                        </div>
                        <div className="text-right text-white pt-2">
                            <div className="text-white">Expected Delivery Time:</div>
                            <div className="font-bold">
                                {new Intl.DateTimeFormat("en-US", {
                                    weekday: "long",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                }).format(
                                    new Date(
                                        data.delivery.expectedDeliveryTime ||
                                        data.delivery.riderPickupTime
                                    )
                                )}
                              
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

export default SimpleCard