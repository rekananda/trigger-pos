"use client";
import React from 'react'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import dynamic from "next/dynamic";
const FileManager = dynamic(() => import('@/components/Apps/FileManager'), { ssr: false });

const page = () => {
  return (
    <DefaultLayout>
      <FileManager />
    </DefaultLayout>
  )
}

export default page
