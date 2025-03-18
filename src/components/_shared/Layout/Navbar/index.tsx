import Link from "next/link";

export default function Navbar() {
    return (
      <nav className="w-full bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-xl font-bold">DevCollab</h1>
          <ul className="flex gap-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
  