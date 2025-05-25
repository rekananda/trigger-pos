"use client";
import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
const Chart_js = dynamic(() => import("@/components/Chart/Chart_js"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Chart_js />
        </DefaultLayout>
    )
}

export default page
