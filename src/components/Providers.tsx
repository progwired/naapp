import { PageProps } from '@/app/layout'
import { NextUIProvider } from '@nextui-org/react'
import React from 'react'

function Providers({ children }: PageProps) {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}

export default Providers
