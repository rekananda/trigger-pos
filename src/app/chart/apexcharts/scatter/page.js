"use client"
import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
const Scatter = dynamic(() => import("@/components/Chart/Apexcharts/Scatter"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Scatter />
        </DefaultLayout>
    )
}

export default page
