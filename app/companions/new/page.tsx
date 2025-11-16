import React from 'react'
import Companionform from "@/components/ui/companionform";
import {auth} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import {newCompanionPermissions} from "@/lib/actions/companion.actions";
import Image from "next/image";
import Link from "next/link";

const NewCompanion = async () => {
    const{userId} = await auth();
    if (!userId) redirect('/sign-in');
    const canCreateCompanion=await newCompanionPermissions();

    return (
        <main className="min-lg:w-1/3 min-md:2/3 items-center justify-center">
            {canCreateCompanion ? ( <article className="w-full gap-4 flex flex-col">
                <h1> Companion builder</h1>
                <Companionform />

            </article> ) : (
                <article className="companion-limit">
                    <Image src="/images/limit.svg" alt="companion limit reached" width={360} height={230} />
                    <div className="cta-badge"> Upgrade your plan</div>
                    <h1> You&apos;ve reached your limit</h1>
                <p> You&apos;ve reached your limit, upgrade to create more companions and premium feature</p>
                    <Link href="/subscriptions" className="btn-primary w-full justify-center"> Upgrade my plan</Link>
                </article>
                )}
        </main>
    )
}

export default NewCompanion
