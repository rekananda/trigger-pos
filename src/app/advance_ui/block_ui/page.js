"use client"
import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
const Block_Ui = dynamic(() => import("@/components/Advance_UI/Block_Ui"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Block_Ui />
        </DefaultLayout>
    )
}

export default page
