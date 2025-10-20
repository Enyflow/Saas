'use client'
import React, {useEffect, useState} from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {subjects} from "@/constants";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {formUrlQuery, removeKeysFromUrlQuery} from "@jsmastery/utils";



const Subjectfilter = () => {
    const pathname= usePathname();
    const router=useRouter();
    const searchParams=useSearchParams();
    const query=searchParams.get("topic") || '';
    const[subject,setSubject]=useState(query);

    useEffect(()=>{

            let newUrl = "";
            if (subject==="all") {
                newUrl = removeKeysFromUrlQuery({
                    params: searchParams.toString(),
                    keysToRemove: ["subject"],
                });
            } else {
                newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: "subject",
                    value:subject,
                });

            }
            router.push(newUrl, { scroll: false });
    },[subject]);


    return (
        <Select onValueChange={setSubject}>
            <SelectTrigger className=" capitalize w-[180px]">
                <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="all"> All subjects</SelectItem>
                    {subjects.map((subject) =>(
                        <SelectItem value={subject} key={subject} className="capitalize">
                            {subject}
                        </SelectItem>
                    ))}

                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
export default Subjectfilter
