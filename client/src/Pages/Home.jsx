import React from 'react'
import OrderCard from '../Components/Cards/OrderCard'
import placeholder from '../assets/placeholder.json'
import SimpleCard from '../Components/Cards/SimpleCard';

const ordersToDisplay = placeholder;
const Home = () => {
    return (
        <>
            <div className="flex flex-col gap-4 justify-between h-full p-4 " style={{overflowY: 'auto', overflowX: 'hidden'}}>
                <h2 className="text-xl font-bold">Foodpanda Orders</h2>
                <div className="flex p-4 border-black h-max" style={{overflowX: 'scroll', overflowY: 'hidden'}}>
                    <div className="flex h-full gap-6">
                        {/* Foodpanda Column */}
                        <div className="flex-1">

                            <div className="flex gap-4">
                                {ordersToDisplay.filter(order => order.platform === "foodpanda").map((order, index) => (
                                    <>
                                        <SimpleCard key={`fp-${index}`} order={order} />
                                    </>))}

                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="text-xl font-bold">Grab Orders</h2>
                <div className="flex p-4 border-black h-max" style={{overflowX: 'scroll', overflowY: 'hidden'}}>
                    <div className="flex h-full gap-6">
                        {/* Foodpanda Column */}
                        <div className="flex-1">

                            <div className="flex gap-4">
                                {ordersToDisplay.filter(order => order.platform === "grab").map((order, index) => (
                                    <>
                                        <SimpleCard key={`fp-${index}`} order={order} />
                                    </>))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home