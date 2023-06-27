import React, { useState } from 'react'
import AdminTabs from './AdminTabs'
import AdminTabContentComponent from './AdminTabContentComponent';

function AdminPanel() {
  const [currentTab, setCurrentTab] = useState('tab1');
  return (
    <div className="flex flex-col justify-center items-center  mx-5 w-screen bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-b border-gray-200">
      <AdminTabs activeTab={currentTab} onTabClick={setCurrentTab} />
      <AdminTabContentComponent activeTab={currentTab} />
    </div>
  )
}

export default AdminPanel