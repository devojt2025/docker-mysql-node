import React from 'react'

const GPlaceholderCard = () => {
    return (
        <div className="card card-border border-4 border-success text-light w-full">
            <div className="card-body">
                <div className="card-title flex justify-between items-center">
                    <div>
                        <div className="skeleton h-4 w-24 mb-1"></div>
                        <div className="skeleton h-6 w-32"></div>
                    </div>
                    <div className="skeleton h-4 w-24"></div>
                </div>

                <div className="font-semibold mb-2 pt-0 text-sm">
                    <div className="flex justify-between gap-4">
                        <div>
                            <div className="skeleton h-3 w-16 mb-1"></div>
                            <div className="skeleton h-4 w-28"></div>
                        </div>
                        <div>
                            <div className="skeleton h-3 w-16 mb-1"></div>
                            <div className="skeleton h-4 w-24"></div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center text-lg font-bold gap-2">
                            <div className="skeleton h-5 w-5 rounded-full"></div>
                            <div className="skeleton h-5 w-32"></div>
                        </div>

                        <div className="mt-2 space-y-2 ml-6">
                            <div className="skeleton h-4 w-48"></div>
                            <div className="skeleton h-4 w-32"></div>
                        </div>
                    </div>

                    <div className="mt-4 border-t border-t-gray-400 pt-2 text-sm space-y-2">
                        <div className="flex justify-between">
                            <div className="skeleton h-3 w-16"></div>
                            <div className="skeleton h-4 w-20"></div>
                        </div>
                        <div className="flex justify-between">
                            <div className="skeleton h-3 w-20"></div>
                            <div className="skeleton h-4 w-24"></div>
                        </div>
                    </div>

                    <div className="mt-4 border-t border-t-gray-400 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="skeleton h-5 w-5 rounded-full"></div>
                            <div className="skeleton h-4 w-32"></div>
                        </div>
                        <div className="text-right pt-2 space-y-1">
                            <div className="skeleton h-3 w-36"></div>
                            <div className="skeleton h-4 w-28"></div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end items-center gap-4 mt-4">
                    <div className="skeleton h-10 w-24 rounded"></div>
                    <div className="skeleton h-10 w-24 rounded"></div>
                </div>
            </div>
        </div>
    )
}

export default GPlaceholderCard