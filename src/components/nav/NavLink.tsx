"use client"
import React from 'react'
import { Link, NavbarItem } from '@nextui-org/react'
import { usePathname } from 'next/navigation';

interface NavLinkProps {
    label: string;
    href: string;
}

function NavLink({ label, href }: NavLinkProps) {
    const pathName = usePathname()
    console.log(pathName)
    return (
        <NavbarItem isActive={pathName === href} as={Link} href={href}>{label}</NavbarItem>
    )
}

export default NavLink
