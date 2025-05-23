import React from 'react'

const Card = ({order}) => {
  return (
    <div className="h-96 w-full border border-pink-500 flex items-center justify-center">{order.raw_payload.token}</div>
  )
}

export default Card