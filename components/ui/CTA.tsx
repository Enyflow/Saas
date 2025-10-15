import React from 'react'
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export const Cta = () => {
    return (
        <section className="cta-section">
            <div className="cta-badge">Start Learning</div>
            <h2 className="text-3xl font-bold">
                Build and customize learning experience
            </h2>
            <p className="text-sm">
                Pick name, subject, voice & personality to start learning through natural conversations and have more fun!
            </p>
            <Image src="/images/cta.svg" alt="cta" width={362} height={232} />
            <Button className="btn-primary" ><Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
            <Link href="/companions/new">Build new companion</Link>
            </Button>


            </section>
    )
}
