import React from "react";
import { Card } from "primereact/card";
import { formatDate } from "../utils/helper";

const OrdersCard = ({ order }) => {
  const data = order.raw_payload;

  const cartIcon = (
    <i
      className="pi pi-shopping-cart mr-1"
      style={{ color: "var(--primary-color)", fontSize: "1.2rem" }}
    />
  );
  const truckIcon = (
    <i
      className="pi pi-truck mr-1"
      style={{ color: "var(--primary-color)", fontSize: "1.2rem" }}
    />
  );
  const bagIcon = (
    <i
      className="pi pi-shopping-bag mr-1"
      style={{ color: "var(--primary-color)" }}
    />
  );

  const header = (
    <div className="flex justify-between items-center px-4 py-2">
      <div>
        <div className="text-sm font-semibold">{data.code}</div>
        <div className="text-3xl font-bold text-pink-600">{data.token}</div>
      </div>
      <div className="text-xs text-gray-500 -mt-8">
        {formatDate(data.createdAt)}
      </div>
    </div>
  );

  const footer = (
    <div className="flex justify-end items-end py-2">
      <img src="/foodpanda.jpg" alt="Logo" className="h-10 w-10 hover:cursor-pointer transition-transform duration-300 transform hover:-translate-y-1" />
    </div>
  )

  return (
    <div className="order-card-container">
      <Card
        header={header}
        footer={footer}
        className="w-full border-4 border-pink-500 rounded-3xl shadow-lg p-0"
      >
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
            <div className="flex items-center text-lg text-pink-600 font-bold">
              {cartIcon}
              Order summary
            </div>

            {data.products.map((product, index) => (
              <div key={index} className="mb-2 ml-6">
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
            <div className="flex items-center text-pink-600 font-bold text-md -mt-2">
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
                {/* {data.delivery.expectedDeliveryTime || data.delivery.riderPickupTime} */}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default OrdersCard;
