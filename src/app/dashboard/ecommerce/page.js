"use client";
import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
const Ecommerce = dynamic(() => import("@/components/Dashboard/Ecommerce"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Ecommerce/>
        </DefaultLayout>
    )
}

export default page