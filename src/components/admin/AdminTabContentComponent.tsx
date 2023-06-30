import React from 'react'
import CreateTraining from './training/CreateTraining'
import TrainingList from './training/TrainingList'

interface Props {
  activeTab: string,
}

function AdminTabContentComponent({ activeTab }: Props) {
  switch (activeTab) {
    case 'tab1':
      return (
        <>
          <div className='mb-10'>
            <CreateTraining />
          </div>
          <TrainingList />
        </>
      )
    case 'tab2':
      return (<div>Tab2Content</div>)
    case 'tab3':
      return (<div>Tab3Content</div>)
    case 'tab4':
      return (<div>Tab4Content</div>)
  };

  return <div>Щось піло не так</div>
};

export default AdminTabContentComponent