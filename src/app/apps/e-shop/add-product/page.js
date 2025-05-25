"use client";
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import dynamic from "next/dynamic";
const AddProduct = dynamic(() => import('@/components/Apps/E-Shop/AddProduct'), { ssr: false });

const page = () => {
  return (
    <DefaultLayout>
        <AddProduct />
    </DefaultLayout>
  )
}

export default page