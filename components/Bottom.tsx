import { useEffect, useState } from "react";
import { BreachHeader } from "./BreachHeader"
import { NotBreached } from "./NotBreached";
import { Info } from "./Info";

interface BottomProps {
    breach: any;
    hasSearched: boolean;
}

export function Bottom({ breach, hasSearched }: BottomProps) {
    const [showBreachHeader, setShowBreachHeader] = useState(false);
    const [showNotBreached, setShowNotBreached] = useState(false);
    const [showInfo, setShowInfo] = useState(false)

    useEffect(() => {
        if (hasSearched) {
            if (breach && breach.length > 0) {
                setShowBreachHeader(true);
                setShowNotBreached(false);
                setShowInfo(true);
            } else {
                setShowBreachHeader(false);
                setShowNotBreached(true);
                setShowInfo(false);
            }
        } else {
            // Hide both if no search has been performed yet
            setShowBreachHeader(false);
            setShowNotBreached(false);
            setShowInfo(false)
        }
    }, [breach, hasSearched]);

    return (
        <div className="my-25 py-4 max-w-7xl mx-auto font-headland"> 
            {/* Breach Header Section - Conditionally visible */}
            {showBreachHeader && (
                <div className="w-full">
                    <BreachHeader total={breach.length || 0} />
                </div>
            )}
            {showNotBreached && (
                <div className="w-full">
                    <NotBreached />
                </div>
            )}
            {showInfo && (<div className="mx-15 mb-20">
                {breach.map((b: any, index: number) => ( <div key={index} className ={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}><Info key={index} breach={b} /></div> ))}
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