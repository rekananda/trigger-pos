"use client";
import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
const Animation = dynamic(() => import("@/components/Advance_UI/Animation"), { ssr: false });

const page = () => {
    return (
        <DefaultLayout>
            <Animation />
        </DefaultLayout>
    )
}

export default page
