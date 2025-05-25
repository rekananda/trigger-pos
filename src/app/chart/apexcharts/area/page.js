"use client";
import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
const Area = dynamic(() => import("@/components/Chart/Apexcharts/Area"), { ssr: false });

const page = () => {
    return (
        <DefaultLayout>
            <Area />
        </DefaultLayout>
    )
}

export default page
