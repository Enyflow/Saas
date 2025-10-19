import React from 'react'
import Companionform from "@/components/ui/companionform";
import {auth} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";

const NewCompanion = async () => {
    const{userId} = await auth();
    if (!userId) redirect('/sign-in');
    return (
        <main className="min-lg:w-1/3 min-md:2/3 items-center justify-center">
            <article className="w-full gap-4 flex flex-col">
                <h1> Companion builder</h1>
                <Companionform />

            </article>
        </main>
    )
}

export default NewCompanion
