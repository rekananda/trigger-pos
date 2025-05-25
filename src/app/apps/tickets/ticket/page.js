"use client";
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import dynamic from "next/dynamic";
const Ticket = dynamic(() => import('@/components/Apps/Tickets/Ticket'), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Ticket />
        </DefaultLayout>
    );
};

export default page;