import { PageProps } from '@/app/layout'
import React from 'react'

const Heading = ({ children }: PageProps) => {
    return (
        <h1 className='heading'>
            {children}
        </h1>
    )
}

export default Heading
