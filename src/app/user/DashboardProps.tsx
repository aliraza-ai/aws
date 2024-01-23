"use client";

import React, { useState, useEffect } from 'react';
import { Sidebar } from "@/components/Sidebar";
import UserHeader from "@/components/UserHeader";
import { useRouter } from 'next/navigation';

const DashboardProps = ({ children }: { children: React.ReactNode; }) => {
    const router = useRouter();
    const [first, setfirst] = useState(false)
    useEffect(() => {
        if (typeof sessionStorage !== 'undefined') {
            const sessionTokens = sessionStorage.getItem('tokens');
            if (!sessionTokens) {
                setfirst(false)
                router.push('/auth/login');
            } else {
                setfirst(true)
            }
        }

    }, [router]);

    return (
        <>
            {/* {typeof sessionStorage !== 'undefined' && sessionStorage.getItem('tokens') ? */}
            {first ?
                <div className="flex relative">
                    <UserHeader />
                    <Sidebar />
                    {children}
                </div>
                : null}
        </>
    )
}

export default DashboardProps;