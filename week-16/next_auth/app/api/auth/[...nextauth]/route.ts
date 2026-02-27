// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req:NextRequest, arg:any){
//     const params = await arg.params;
//     console.log(params.authRoutes)
//     return NextResponse.json({
//         message:"asd"
//     })
// }


import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name:"Email",
            credentials:{
                username: {label:'Username', type:'text', placeholder:'Email'},
                password: {label:'password', type:'password', placeholder:'Password'},
            },
            async authorize(credentials:any){
                return{
                    id:"user1"
                };
            },
        })
    ]
})

export const GET = handler;
export const POST = handler;