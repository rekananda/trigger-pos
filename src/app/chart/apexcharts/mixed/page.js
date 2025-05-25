"use client";
import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
const Mixed = dynamic(() => import("@/components/Chart/Apexcharts/Mixed"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Mixed />
        </DefaultLayout>
    )
}

export default page
