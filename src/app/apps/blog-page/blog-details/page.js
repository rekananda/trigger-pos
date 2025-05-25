"use client";
import React from 'react'
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import dynamic from "next/dynamic";
const BlogDetails = dynamic(() => import('@/components/Apps/BlogPage/BlogDeatils'), { ssr: false });

const page = () => {
  return (
    <DefaultLayout>
      <BlogDetails />
    </DefaultLayout>
  )
}

export default page;
