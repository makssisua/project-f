import React from 'react'

interface Props {
  activeTab: string,
}

function AdminTabContentComponent({ activeTab }: Props) {
  switch (activeTab) {
    case 'tab1':
      return (<div>Tab1Content</div>)
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