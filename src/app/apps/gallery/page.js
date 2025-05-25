"use client";
import React from 'react'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import dynamic from "next/dynamic";
const Gallery = dynamic(() => import('@/components/Apps/Gallery'), { ssr: false });

const page = () => {
  return (
    <DefaultLayout>
        <Gallery />
    </DefaultLayout>
  )
}

export default page