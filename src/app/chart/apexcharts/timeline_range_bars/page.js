"use client"
import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
const Timeline_Range_Bars = dynamic(() => import("@/components/Chart/Apexcharts/Timeline_Range_Bars"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Timeline_Range_Bars />
        </DefaultLayout>
    )
}

export default page
