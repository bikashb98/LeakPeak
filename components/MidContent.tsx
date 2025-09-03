import Image from "next/image";
import text from "../assets/images/main.png";

export function MidContent() {
    return (
        <div className="flex-col max-w-3xl mx-auto justify-center">
            <div className="flex justify-center items-center">
                <Image className=" object-cover" src={text} alt="Main" width={400} height={300} style={{width: '400px', height: '300px'}} />
            </div>
            <div className="flex justify-center items-center -mt-10 font-medium font-headland text-slate-500">
                <p className="text-white">Check if your email address is in a data breach</p>
            </div>
        </div>
    )
}