export function DateLine({ date }: { date: string }) {
    return (
        <div className="flex justify-center h-150 mx-auto relative">
            <div className="h-full border-r border-blue-800 absolute  "></div>
            <div className="my-8 w-15 h-15 rounded-full bg-blue-700 flex items-center justify-center text-white text-sm font-bold relative border-2 border-blue-200 shadow-lg">{date}</div>
        </div>
    )
}