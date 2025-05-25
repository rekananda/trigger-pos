"use client";
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import dynamic from "next/dynamic";
const Project = dynamic(() => import('@/components/Dashboard/Project'), {ssr: false});

const page = () => {
  return (
    <DefaultLayout>
      <Project />
    </DefaultLayout>
  )
}

export default page