"use client"
import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
const Candlestick = dynamic(() => import("@/components/Chart/Apexcharts/Candlestick"), { ssr: false });

const page = () => {
    return (
        <DefaultLayout>
            <Candlestick />
        </DefaultLayout>
    )
}

export default page
