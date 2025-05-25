"use client";
import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
const Tree_View = dynamic(() => import("@/components/Advance_UI/Tree_View"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Tree_View />
        </DefaultLayout>
    )
}

export default page
