import { BreachHeader } from "./BreachHeader"
import { NotBreached } from "./NotBreached";

interface BottomProps {
    showBreachHeader?: boolean;
    showNotBreached?: boolean;
}

export function Bottom({ showBreachHeader = false, showNotBreached = false }: BottomProps) {
    return (

        <div className="my-25 py-4 max-w-7xl mx-auto font-headland"> 
            {/* Breach Header Section - Conditionally visible */}
            {showBreachHeader && (
                <div className="w-full">
                    <BreachHeader total={903} />
                </div>
            )}
            {showNotBreached && (
                <div className="w-full">
                    <NotBreached />
                </div>
            )}
            
            {/* Statistics Section - Bottom part with border */}
            <div className="flex w-full border rounded border-blue-600 shadow-md my-5">
                <div className="flex flex-col border-r border-blue-500 w-1/2 py-6 justify-center items-center">
                     <span className="font-extrabold text-4xl text-neutral-50">903</span>
                     <span className="pt-2 text-blue-800 font-medium">breached websites</span>
                </div>
                <div className="flex flex-col w-1/2 py-6 items-center justify-center">
                    <span className="font-extrabold text-4xl text-neutral-50">15,098,981,649</span>
                    <span className="pt-2 text-blue-800 font-medium">breached accounts</span>
                </div>
            </div>
        </div>
    )
}