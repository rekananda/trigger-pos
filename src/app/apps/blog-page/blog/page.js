"use client";
import React from 'react'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import dynamic from "next/dynamic";
const Blog = dynamic(() => import('@/components/Apps/BlogPage/Blog'), {ssr: false});

const page = () => {
  return (
    <DefaultLayout>
      <Blog />
    </DefaultLayout>
  )
}

export default page