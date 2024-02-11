'use client'

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function Search() {
    const searchParams = useSearchParams();

    return (
        <>
        <h1>This Component is an independent page.</h1>
        <h1>dataId: {searchParams.get('dataId')}</h1>
        </>
    );
}

export default function Page() {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Search />
        </Suspense>
    );
}
