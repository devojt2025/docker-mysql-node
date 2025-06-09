import React from 'react'

const FPPlaceholderCard = () => {
    return (
        <div className="card card-border border-4 border-secondary w-full animate-pulse">
            <div className="card-body">
                {/* Header */}
                <div className="card-title flex justify-between items-center">
                    <div>
                        <div className="skeleton h-4 w-24 mb-2"></div>
                        <div className="skeleton h-8 w-36"></div>
                    </div>
                    <div className="skeleton h-4 w-24 -mt-8"></div>
                </div>

                {/* Customer Info */}
                <div className="font-semibold mb-2 pt-0 text-sm">
                    <div className="flex justify-between">
                        <div>
                            <div className="text-gray-500"></div>
                            <div className="skeleton h-4 w-36"></div>
                        </div>
                        <div>
                            <div className="text-gray-500"></div>
                            <div className="skeleton h-4 w-24"></div>
                        </div>
                    </div>

                    {/* Customer Comment */}
                    <div className="mt-2 border border-gray-400 rounded p-2 bg-gray-50 text-xs">
                        <strong></strong>
                        <div className="skeleton h-4 w-full mt-1"></div>
                    </div>

                    {/* Order Summary */}
                    <div className="mt-2">
                        <div className="flex items-center text-lg text-pink-600 font-bold mb-2">
                            <div className="skeleton h-5 w-5 rounded-full mr-2"></div>
                            <div className="skeleton h-5 w-32"></div>
                        </div>

                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="mb-2 ml-6">
                                <div className="skeleton h-4 w-3/4 mb-1"></div>
                                <div className="skeleton h-3 w-1/2 ml-4"></div>
                            </div>
                        ))}
                    </div>

                    {/* Totals & Payment */}
                    <div className="mt-2 border-t border-t-gray-400 pt-2 text-sm">
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-500"></span>
                            <div className="skeleton h-4 w-20"></div>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500"></span>
                            <div className="skeleton h-4 w-28"></div>
                        </div>
                    </div>

                    {/* Delivery Info */}
                    <div className="mt-4 border-t border-t-gray-400 flex items-center justify-between">
                        <div className="flex items-center text-lg text-pink-600 font-bold">
                            <div className="skeleton h-5 w-5 rounded-full mr-2"></div>
                            <div className="skeleton h-5 w-24"></div>
                        </div>
                        <div className="text-right pt-2">
                            <div className="text-gray-500"></div>
                            <div className="skeleton h-4 w-32 mt-1"></div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end items-center gap-4 mt-4">
                    <div className="skeleton h-10 w-24 rounded"></div>
                    <div className="skeleton h-10 w-24 rounded"></div>
                </div>
            </div>
        </div>
    )
}

export default FPPlaceholderCard