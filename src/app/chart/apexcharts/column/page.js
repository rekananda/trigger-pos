"use client"
import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
const Column = dynamic(() => import("@/components/Chart/Apexcharts/Column"), { ssr: false });

const page = () => {
    return (
        <DefaultLayout>
            <Column />
        </DefaultLayout>
    )
}

export default page
