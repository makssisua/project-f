import React, { ReactElement } from 'react'

function UserStatusIndicator(): ReactElement {
  const userPaymentStatus = true;
  return (
    <div>
      { userPaymentStatus 
        ? <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-bold px-2.5 py-2 rounded-full dark:bg-green-900 dark:text-green-300">
          <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
          Учасник марафону
        </span>
        : <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-bold px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
          <span className="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
          Гість
        </span>
      }
    </div>
  )
}

export default UserStatusIndicator