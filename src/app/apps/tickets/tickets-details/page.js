"use client";
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import dynamic from "next/dynamic";
const TicketDetails = dynamic(() => import('@/components/Apps/Tickets/TicketDetails'), { ssr: false });

const page = () => {
    return (
        <DefaultLayout>
            <TicketDetails />
        </DefaultLayout>
    );
};

export default page;