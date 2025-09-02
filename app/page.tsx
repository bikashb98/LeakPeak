import { Navbar } from "@/components/Navbar"
export default function Home(){
    return (
        <div 
            className="min-h-screen py-4"
            style={{
                background: 'radial-gradient(ellipse at center, rgba(55, 65, 81, 0.8) 0%, rgba(31, 41, 55, 1) 25%, rgba(17, 24, 39, 1) 50%, rgba(9, 9, 11, 1) 100%)',
                backgroundColor: '#0f0f0f'
            }}
        >
            <Navbar />
            <div className="text-white p-8">
               
            </div>
        </div>
    )
}