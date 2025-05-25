"use client";
import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
const Boxplot = dynamic(() => import("@/components/Chart/Apexcharts/Boxplot"), { ssr: false });

const page = () => {
    return (
        <DefaultLayout>
            <Boxplot />
        </DefaultLayout>
    )
}

export default page
