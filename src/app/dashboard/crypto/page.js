"use client";
import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
const Crypto = dynamic(() => import("@/components/Dashboard/Crypto"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Crypto/>
        </DefaultLayout>
    )
}

export default page