import React from 'react'

const StatsPlaceholder = () => {
    return (
        <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-5 w-full hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between">
                <div className="flex-1">
                    <div className="skeleton h-4 w-24 mb-2"></div>
                    <div className="skeleton h-6 w-32"></div>
                </div>
                <div className="skeleton h-10 w-10 rounded-full"></div>
            </div>
        </div>
    )
}

export default StatsPlaceholder