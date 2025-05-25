import KanbanBoardPage from '@/components/Apps/KanbanBoardPage'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import React from 'react'

const page = () => {
  return (
    <DefaultLayout>
        <KanbanBoardPage />
    </DefaultLayout>
  )
}

export default page