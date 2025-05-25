"use client";
import DefaultLayout from '@/components/Layouts/DefaultLayout'
const Calendar = dynamic(() => import('@/components/Apps/Calendar'), {ssr: false});

import React from 'react'
import dynamic from "next/dynamic";

const page = () => {
  return (
    <DefaultLayout>
      <Calendar />
    </DefaultLayout>
  )
}

export default page