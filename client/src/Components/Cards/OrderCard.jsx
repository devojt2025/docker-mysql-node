import React from 'react'
import { useLocation } from 'react-router-dom'
import { formatDate } from '../../utils/helper'
import { ShoppingCart, TruckIcon, ShoppingBag } from 'lucide-react'
const OrderCard = ({ order }) => {
    const location = useLocation()
    const data = order.raw_payload;
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
            style={{ color: iconColor, fontSize: "1.2rem" }} />
    );

    const truckIcon = (
        <TruckIcon
            className="pi pi-truck mr-1"
            style={{ color: iconColor, fontSize: "1.2rem" }}
        />
    );
    const bagIcon = (
        <ShoppingBag
            className="pi pi-truck mr-1"
            style={{ color: iconColor, fontSize: "1.2rem" }}
        />
    );
    return (
        <div className={`card card-border border-4 ${isFoodpanda ? "border-secondary" : isGrab ? "border-success" : "border-base"} text-light w-96`}>

            <div className="card-body">
                <div className="card-title flex justify-between items-center">
                    <div>
                        <div className="text-sm font-semibold">{data.code}</div>
                        <div className={`text-3xl font-bold ${isFoodpanda ? "text-secondary" : isGrab ? "text-success" : "text-base"}`}>
                            {data.token}
                        </div>
                    </div>
                    <div className="text-xs text-base -mt-8">
                        {formatDate(data.createdAt)}
                    </div>
                </div>

                <div className="font-semibold mb-2 pt-0 text-sm">
                    <div className="flex justify-between">
                        <div>
                            <div className="text-gray-500">Name:</div>
                            <div className="font-bold">
                                {data.customer.firstName} {data.customer.lastName}
                            </div>
                        </div>
                        <div>
                            <div className="text-gray-500">Phone:</div>
                            <div className="font-bold">{data.customer.mobilePhone}</div>
                        </div>
                    </div>
                    <div className="mt-2 border border-gray-400 rounded p-2 bg-gray-50 text-xs">
                        <strong>Customer comment:</strong>
                        <div className="text-gray-700">{data.comments.customerComment}</div>
                    </div>
                    <div className="mt-2">
                        <div className={`flex items-center text-lg ${isFoodpanda ? "text-pink-600" : isGrab ? "text-green-600" : "text-gray-600"} font-bold`}>
                            {cartIcon}
                            Order summary
                        </div>

                        {data.products.map((product, index) => (
                            <div key={index} className="mb-2 ml-6">
                                <div className="flex justify-between font-bold">
                                    <span>{product.quantity ? product.quantity : '1'}x {product.name}</span>
                                    <span>₱ {product.unitPrice}</span>
                                </div>
                                {product.selectedToppings &&
                                    product.selectedToppings.map((topping, i) => (
                                        <div key={i} className="flex justify-between text-sm ml-4">
                                            <span className="text-gray-500">
                                                {topping.quantity}x {topping.name}
                                            </span>
                                            <span className="font-bold">₱ {topping.price}</span>
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </div>
                    <div className="mt-2 border-t border-t-gray-400 pt-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-500">Total:</span>
                            <span className="font-bold">₱ {data.price.grandTotal}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">Payment Type:</span>
                            <span className="font-bold">{data.payment.type}</span>
                        </div>
                    </div>
                    <div className="mt-4 border-t border-t-gray-400 flex items-center justify-between">
                        <div className={`flex items-center text-lg ${isFoodpanda ? "text-pink-600" : isGrab ? "text-green-600" : "text-gray-600"} font-bold`}>
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
                        <div className="text-right text-gray-700 pt-2">
                            <div className="text-gray-500">Expected Delivery Time:</div>
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
                    <button className="btn text-white btn-success">Accept</button>
                </div>
            </div>

        </div>
    )
}

export default OrderCard