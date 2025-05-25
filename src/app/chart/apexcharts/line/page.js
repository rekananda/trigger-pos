"use client";
import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
const Line = dynamic(() => import("@/components/Chart/Apexcharts/Line"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Line />
        </DefaultLayout>
    )
}

export default page
