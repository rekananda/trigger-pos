"use client";
import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
const Radar_Chart = dynamic(() => import("@/components/Chart/Apexcharts/Radar_Chart"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Radar_Chart/>
        </DefaultLayout>
    )
}

export default page
