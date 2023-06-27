import React from 'react'
import CreateTraining from './training/CreateTraining'

interface Props {
  activeTab: string,
}

function AdminTabContentComponent({ activeTab }: Props) {
  switch (activeTab) {
    case 'tab1':
      return (
        <CreateTraining />
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