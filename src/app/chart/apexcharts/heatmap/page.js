"use client";
import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";

const Heatmap = dynamic(() => import("@/components/Chart/Apexcharts/Heatmap"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Heatmap />
        </DefaultLayout>
    )
}

export default page
