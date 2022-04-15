import React, { useState } from 'react'
import { Selected } from '../store/Selected';
import PageRoutes from './PageRoutes';
import PostHeader from '../components/PostHeader';

export default function Dashboard() {

  console.log('RENDER DASHBOARD')
  const [fetchFlag, setFetchflag] = useState(true);
  const [clickedItemId, setClickedItemId] = useState(0)


  const handleClickedItem = (id) => {
    setClickedItemId(id)
  }

  const changeFetchFlag = () => {
    setFetchflag(!fetchFlag)
  }

  return (
    <React.Fragment>
      <PostHeader />{/* Top Nav Bar */}
      <div className='container'>
        <br/>
      <PageRoutes /> {/* Route and Component Linkage here - no more components add here*/}
      </div>
      
    </React.Fragment>
  
  )
}
