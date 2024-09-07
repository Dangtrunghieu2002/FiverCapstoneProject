import React from 'react'
import InforDetail from '../../components/UserDetailComponent/InforDetail'
import ContentDetail from '../../components/UserDetailComponent/ContentDetail'
const UserDetailPage = () => {
  return (
    <div className='container py-10 px-5 sm:px-3 lg:px-0 overflow-scroll scrollbar-hide'>
        <div className='flex gap-20'>
            <div className='ml-5 w-[30%] py-5 px-7 box-shadow'>
                <InforDetail/>
            </div>
            <div className='w-[60%] h-[300px] 00px pl-10'>
                <ContentDetail />
            </div>
        </div>
    </div>
  )
}

export default UserDetailPage