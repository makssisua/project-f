import React from 'react'

interface Props {
  activeTab: string,
  onTabClick: Function
};

function AdminTabs({activeTab = 'tab1', onTabClick}: Props): JSX.Element {
  return (
    <ul className="flex flex-wrap justify-center -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
      <li className="mr-2">
        <span 
          onClick={() => onTabClick('tab1')}
          className={(activeTab === 'tab1' ? 'text-blue-600 border-blue-600 border-b-2 ' : 'border-transparent hover:text-gray-600 hover:border-gray-300 border-b-2 ') + "cursor-pointer inline-flex p-4 rounded-t-lg group"} 
        >
          <svg aria-hidden="true" className={(activeTab === 'tab1' ? 'text-blue-600' : 'text-gray-400') + "w-5 h-5 mr-2 dark:text-blue-500"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
          Тренування
        </span>
      </li>
      <li className="mr-2">
        <span
          onClick={() => onTabClick('tab2')}
          className={(activeTab === 'tab2' ? 'text-blue-600 border-blue-600 border-b-2 ' : 'border-transparent hover:text-gray-600 hover:border-gray-300 border-b-2 ') + "cursor-pointer inline-flex p-4 rounded-t-lg group"}
        >
          <svg aria-hidden="true" className={(activeTab === 'tab2' ? 'text-blue-600' : 'text-gray-400') + "w-5 h-5 mr-2 dark:text-blue-500"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
          Користувачі
        </span>
      </li>
      <li className="mr-2">
        <span
          onClick={() => onTabClick('tab3')}
          className={(activeTab === 'tab3' ? 'text-blue-600 border-blue-600 border-b-2 ' : 'border-transparent hover:text-gray-600 hover:border-gray-300 border-b-2 ') + "cursor-pointer inline-flex p-4 rounded-t-lg group"}
        >
          <svg aria-hidden="true" className={(activeTab === 'tab3' ? 'text-blue-600' : 'text-gray-400') + "w-5 h-5 mr-2 dark:text-blue-500"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
          Марафон
        </span>
      </li>
      <li className="mr-2">
        <span
          onClick={() => onTabClick('tab4')}
          className={(activeTab === 'tab4' ? 'text-blue-600 border-blue-600 border-b-2 ' : 'border-transparent hover:text-gray-600 hover:border-gray-300 border-b-2 ') + "cursor-pointer inline-flex p-4 rounded-t-lg group"}
        >
          <svg aria-hidden="true" className={(activeTab === 'tab4' ? 'text-blue-600' : 'text-gray-400') + "w-5 h-5 mr-2 dark:text-blue-500"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path></svg>
          Повідомлення
        </span>
      </li>
    </ul>
  )
}

export default AdminTabs