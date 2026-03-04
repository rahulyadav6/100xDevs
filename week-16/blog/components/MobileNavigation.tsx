import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import ThemeToggle from "./ThemeToggle"
import { Button } from "./ui/button"
import { Ghost, Menu } from "lucide-react"
import { navItems } from "@/lib/constants"
import Link from "next/link"

export default function MobileNavigation() {
    return <div className="md:hidden flex items-center space-x-4">
        <ThemeToggle/>
        <Sheet>
            <SheetTrigger asChild>
                <Button className="cursor-pointer" variant="ghost" size="icon">
                    <Menu className="h-5 w-5"/>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetTitle></SheetTitle>
                <div className="flex flex-col space-y-4 mt-8 p-8">
                    {navItems.map((item) =>(
                        <Link href={item.href} key={item.name} className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-200">{item.name}</Link>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    </div>
}