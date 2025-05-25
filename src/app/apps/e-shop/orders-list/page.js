"use client";
import React from 'react'
import OrdersList from '@/components/Apps/E-Shop/OrdersList'
import DefaultLayout from '@/components/Layouts/DefaultLayout'

const page = () => {
  return (
    <DefaultLayout>
      <OrdersList />
    </DefaultLayout>
  )
}

export default page