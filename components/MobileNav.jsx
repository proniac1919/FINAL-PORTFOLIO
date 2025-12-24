import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';
import Nav from './Nav';
import Logo from './Logo';
import Socials from './Socials';
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent className="bg-white/10 dark:bg-black/90 backdrop-blur-xl border-l border-primary/20 w-[260px] sm:w-[300px]">
        <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-16'>
            <Logo />
            <Nav
              containerStyles='flex flex-col items-start gap-y-8'
              linkStyles='text-xl font-light uppercase tracking-widest text-white hover:text-primary transition-colors flex items-center gap-x-2'
              withIcons={true}
            />
          </div>
          <Socials containerStyles='flex gap-x-4' iconsStyles='text-2xl text-white' />
        </div>
      </SheetContent>
    </Sheet>

  );

};

export default MobileNav;