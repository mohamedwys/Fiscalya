import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import { Toaster } from '@/components/ui/toaster'
import { SignedIn } from '@clerk/nextjs'
import { cn } from '@/lib/utils';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full bg-[#FBE9D0] overflow-auto root ">
      <SignedIn>
      <Sidebar />
      </SignedIn>
      <MobileNav />

      <div className="root-container">
        <div className="wrapper">
          {children}
        </div>
      </div>
      
      <Toaster />
    </main>
  )
}

export default Layout