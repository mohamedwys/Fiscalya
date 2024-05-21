
import { UserButton } from "@clerk/nextjs";

import MobileNav from "@/components/shared/MobileNav";

const Navbar = () => {
    return(
        <div className="flex items-center p-4">
            <MobileNav />
        <div className="flex w-full justify-end">
            <UserButton afterSignOutUrl="/" />
        </div>
        </div>
    )
}

export default Navbar;