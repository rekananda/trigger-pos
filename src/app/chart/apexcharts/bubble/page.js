"use client";
import React from 'react'
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
const Bubble = dynamic(() => import("@/components/Chart/Apexcharts/Bubble"), { ssr: false });

const page = () => {
    return (
        <DefaultLayout>
            <Bubble />
        </DefaultLayout>
    )
}

export default page
