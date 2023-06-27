import React from 'react'

function TrainingList() {
  return (
    
<div className="relative overflow-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
          <tr className="flex flex-wrap flex-col sm:flex-row justify-between items-center bg-white border-b border-t dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              25 червня 2023р.
            </th>
            <td className="px-6 py-4">
              Джампінг-фітнес
            </td>
            <td className="flex items-center px-6 py-4">
              <span className='pr-1'>Відео</span>
              <span className="flex w-3 h-3 bg-green-500 rounded-full" />
            </td>
            <td className="flex items-center px-6 py-4">
            <span className='pr-1'>Опис</span>
              <span className="flex w-3 h-3 bg-red-500 rounded-full" />
            </td>
          </tr>
          <tr className="flex flex-wrap flex-col sm:flex-row justify-between items-center bg-white border-b border-t dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              25 червня 2023р.
            </th>
            <td className="px-6 py-4">
              Джампінг-фітнес Джампінг-фітнес
            </td>
            <td className="flex items-center px-6 py-4">
              <span className='pr-1'>Відео</span>
              <span className="flex w-3 h-3 bg-green-500 rounded-full" />
            </td>
            <td className="flex items-center px-6 py-4">
            <span className='pr-1'>Опис</span>
              <span className="flex w-3 h-3 bg-red-500 rounded-full" />
            </td>
          </tr>
          <tr className="flex flex-wrap flex-col sm:flex-row justify-between items-center bg-white border-b border-t dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              25 червня 2023р.
            </th>
            <td className="px-6 py-4">
              Джампінг-фітнес Джампінг-фітнес
            </td>
            <td className="flex items-center px-6 py-4">
              <span className='pr-1'>Відео</span>
              <span className="flex w-3 h-3 bg-green-500 rounded-full" />
            </td>
            <td className="flex items-center px-6 py-4">
            <span className='pr-1'>Опис</span>
              <span className="flex w-3 h-3 bg-red-500 rounded-full" />
            </td>
          </tr>
        </tbody>
    </table>
</div>

  )
}

export default TrainingList