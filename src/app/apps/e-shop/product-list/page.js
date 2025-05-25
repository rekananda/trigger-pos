"use client";
import React from 'react'
import ProductList from '@/components/Apps/E-Shop/ProductList';
import DefaultLayout from '@/components/Layouts/DefaultLayout';

const page = () => {
  return (
    <DefaultLayout>
        <ProductList />
    </DefaultLayout>
  )
}

export default page;