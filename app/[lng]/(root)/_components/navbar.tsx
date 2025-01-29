import Logo from '@/components/shared/logo'
import ModeToggle from '@/components/shared/mode-toggle'
import { Button } from '@/components/ui/button'
import { navLinks } from '@/constants'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import GlobalSearch from './global-search'
import LanguageDropdown from '@/components/shared/language-gropdown'

const Navbar = () => {
  return (
    <div className='fixed inset-0 z-40 h-20 bg-background/70 backdrop-blur-xl'>
      <div className='container mx-auto flex h-full max-w-7xl items-center justify-between border-b'>
        <div className='flex items-center gap-4'>
          <Logo />
          <div className='flex items-center gap-3 border-l pl-2'>
            {navLinks.map(nav => (
              <Link href={`/${nav.route}`} key={nav.route} className='font-medium hover:underline hover:text-blue-500 transition-colors'>
                {nav.name}
              </Link>
            ))}
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-2 border-r pr-3'>
            <GlobalSearch />
            <Button size={'icon'} variant={"ghost"}>
              <ShoppingCart />
            </Button>
            <LanguageDropdown />
            <ModeToggle />
          </div>
          <Button variant={'ghost'} size={'lg'} rounded={'full'}>Log in</Button>
          <Button size={'lg'} rounded={'full'}>Sign up</Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar