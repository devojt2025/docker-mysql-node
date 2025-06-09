import React from 'react'
import { useLocation } from 'react-router-dom'
import { formatDate } from '../../utils/helper'
import { ShoppingCart, TruckIcon, ShoppingBag } from 'lucide-react'

const GrabOrderCard = ({ order }) => {
  const location = useLocation()
  const data = order?.raw_payload
  const iconColor = '#4CAF50'

  const cartIcon = (
    <ShoppingCart
      className="mr-1"
      style={{ color: iconColor, fontSize: '1.2rem' }}
    />
  )

  const truckIcon = (
    <TruckIcon
      className="mr-1"
      style={{ color: iconColor, fontSize: '1.2rem' }}
    />
  )

  const bagIcon = (
    <ShoppingBag
      className="mr-1"
      style={{ color: iconColor, fontSize: '1.2rem' }}
    />
  )

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
    <div className="card card-border border-4 border-success text-light w-full">
      <div className="card-body">
        <div className="card-title flex justify-between items-center">
          <div>
            <div className="text-sm font-semibold">{data?.orderID || 'N/A'}</div>
            <div className="text-3xl font-bold text-[#4CAF50]">
              {data?.shortOrderNumber || 'N/A'}
            </div>
          </div>
          <div className="text-base -mt-8">
            {formatDate(data?.orderTime) || 'N/A'}
          </div>
        </div>

        <div className="font-semibold mb-2 pt-0 text-sm">
          <div className="flex justify-between">
            <div>
              <div className="text-gray-500">Name:</div>
              <div className="font-bold">{data?.receiver?.name || 'N/A'}</div>
            </div>
            <div>
              <div className="text-gray-500">Phone:</div>
              <div className="font-bold">
                {data?.receiver?.phones?.[0] || 'N/A'}
              </div>
            </div>
          </div>

          <div className="mt-2">
            <div className="flex items-center text-lg text-[#4CAF50] font-bold">
              {cartIcon}
              Order summary
            </div>

            {/* Add product rendering when structure is known */}
          </div>

          <div className="mt-2 border-t border-t-gray-400 pt-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Total:</span>
              <span className="font-bold">₱ {data?.price?.subtotal || 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Payment Type:</span>
              <span className="font-bold">{data?.paymentType || 'N/A'}</span>
            </div>
          </div>

          <div className="mt-4 border-t border-t-gray-400 flex items-center justify-between">
            <div className="flex items-center text-lg text-[#4CAF50] font-bold">
              {deliveryIcon}
              <span className="ml-1">{deliveryLabel}</span>
            </div>
            <div className="text-right text-gray-700 pt-2">
              <div className="text-gray-500">Expected Delivery Time:</div>
              <div className="font-bold">
                {formatDate(data?.orderReadyEstimation?.estimatedOrderReadyTime) || 'N/A'}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center gap-4">
          <div className="card-actions justify-end">
            <button className="btn text-white btn-success">Accept</button>
          </div>
          <div className="card-actions justify-end">
            <button className="btn text-white btn-error">Reject</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GrabOrderCard
