import Todo from '@/components/Apps/Todo'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import React from 'react'

const page = () => {
  return (
    <DefaultLayout>
        <Todo />
    </DefaultLayout>
  )
}

export default page