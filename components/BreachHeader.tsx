import { BellIcon } from "@heroicons/react/24/outline"
import { Button } from "./ui/button"
export function BreachHeader(total : {total:number}) {
    return (
        <div className="flex flex-col justify-center max-w-7xl font-headland mx-auto">
            <div className="flex justify-center text-2xl font-extrabold text-slate-50">
                Email Breach History
            </div>
            <div className="flex justify-center font-headland my-4 text-slate-500">
                Timeline of data breaches effecting your email address
            </div>
            <div className="flex flex-col border-2 my-4 justify-center rounded h-50 border-red-700 bg-red-300/45">
                <div className="flex justify-center font-extrabold text-3xl text-red-500/75">
                    total
                </div>
                <div className="flex justify-center py-4 font-extrabold text-3xl text-red-500/75">
                    Data Breaches
                </div>
                <div className="flex justify-center">
                    Oh no — leaked! This email address has been found in multiple data breaches. Review the details below to see where your data was exposed.
                </div>
            </div>
            <div className="flex my-4 border-2 border-slate-300 h-25 rounded py-4 items-center">
                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center">
                        <div className="flex flex-col">
                            <div className="flex items-center mx-4">
                                <BellIcon className="h-8 w-8 text-slate-500" />
                                <span className="text-neutral-50 ml-2 font-headland font-bold text-lg">Stay Protected</span>
                            </div>
                            <div className="ml-6 mt-1 text-neutral-50 font-medium ">
                                Get notified when your email appears in future data breaches
                            </div>
                        </div>
                    </div>
                    <div className="mx-4">
                        <Button className="bg-blue-700 text-neutral-50 h-10 font-semibold hover:bg-blue-600 hover:text-neutral-50" variant="outline">Notify Me</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}