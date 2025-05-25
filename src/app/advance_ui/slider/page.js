"use client";
import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("@/components/Advance_UI/Slider"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Slider/>
        </DefaultLayout>
    )
}

export default page
