import React from 'react'
import {Button} from "@/components/ui/button";
import Companioncard from "@/components/ui/companioncard";
import Companionslist from "@/components/ui/companionslist";
import {Cta} from "@/components/ui/CTA";

const Page = () => {
  return (
    <main>
        <h1 className="text-4xl">Popular companions</h1>
        <section className={"home-section"}>
            <Companioncard id={"11"}  name={"Neura"} topic={"Neural network"} subject={"Science"} duration={45} color={"#B0C4DE"}/>
            <Companioncard id={"22"}  name={"Countsy"} topic={"Derivatives"} subject={"Maths"} duration={30} color={"#E6F9E6"}/>
            <Companioncard id={"33"}  name={"Verba"} topic={"Literature"} subject={"English"} duration={30} color={"#FFFACD"}/>
        </section>
        <section className={"home-section"}>
            <Companionslist/>
            <Cta/>

        </section>


    </main>
  )
}

export default Page