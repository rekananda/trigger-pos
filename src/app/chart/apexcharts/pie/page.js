"use client";
import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
const Pie = dynamic(() => import("@/components/Chart/Apexcharts/Pie"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Pie />
        </DefaultLayout>
    )
}

export default page
