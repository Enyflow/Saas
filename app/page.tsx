import React from 'react'
import {Button} from "@/components/ui/button";
import Companioncard from "@/components/ui/companioncard";
import Companionslist from "@/components/ui/companionslist";
import {Cta} from "@/components/ui/CTA";
import {recentSessions} from "@/constants";
import {getAllcompanions, getRecentSessions} from "@/lib/actions/companion.actions";
import {getSubjectColor} from "@/lib/utils";

const Page =async () => {
    const companions = await getAllcompanions({limit:3});
    const recentSessionCompanions=await getRecentSessions(10);
  return (
    <main>
        <h1 className="text-4xl">Popular companions</h1>
        <section className={"home-section"}>

            {companions.map((companion) => (
                <Companioncard key={companion.id} {...companion} color={getSubjectColor(companion.subject)} />
                ))}



        </section>

        <section className={"home-section"}>
            <Companionslist
            title="completed recently"
            companions={recentSessionCompanions}
            className="w-2/3 max-lg:w-full"
            />


            <Cta/>

        </section>


    </main>
  )
}

export default Page