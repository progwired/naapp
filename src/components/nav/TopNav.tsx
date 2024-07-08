import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { SiAirplayaudio } from "react-icons/si";
import NavLink from "./NavLink";


export default function TopNav() {
    return (
        <Navbar maxWidth="full"
            className="bg-gradient-to-r from-purple-400 to-purple-700 border-b border-b-purple-950"
            classNames={{
                item: [
                    "text-xl",
                    "text-white",
                    "capitalize",
                    "data-[active=true]:text-yellow-500"
                ]
            }}
        >
            <NavbarBrand as={Link} href="/" className="flex gap-2 text-slate-950 text-white">
                <SiAirplayaudio size={30} />
                <span className="font-bold text-2xl">
                    NAAPP
                </span>
            </NavbarBrand>
            <NavbarContent justify="center">
                <NavLink label="Matches" href="/members" />
                <NavLink label="Lists" href="/lists" />
                <NavLink label="Messages" href="/messages" />
            </NavbarContent>
            <NavbarContent justify="end">
                <Button as={Link} href="/login" variant="bordered" radius="sm" className="text-white">Login</Button>
                <Button as={Link} href="/register" variant="bordered" radius="sm" className="text-white">Register</Button>
            </NavbarContent>
        </Navbar>
    );
}
