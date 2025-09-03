"use client"

import { Input } from "./ui/input";
import { Button } from "./ui/button";


export function MailInput() {

    const onClickHandler = () => {
        console.log('Hi there')
    }

    return (
        <div className="flex justify-center items-center  max-w-xl mx-auto my-12">
            <div className="flex border items-center w-full h-14 rounded-lg p-2 bg-neutral-50">
                <Input placeholder="Email address" className=" font-headland border-0 flex-1 outline-none font-medium text-slate-600" />
                <Button onClick={onClickHandler} className="ml-3 px-6 h-10 bg-blue-800 !hover:bg-blue-700 !hover:text-white text-white font-headland text-sm" variant="outline">Check</Button>
            </div>
        </div>
    )
}