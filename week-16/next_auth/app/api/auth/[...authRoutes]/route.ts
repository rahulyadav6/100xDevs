import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest, arg:any){
    const params = await arg.params;
    console.log(params.authRoutes)
    return NextResponse.json({
        message:"asd"
    })
}