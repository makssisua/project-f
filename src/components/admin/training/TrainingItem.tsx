import React from 'react'

interface Props {
  startDay: string,
  name: string,
  description: string,
  videoUrl: string,
  key: string
}


function TrainingItem({startDay, name, description, videoUrl, key}: Props) {

  const startDayName = new Date(startDay).toLocaleString('uk', {year: 'numeric', month: 'long', day: 'numeric'})
  
  return (
    <tr key={key} className="flex flex-wrap flex-col sm:flex-row justify-between items-center bg-white border-b border-t dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {startDayName}
      </th>
      <td className="px-6 py-4">
        {name}
      </td>
      <td className="flex items-center px-6 py-4">
        <span className='pr-1'>Відео</span>
        <span className={(videoUrl ? 'bg-green-500' : 'bg-red-500') + " flex w-3 h-3 rounded-full"} />
      </td>
      <td className="flex items-center px-6 py-4">
        <span className='pr-1'>Опис</span>
        <span className={(description ? 'bg-green-500' : 'bg-red-500') + " flex w-3 h-3 rounded-full"} />
      </td>
    </tr>
  )
}

export default TrainingItem