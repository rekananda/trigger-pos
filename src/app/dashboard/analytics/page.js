"use client";
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import dynamic from "next/dynamic";
const Analytics = dynamic(() => import('@/components/Dashboard/Analytics'), {ssr: false});

const Page = () => {
    return (
        <DefaultLayout>
            <Analytics />
        </DefaultLayout>
    );
};

export default Page;
