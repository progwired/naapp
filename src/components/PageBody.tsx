import { PageProps } from '@/app/layout'
import React from 'react'

function PageBody({ children }: PageProps) {
    return (
        <main className="page-body">
            {children}
        </main>
    )
}

export default PageBody
