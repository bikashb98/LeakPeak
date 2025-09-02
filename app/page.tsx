import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="h-screen flex justify-center bg-gradient-to-br from-blue-950 via-gray-900 to-gray-950 border border-red-500">
      <div className="flex items-center border border-bg-cyan-500 w-lg">
        <div className="flex w-full">
          <Input className= 'h-13 bg-amber-50' placeholder = 'Email address' />
        </div>
      </div>
    </div>
  );
}
