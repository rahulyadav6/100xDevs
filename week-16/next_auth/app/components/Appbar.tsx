"use client"
import {signIn, signOut} from "next-auth/react"
export const Appbar = ()=>{
    return(
        <div className="flex justify-between">
        <button className="cursor-pointer" onClick={()=>{
            signIn();
        }} >Signin</button>
        <button className="cursor-pointer" onClick={()=>{
            signOut();
        }} >Logout</button>
    </div>
    ) 
}