import React from "react";
import { Card } from "primereact/card";
// import { FaUtensils } from 'react-icons/fa'; // Food icon
// import { FaShoppingCart } from 'react-icons/fa'; // Order icon
// import { FaTruck } from 'react-icons/fa'; // Delivery icon

const OrdersCard = ({ order }) => {
  const data = order.raw_payload;

  const header = (
    <div className="flex justify-between items-center p-3">
      <div>
        <div className="text-md font-semibold">{data.code}</div>
        <div className="text-2xl font-bold text-pink-600">{data.token}</div>
      </div>
      <div className="text-sm text-gray-500">
        {new Date(data.created_at)
          .toLocaleString("sv-SE", { hour12: false })
          .replace("T", " ")}
      </div>
    </div>
  );

  return (
    <Card
      header={header}
      className="w-full border-4 border-pink-500 rounded-xl shadow-lg"
    >
      <div className="p-card-bodyfont-semibold mb-2 pt-0">
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

        <div className="mt-2 border border-gray-400 rounded p-2 bg-gray-50 text-sm">
          <strong>Customer comment:</strong>
          <div className="text-gray-700">{data.comments.customerComment}</div>
        </div>

        <div className="mt-4">
          <div className="flex items-center text-pink-600 font-bold mb-2">
            <span
              className="pi-shopping-cart mr-2"
              style={{ color: "var(--primary-color)" }}
            />
            Order summary
          </div>

          {data.products.map((product, index) => (
            <div key={index} className="mb-2 ml-4">
              <div className="flex justify-between font-bold">
                <span>1x {product.name}</span>
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

        <div className="mt-4 border-t border-t-gray-400 pt-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Total:</span>
            <span className="font-bold">₱ {data.price.grandTotal}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Payment Type:</span>
            <span className="font-bold">{data.payment.type}</span>
          </div>
        </div>

        <div className="mt-4 border-t border-t-gray-400 flex items-center justify-between text-sm">
          <div className="flex items-center text-pink-600 font-bold">
            <i
              className="pi-truck mr-2"
              style={{ color: "var(--primary-color)" }}
            />
            {data.expeditionType}
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
              {/* {data.delivery.expectedDeliveryTime || data.delivery.riderPickupTime} */}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default OrdersCard;
