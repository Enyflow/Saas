'use client'
import React from 'react'
import Link from 'next/link'
import CompanionsLibrary from "@/app/companions/page";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const A =[{label:'Home', href:'/'},
    {label:'Companions', href:'/companions'},
    {label:'About', href:'/my-journey'},

]

const Navitems = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center gap-8">
            {A.map(({label,href}) => (
                <Link key={label} href={href}
                      className={cn(pathname=== href && 'text-primary font-semibold')}> {label}
                </Link>
            ))}

        </nav>
    )
}
export default Navitems
