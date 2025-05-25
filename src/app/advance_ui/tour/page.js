"use client";
import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
const Tour = dynamic(() => import("@/components/Advance_UI/Tour"), { ssr: false });

const page = () => {
    return (
        <DefaultLayout>
            <Tour />
        </DefaultLayout>
    )
}

export default page
