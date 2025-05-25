"use client"
import React from 'react'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import dynamic from "next/dynamic";
const AddBlog = dynamic(() => import("@/components/Apps/BlogPage/AddBlog"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <AddBlog />
        </DefaultLayout>
    )
}

export default page