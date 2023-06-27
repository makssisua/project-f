import React, { useState } from 'react'
import TrainingDatePicker from '../DatePicker';

function CreateTraining() {
  const [addTraininVisible, setAddTraininVisible] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [trainingState, setTrainingState] = useState({
    title: '',
    description: '',
    videoUrl: ''
  });

  const onChangeHandler = (e: any) => {
    const fieldName = e.target.name
    setTrainingState({
      ...trainingState,
      [fieldName]: e.target.value
    })
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault()
    // setAddTraininVisible(false);
    console.log({...trainingState, startDate})
  }

  return (
    <>
      {addTraininVisible
          ?<form>
            <div className="relative z-0 w-full mb-6 group">
              <input
                value={trainingState.title}
                onChange={onChangeHandler}
                type="text"
                name="title"
                id="title"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label htmlFor="title" className="truncate peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Заголовок ( назва тренування )
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                value={trainingState.videoUrl}
                onChange={onChangeHandler}
                type="text"
                name="videoUrl"
                id="videoUrl"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label htmlFor="videoUrl" className="truncate peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Посилання на відео тренування
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <textarea
                onChange={onChangeHandler}
                value={trainingState.description}
                id="description"
                name="description"
                rows={4}
                className="outline-0 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Опис тренування"
              >
              </textarea>
            </div>
            <div className="flex flex-col relative z-0 w-full mb-6 group">
              <span className='pb-1 text-gray-500 text-sm '>День тренування</span>
              <TrainingDatePicker startDate={startDate} setStartDate={setStartDate} />
            </div>
            <button onClick={onSubmitHandler} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Створити
            </button>
          </form>
        : <button
            onClick={() => setAddTraininVisible(true)}
            type="submit" 
            className="block m-auto items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Додати тренування
        </button>
      }
    </>
  )
}

export default CreateTraining