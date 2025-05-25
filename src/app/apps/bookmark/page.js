"use client"
import React from 'react'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import dynamic from "next/dynamic";
const Bookmark = dynamic(() => import("@/components/Apps/Bookmark"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Bookmark/>
        </DefaultLayout>
    )
}

export default page