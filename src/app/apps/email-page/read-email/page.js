"use client";
import React from 'react';
// import ReadEmail from '@/components/Apps/EmailPage/ReadEmail';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import dynamic from "next/dynamic";
const ReadEmail = dynamic(() => import('@/components/Apps/EmailPage/ReadEmail'), {
    ssr: false,
});

const page = () => {
  return (
    <DefaultLayout>
      <ReadEmail />
    </DefaultLayout>
  )
}

export default page