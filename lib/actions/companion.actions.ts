'use server'
import {auth} from "@clerk/nextjs/server";
import {createSupabaseclient} from "@/lib/supabase";

export const createCompanion =async (formdata:CreateCompanion) =>
{
const {userId:author} = await auth();
const supabase = createSupabaseclient();

const {data,error} = await supabase.from('companions').insert({...formdata,author}).select();

if(error || !data) throw new Error(error?.message || 'Failed to create companion');
return data[0];
}

export const getAllcompanions = async ({limit=10, page=1,subject, topic}:GetAllCompanions) =>
{
    const supabase = createSupabaseclient();
    let query= supabase.from('companions').select();

    if (subject && topic){
        query=query.ilike('subject', `%${subject}%` )
        .or (`topic.ilike.%${topic}%,name.ilike.%${topic}%`)
    }
    else if(subject){
        query=query.ilike('subject', `%${subject}%` )
    }
    else if(topic){
        query=query.or (`topic.ilike.%${topic}%,name.ilike.%${topic}%`)
    }

    query=query.range((page-1) * limit, page*limit-1);

    const { data:companions,error } = await query;

    if (error) throw new Error(error?.message || 'Failed to show companions');
    return companions;


}