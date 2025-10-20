import React from 'react'
import {getAllcompanions} from "@/lib/actions/companion.actions";
import Companioncard from "@/components/ui/companioncard";
import {getSubjectColor} from "@/lib/utils";
import Searchinput from "@/components/ui/searchinput";
import Subjectfilter from "@/components/ui/subjectfilter";

const CompanionsLibrary  =async ({searchParams}: SearchParams) => {
const filters=await searchParams;
const subject = filters.subject? filters.subject:"";
const topic = filters.topic? filters.topic:"";

const companions= await getAllcompanions({subject,topic});

    return (
        <main>
            <section className="flext justify-between gap-4 max-sm:flex-col">
                <h1>Companion library</h1>
                <div className="flex gap-4">
                    <Searchinput/>
                    <Subjectfilter/>
                </div>
            </section>
            <section className="companions-grid">
                {companions.map((companion) => (
                    <Companioncard key={companion.id} {...companion} color={getSubjectColor(companion.subject)} />
                ))}
            </section>
        </main>
    )
}

export default CompanionsLibrary
