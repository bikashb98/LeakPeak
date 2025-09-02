import { Input } from "./ui/input";
import { Button } from "./ui/button";
export function MailInput() {
    return (
        <div className="flex justify-center items-center  max-w-xl mx-auto my-12">
            <div className="flex border items-center w-full h-14 rounded-lg p-2 bg-neutral-50">
                <Input placeholder="Email address" className="!text-lg font-headland border-0 flex-1 outline-none font-medium text-slate-200" />
                <Button className="ml-2 px-6 bg-blue-900 hover:bg-blue-950 hover:text-white text-white font-headland text-sm" variant="outline">Check</Button>
            </div>
        </div>
    )
}