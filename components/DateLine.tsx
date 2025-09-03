
interface Breach {
    breach: string;
    logo: string;
    details: string;
    xposed_data: string;
    xposed_date: string;
}

export function DateLine({ breach }: { breach: Breach }) {
    return (
        <div className="flex w-full justify-center h-150  relative">
            <div className="h-full border-r border-blue-800 absolute  "></div>
            <div className="my-8 w-15 h-15 rounded-full bg-blue-800 flex items-center justify-center text-white text-sm font-bold relative border-2 border-blue-200 shadow-lg">{breach.xposed_date}</div>
        </div>
    )
}