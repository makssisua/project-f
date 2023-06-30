import React from 'react'
import TrainingItem from './TrainingItem'
import { useAppSelector } from '../../../store/hooks'

function TrainingList() {
  const { trainings, isLoading, isSuccess } = useAppSelector((state: GlobalState) => state.trainings);
  
  return (
    <div className="relative overflow-auto shadow-md sm:rounded-lg">
        {
          isLoading &&
            'Loading....'
        }
        {trainings.length !== 0 && isSuccess
          ? (
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <tbody>
                {trainings.map((training: Training) => {
                  return <TrainingItem
                    key={training.__id}
                    startDay={training.startDay} 
                    name={training.name} 
                    description={training.description} 
                    videoUrl={training.videoUrl} 
                  />
                })}
              </tbody>
            </table>
          )
          : 'Немає тренувань'
        }
    </div>
  )
}

export default TrainingList