"use client"
import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
const Treemap = dynamic(() => import("@/components/Chart/Apexcharts/Treemap"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Treemap />
        </DefaultLayout>
    )
}

export default page
