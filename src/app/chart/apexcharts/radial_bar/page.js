"use client"
import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
const Radial_Bar = dynamic(() => import("@/components/Chart/Apexcharts/Radial_Bar"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Radial_Bar />
        </DefaultLayout>
    )
}

export default page
