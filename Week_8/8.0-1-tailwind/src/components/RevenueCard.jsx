/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react"
export const RevenueCard = ({
    title,
    orderCount,
    amount
})=>{
    return <div className=" bg-white shadow-md p-4">
        <div className="flex text-gray-700 ">
        <div className="flex">
                <div>
                    {title}
                </div>
                <div className=" ml-1  flex justify-center flex-col ">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
            </div>
        </div>

        </div>
        <div className=" flex justify-between pt-2 ">
            <div className="font-semibold text-2xl">
                ₹{amount}
            </div>
            {orderCount ? <div className="flex underline font-medium flex-col  justify-center ">
                <div className="flex">
                    <div className="text-blue-700">
                        {orderCount} order(s)
                    </div>
                    <div className=" mt-1  text-blue-700 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"strokeWidth="1.5" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    </div>
                </div>
            </div>:null}
        </div>
    </div>
}