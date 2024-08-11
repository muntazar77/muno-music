import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { ModeToggle } from "./modetoggle";

export default function Header() {
    return (
        <header className="flex justify-between p-4 ">
        <h1 className="text-2xl font-bold">Muno Music</h1>
     <div className="hidden lg:block">
     <nav className="flex  items-center  ">
            <ul className="flex space-x-4 mr-5 ">
            <li>
                <Link href="#" className="hover:underline">Home</Link>
            </li>
            <li>
                <Link href="#" className="hover:underline">About</Link>
            </li>
            <li>
                <Link href="#" className="hover:underline">Contact</Link>
            </li>
            </ul>
            {/* searching bar */}
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Email" />
                <Button size="sm" type="submit">Subscribe</Button>
                </div>

        </nav>
     </div>
        <div className="flex items-center">
            <Button className="mx-3" >Sign In</Button>
            <ModeToggle />
        </div>
        </header>
    );
}