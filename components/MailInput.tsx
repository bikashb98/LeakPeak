
import {useState} from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useDebounce } from "@/app/hooks/debounce";

interface MailInputProps {
    onCheckBreach: (email: string) => Promise<void>;
   
}


export function MailInput({onCheckBreach}: MailInputProps) {
    const [mail, setMail] = useState("");
    const debouncedMail = useDebounce({value: mail, delay: 1000})
   

    const onClickHandler = async () => {
        await onCheckBreach(debouncedMail);
    }
    
   

    return (
        <div className="flex justify-center items-center  max-w-xl mx-auto my-12">
            <div className="flex border items-center w-full h-14 rounded-lg p-2 bg-neutral-50">
                <Input 
                    onChange={e => setMail(e.target.value)} 
                    placeholder="Email address" 
                    className=" font-headland border-0 flex-1 outline-none font-medium text-slate-600" 
                />
                <Button 
                    onClick={onClickHandler} 
                    className="ml-3 px-6 h-10 bg-blue-800 hover:!bg-blue-700 !hover:text-white text-white font-headland text-sm" 
                    variant="outline"
                >
                    Check
                </Button>
            </div>
        </div>
    )
}