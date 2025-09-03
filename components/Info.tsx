import Image from "next/image"
export function Info ({breach}: { breach: any }) {

    const exposedData = breach?.xposed_data.split(";").map((item: string) => item.trim());

    return (
        <div className="flex  w-md  ">
            <div className="my-4 flex flex-col w-md h-140 border rounded-md py-4 px-4 border-sky-900 shadow-md hover:shadow-sky-900/50 hover:shadow-lg hover:border-sky-700 transition-all duration-300 ease-in-out ">
                <div className="flex w-full h-18 items-center">
                        <div className="h-15 w-15 rounded-md relative" style={{ position: 'relative', width: '60px', height: '60px' }}>
                            <Image
                                src={breach.logo}
                                alt={breach.breach + ' logo'}
                                fill
                                style={{ objectFit: 'contain', borderRadius: '0.375rem' }}
                                sizes="60px"
                            />
                        </div>
                    <div className="text-bold flex px-2 font-bold font-headland text-neutral-50 text-lg ">{breach.breach}</div>

                </div>
                <div className="h-60 w-full  items-center my-4 font-headland px-4 py-4 text-neutral-50 text-sm font-semibold ">
                    {breach.details}
                </div>
                <div className="font-headland text-neutral-50 font-bold text-sm py-2 px-4">
                    Compromised Data:
                </div>
                <div className="font-headland text-sm font-semibold  my-2 py-2 px-4">
                    <ul className="list-disc list-inside  marker:text-blue-600 marker:text-sm text-neutral-50">
                        {exposedData.map((d:any, i:number) => (<li key={i}>{d}</li>))}
                    </ul>
                </div>
                
            </div>
        </div>
    )
}