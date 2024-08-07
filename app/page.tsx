import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex  min-h-screen flex-col items-center justify-between p-24">
      <div className="text-7xl font-bold" >

        Welcome to HealthHuv v1.0.0

      </div>
      <span>
        go to <Link className="uppercase border-gray-500 border m-3 rounded-lg p-2" href='/account/dashboard'> Dashboard</Link>
      </span>
    </main>
  );
}
