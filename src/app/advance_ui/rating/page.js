"use client";
import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
const Rating = dynamic(() => import("@/components/Advance_UI/Rating"), { ssr: false });

const page = () => {
    return (
        <DefaultLayout>
            <Rating />
        </DefaultLayout>
    )
}

export default page
