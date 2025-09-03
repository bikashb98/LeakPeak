import { useEffect, useState } from "react";
import { BreachHeader } from "./BreachHeader"
import { NotBreached } from "./NotBreached";
import { Info } from "./Info";
import { DateLine } from "./DateLine";

interface BottomProps {
    breach: any;
    hasSearched: boolean;
}

export function Bottom({ breach, hasSearched }: BottomProps) {
    const [showBreachHeader, setShowBreachHeader] = useState(false);
    const [showNotBreached, setShowNotBreached] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [showDateLine, setShowDateLine] = useState(false);

    useEffect(() => {
        if (hasSearched) {
            if (breach && breach.length > 0) {
                setShowBreachHeader(true);
                setShowNotBreached(false);
                setShowInfo(true);
                setShowDateLine(true);
            } else {
                setShowBreachHeader(false);
                setShowNotBreached(true);
                setShowInfo(false);
                setShowDateLine(false);
            }
        } else {
            // Hide both if no search has been performed yet
            setShowBreachHeader(false);
            setShowNotBreached(false);
            setShowInfo(false);
            setShowDateLine(false);

        }
    }, [breach, hasSearched]);

    return (
        <div className="my-25 py-4 max-w-7xl mx-auto font-headland"> 
            {/* Breach Header Section - Conditionally visible */}
            {showBreachHeader && (
                <div className="w-full">
                    <BreachHeader total={breach?.length || 0} />
                </div>
            )}
            {showNotBreached && (
                <div className="w-full">
                    <NotBreached />
                </div>
            )}
            {showInfo && (
                <div className="mb-20 relative">
                    {/* Continuous timeline line */}
                    {showDateLine && (
                        <div className="absolute left-1/2 top-0 bottom-0 w-0 border-l-2 border-blue-800 transform -translate-x-1/2"></div>
                    )}
                    
                    {breach
                        .sort((a: any, b: any) => new Date(b.xposed_date).getTime() - new Date(a.xposed_date).getTime())
                        .map((b: any, index: number) => (
                        <div key={index} className="relative mb-8">
                            {/* Date circle on timeline */}
                            {showDateLine && (
                                <div className="absolute left-1/2 top-4 w-15 h-15 rounded-full bg-blue-800 flex items-center justify-center text-white text-sm font-bold border-2 border-blue-200 shadow-lg transform -translate-x-1/2 z-10">
                                    {b.xposed_date}
                                </div>
                            )}
                            
                            {/* Info card positioned left or right */}
                            <div className={`flex ${index % 2 === 0 ? "justify-start pl-8" : "justify-end pr-8"}`}>
                                <Info breach={b} />
                            </div>
                        </div>
                    ))}
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