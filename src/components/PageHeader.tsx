import React from 'react'
import Link from 'next/link'
import TopNav from './nav/TopNav'

function PageHeader() {
    return (
        <header className='page-header'>
            {/* <div>
                <Link href={"/"}>Naapp</Link>
            </div>
            <div>
                <Link href={"/members"}>Members</Link>
                <Link href={"/lists"}>Lists</Link>
                <Link href={"/messages"}>Messages</Link>
            </div>
            <div>
                <Link href={"/login"}>Login</Link>
                <Link href={"/register"}>Register</Link>
            </div> */}
            <TopNav />
        </header>
    )
}

export default PageHeader
