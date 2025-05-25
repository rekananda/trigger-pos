"use client";
import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
const Bar = dynamic(() => import("@/components/Chart/Apexcharts/Bar"), { ssr: false });

const page = () => {
    return (
        <DefaultLayout>
            <Bar />
        </DefaultLayout>
    )
}

export default page
