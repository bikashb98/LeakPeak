"use client"
import Image from 'next/image';
import logo from '../assets/images/logo.png';
import { Button } from "@/components/ui/button"

export function Navbar () {
    
    const onClickHandler = () => {
        console.log('Dashboard clicked');
    }

    return (
        <div className="flex justify-center p-4 max-w-6xl border border-slate-700 h-15 mx-auto rounded-xl">
            <div className="flex items-center justify-between w-full px-4">
                <div className="flex items-center p-4 -ml-8">
                    <Image className='scale-170' src={logo} alt="Logo" width={80} height={80} />
                </div>
                <div className="flex items-center justify-between p-4 font-bold text-slate-300 w-100">
                    <span className='hover:text-slate-400 cursor-pointer'>Who&apos;s Been Leaked</span>
                    <span className='hover:text-slate-400 cursor-pointer'>Notify Me</span>
                    <span className='hover:text-slate-400 cursor-pointer'>About</span>
                </div>
                <div className="flex items-center p-4 -mr-8 ">
                    <Button onClick={onClickHandler} className="w-34 bg-blue-900 hover:bg-blue-950 hover:text-white text-white" variant="outline">Dashboard</Button>
                </div>
            </div>
        </div>
    );
}