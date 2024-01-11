"use client";

import React, { useEffect } from 'react';
import { Sidebar } from "@/components/Sidebar";
import UserHeader from "@/components/UserHeader";
import { useRouter } from 'next/navigation';

const DashboardProps = ({ children }: { children: React.ReactNode; }) => {
    const router = useRouter();

    useEffect(() => {
        if (typeof sessionStorage !== 'undefined') {
            const sessionTokens = sessionStorage.getItem('tokens');
            if (!sessionTokens) {
                if (typeof window === 'undefined') {
                    router.replace('/auth/login');
                } else {
                    router.push('/auth/login');
                }
            }
        }

    }, [router]);

    if (typeof sessionStorage !== 'undefined') {
        if (!sessionStorage.getItem('tokens')) {
            return null;
        }
    }
    return (
        <div className="flex relative">
            <UserHeader />
            <Sidebar />
            {children}
        </div>
    )
}

export default DashboardProps;
