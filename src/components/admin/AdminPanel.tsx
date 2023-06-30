import React, { useState } from 'react'
import AdminTabs from './AdminTabs'
import AdminTabContentComponent from './AdminTabContentComponent';


function AdminPanel() {
  const [currentTab, setCurrentTab] = useState('tab1');
  return (
    <div className='className="overflow-hidden max-h-full flex flex-col justify-center items-center  mx-5 w-screen bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-b border-gray-200'>
      <AdminTabs activeTab={currentTab} onTabClick={setCurrentTab} />
      <div className='pt-10 pb-10 max-w-lg w-full'>
        <AdminTabContentComponent activeTab={currentTab} />
      </div>
    </div>
  )
}

export default AdminPanel