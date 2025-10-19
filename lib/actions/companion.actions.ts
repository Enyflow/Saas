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