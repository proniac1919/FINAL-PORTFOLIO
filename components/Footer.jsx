import Socials from './Socials';
const Footer = () => {
  return (
    <footer className='bg-white/10 dark:bg-black/40 backdrop-blur-lg py-12 border-t border-primary/10 mt-auto relative z-20'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-between gap-y-6'>
          <Socials
            containerStyles='flex gap-x-8 mx-auto xl:mx-0'
            iconsStyles='text-primary dark:text-white/80 text-[26px] hover:text-black dark:hover:text-primary transition-all hover:-translate-y-1 duration-300'
          />
          <div className='text-muted-foreground/80 font-light text-sm tracking-wide'>
            Copyright &copy; 2025 Abhishek Das. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;